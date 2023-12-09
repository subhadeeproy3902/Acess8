import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import Loading2 from "../../Loading/Loading2";
import { Link } from "react-router-dom";

function QrGenerator() {
  const { currentUser } = useAuth();
  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const [longUrl, setLongUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [qrimage, setQrimage] = useState("");
  const [qrtitle, setQrtitle] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlInDev = "http://localhost:5000/api/qr/generate-qr";
    const urlInProd = "https://mynly.vercel.app/api/qr/generate-qr";
    const url = nodeEnv === "production" ? urlInProd : urlInDev;

    try {
      setLoading(true);
      const response = await axios.post(
        url,
        {
          longUrl: longUrl,
          userUid: currentUser.uid,
        },
        { withCredentials: true, crossDomain: true }
      );
      setQrCode(response.data.qrCode);
      setUniqueId(response.data.urlCode);
      setErrorMessage("");
      const byteCharacters = atob(response.data.qrCode);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });

      setQrimage(URL.createObjectURL(blob));

      if (
        response.data.title === "" ||
        response.data.title === null ||
        response.data.title === "Just a moment..." ||
        !response.data.title
      ) {
        setQrtitle(
          "Untitled " +
            new Date(response.data.date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })
        );
      } else {
        setQrtitle(response.data.title);
      }
    } catch (error) {
      setQrCode("");
      setErrorMessage("Invalid URL provided");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="p-6 pt-24 min-h-screen lg:ml-64 bg-gradient-to-b from-pink-200 via-pink-100 to-white">
        <div className="w-full flex flex-col">
          <h1 className="text-4xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {" "}
            QR7{" "}
          </h1>
          <p className="my-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
            Enhance link sharing effortlessly with QR7 - An innovative QR code
            generator. Simplify connection, amplify engagement in just a scan!
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0"></hr>
          <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-12 lg:gap-20 mb-8">
            <div className="w-full flex gap-7 sm:gap-20 flex-col sm:flex-row justify-between">
              <div className="w-full flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="mb-8 w-full">
                  <div className="mb-5">
                    <label
                      htmlFor="url"
                      className="block mb-4 text-2xl font-semibold text-gray-900"
                    >
                      Paste Your Link Here...
                    </label>
                    <input
                      id="url"
                      className="bg-pink-100 border outline-pink-400 border-pink-300 text-gray-900 text-base rounded-lg focus:ring-pink-500 focus:border-pink-900 block w-full p-2.5 placeholder:text-gray-600"
                      type="text"
                      name="url"
                      value={longUrl}
                      onChange={(e) => setLongUrl(e.target.value)}
                      placeholder="Enter your URL here"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:ring-pink-300"
                  >
                    Generate QR
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </form>
                {qrCode && !loading && (
                  <div className="mt-2">
                    <p className="text-gray-500 text-lg font-normal flex items-center gap-5">
                      Your Unique Tag:
                      <span className="bg-green-300 text-green-950 mt-1 w-32 text-sm font-medium px-2.5 pb-0.5 h-[35px] flex items-center justify-center rounded select-none">
                        {uniqueId}
                      </span>
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full h-80 mr-10 flex justify-center items-center">
                <div class="relative  bg-gray-800 border-gray-800 border-[10px] rounded-[2.5rem] w-full h-full">
                  <div class="h-[41px] w-[6px] bg-gray-800 absolute -end-[16px] top-[40px] rounded-e-lg"></div>
                  <div class="h-[32px] w-[6px] bg-gray-800 absolute -end-[16px] top-[88px] rounded-e-lg"></div>
                  <div class="rounded-[2rem] overflow-hidden w-full h-full">
                    <div className="absolute left-0">
                      <button className="inline-flex items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-blue-500 rounded-tl-[2rem] rounded-br-lg pointer-events-none cursor-default">
                        QR Code Here
                      </button>
                    </div>
                    <div className="absolute right-0">
                      <a
                        href={qrimage}
                        download={`${qrtitle}.png`}
                        className={`inline-flex items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white rounded-tr-[2rem] rounded-bl-lg ${
                          !qrCode || loading
                            ? "bg-gray-600 pointer-events-none cursor-default"
                            : "bg-green-500 hover:bg-green-600 "
                        }`}
                      >
                        Download QR
                      </a>
                    </div>
                    <div className="absolute bottom-0 w-full">
                      <a href={longUrl} target="_blank" rel="noreferrer"
                        className={`inline-flex w-full items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white rounded-b-[2rem]  ${
                          !qrCode || loading
                            ? "bg-gray-600 pointer-events-none cursor-default"
                            : "bg-pink-500 hover:bg-pink-600 "
                        }`}
                      >
                        SCAN
                      </a>
                    </div>
                    <div class="flex justify-center items-center text-center w-full h-full bg-white">
                      {loading && (
                        <>
                          <Loading2 />
                        </>
                      )}
                      {qrCode && !loading && (
                        <div className="h-[200px] w-[200px]">
                          <img
                            src={`data:image/png;base64,${qrCode}`}
                            alt="QR Code"
                            className="object-contain w-full h-full"
                          />
                        </div>
                      )}
                      {!qrCode && errorMessage && !loading ? (
                        <p className="text-red-500 text-xl">{errorMessage}</p>
                      ) : (
                        !qrCode &&
                        !errorMessage &&
                        !loading && (
                          <img
                            src="/assets/noqr.webp"
                            className="w-[250px]"
                            alt="QR Code"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-[0.99px] my-6 mt-0 bg-gray-700 border-0"></hr>
        </div>
        <div className="flex flex-col sm:flex-row">
          <Link
            to="/dashboard/past-qrs"
            className="inline-flex items-center w-40 justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:ring-pink-300"
          >
            View Past URLs
          </Link>

          <div className="flex mt-4 sm:mt-0 sm:ml-6 items-center">
            <p className="text-center text-gray-500 text-lg font-bold">Or try :</p>
            <Link
              to="/dashboard/qr-generator"
              className="inline-flex ml-3 items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:ring-amber-300"
            >
              AeroNotes
            </Link>
            <Link
              to="/dashboard/url-shortener"
              className="inline-flex ml-4 items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Mynly
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default QrGenerator;
