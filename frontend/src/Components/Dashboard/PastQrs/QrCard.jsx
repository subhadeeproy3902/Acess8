import React, { useEffect, useState } from "react";
import axios from "axios";

const QrCard = ({ url }) => {
  const [qrimage, setQrimage] = useState("");

  useEffect(() => {
    const byteCharacters = atob(url.qrCode);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });

    setQrimage(URL.createObjectURL(blob));
  }, [url.qrCode])

  const [loading, setLoading] = useState(false);

  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const baseUrl =
    nodeEnv === "production"
      ? "https://mynly.vercel.app"
      : "http://localhost:5000";

  const deleteUrl = async (id) => {
    setLoading(true);
    const api = baseUrl + "/api/qr/delete/" + id;
    try {
      const response = await axios.delete(api);
      if (response.status !== 200) {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <>
      {loading ? (
        <div className="hidden" />
      ) : (
        <div className="sm:p-7 p-6 flex bg-white border-2 border-stone-300 hover:border-blue-600 duration-75 rounded-xl flex-col relative">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex gap-6 flex-col sm:flex-row w-full">
              <div className="hidden w-8 sm:flex rounded-full ">
                <img className="rounded-full h-7 w-7 mt-1" alt="ok" src={((url.photoUrl === '' || !url.photoUrl) && (url.icon === "" || !url.icon)) ? "/assets/iconnotfound.png" : url.photoUrl || url.icon} />
              </div>
              <div className="flex gap-1 justify-center items-center flex-col sm:flex-row sm:justify-start sm:items-start w-full">
                <div className="flex border-none w-full sm:w-10/12 flex-col">
                  <div className="flex mb-4 flex-col gap-6 sm:gap-4">
                    <h3 className="m-0 break-all text-2xl p-0 line-clamp-1 font-bold text-slate-900 select-none">
                      {(url.title === "" || url.title === null || url.title === "Just a moment..." || !url.title) ? "Untitled " + new Date(url.date).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                      })
                        : url.title}
                    </h3>
                  </div>
                  <div className="flex flex-row gap-10">
                    <div className="gap-4 sm:gap-3 flex flex-1 flex-col">
                      <a className="line-clamp-1 break-all text-base no-underline cursor-pointer mb-2" href={url.longUrl} rel="noopener noreferrer" target="_blank">
                        {url.longUrl}
                      </a>
                      <div className="flex justify-center sm:flex-row flex-wrap gap-y-2 gap-x-6 sm:justify-start sm:gap-x-4 m-0">
                        <div className="flex items-center">
                          <span className="mr-2 inline-block">
                            <svg className="h-5 w-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M405.333333 469.333333h213.333334v426.666667H405.333333zM128 256h213.333333v640H128zM682.666667 128h213.333333v768H682.666667z" fill="#00BCD4" /></svg>
                          </span>
                          Scans: {url.scanCount}
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2 inline-block">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 8C2.44772 8 2 8.44772 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 8.44772 21.5523 8 21 8H3Z" fill="#4296FF" />
                              <path d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9C22 9.55228 21.5523 10 21 10H3C2.44772 10 2 9.55228 2 9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2Z" fill="#152C70" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13Z" fill="#152C70" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" fill="#152C70" />
                            </svg>
                          </span>
                          {new Date(url.date).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2 inline-block">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0099cc" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                              <g id="SVGRepo_tracerCarrier" strokeLinejoin="round" />
                              <g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#fff" strokeLinejoin="round" /> <path d="M12 6V12" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /> <path d="M16.24 16.24L12 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g>
                            </svg>
                          </span>
                          {new Date(url.date).toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={`data:image/png;base64,${url.qrCode}`} height={150} width={150} alt="QR Code" />
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-between sm:justify-normal">
                <span className="bg-blue-300 text-blue-950 text-sm font-medium me-2 mb-4 px-2.5 pb-0.5 h-[35px] flex items-center justify-center rounded select-none">{url.urlCode}</span>
                <div className="flex flex-row gap-1 flex-1">
                  <a href={qrimage} download={`${url.title}.png`} className="text-white bg-green-500 h-[35px] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center me-2">
                    Download
                  </a>
                  <button type="button" className="text-white bg-red-500 h-[35px] hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm p-2.5 text-center inline-flex items-center me-2" onClick={() => deleteUrl(url._id)}>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 12V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 7H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default QrCard;