import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading2 from "../../Loading/Loading2";

function UrlShortener() {
  const { currentUser } = useAuth();
  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const [longUrl, setLongUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlInDev = "http://localhost:5000/api/url/shorten";
    const urlInProd = "https://mynly.vercel.app/api/url/shorten";
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
      setShortenedUrl(response.data.shortUrl);
      setErrorMessage("");
    } catch (error) {
      setShortenedUrl("");
      setErrorMessage("Invalid URL provided");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleCopyClick = () => {
    if (shortenedUrl) {
      navigator.clipboard
        .writeText(shortenedUrl)
        .then(function () {
          setCopyStatus("Copied");
          setTimeout(() => {
            setCopyStatus("Copy");
          }, 2200);
          toast.success("Link has been Copied!");
        })
        .catch((error) => {
          toast.error("Failed to copy link!");
        });
    }
  };

  return (
    <>
      <div className="p-6 pt-24 min-h-screen lg:ml-64 bg-gradient-to-b from-sky-100 to-white">
        <div className="w-full flex flex-col">
          <h1 className="text-4xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {" "}
            Mynly{" "}
          </h1>
          <p className="my-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
            Experience the Magic of Minification: Elevate Your URLs with Mynly,
            Your Premier Link Shortening Solution!
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0"></hr>
          <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-12 lg:gap-20 mb-8">
            <div className="w-full flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-5">
                  <label
                    htmlFor="url"
                    className="block mb-4 text-2xl font-semibold text-gray-900"
                  >
                    Paste Your Link Here...
                  </label>
                  <input
                    id="url"
                    className="bg-blue-100 border border-blue-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-900 block w-full p-2.5 placeholder:text-gray-600"
                    type="text"
                    name="url"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="Enter your URL here"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                >
                  Shorten
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
              {loading && (
                <>
                  <div className="h-20 flex flex-col justify-center">
                    <Loading2 />
                  </div>
                </>
              )}
              {shortenedUrl && !loading && (
                <div className="h-20">
                  <p className="mb-4 text-2xl font-semibold text-gray-900">
                    Your shortened link is:
                  </p>
                  <div className="flex w-full lg:w-[26rem]">
                    <input
                      type="text"
                      value={shortenedUrl}
                      readOnly="readonly"
                      disabled
                      className="bg-green-200 pointer-events-none border rounded-r-none border-green-400 text-gray-900 text-base rounded-lg block w-full p-2.5 mb-4 select-none"
                    />
                    <button
                      onClick={handleCopyClick}
                      disabled={copyStatus === "Copied"}
                      className="inline-flex items-center h-[46px] rounded-l-none justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300"
                    >
                      {copyStatus}
                    </button>
                  </div>
                </div>
              )}

              {!shortenedUrl && errorMessage && !loading ? (
                <div className="h-20 flex flex-col justify-center">
                  <p className="text-red-500 text-xl">{errorMessage}</p>
                </div>
              ) : (
                !shortenedUrl &&
                !errorMessage &&
                !loading && (
                  <div className="h-20 flex flex-col justify-center">
                    <p className="text-xl">No URL has been shortened yet.</p>
                  </div>
                )
              )}
            </div>
            <div className="sm:mr-10">
              <img src="/assets/url.svg" alt="" height={300} width={500} />
            </div>
          </div>
          <hr className="h-[0.99px] my-6 mt-0 bg-gray-700 border-0"></hr>
        </div>
        <div className="flex">
          <Link
            to="/dashboard/past-urls"
            className="inline-flex items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            View Past URLs
          </Link>

          <div className="flex items-center">
            <div className="text-center text-gray-500 px-5 text-lg font-bold">
              Or try :
              <Link
                to="/dashboard/qr-generator"
                className="inline-flex ml-5 items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:ring-pink-300"
              >
                QR7
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UrlShortener;
