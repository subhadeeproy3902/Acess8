const express = require("express");
const validUrl = require("valid-url");
const QR = require("../models/QR");
const { nanoid } = require("nanoid");
const router = express.Router();
const QRcode = require("qrcode");

// @route  POST /api/url/shorten
// @desc  Create short URL
const num = 10;

const titleFetch = async (longUrl) => {
  const url1 = process.env.REACT_APP_APYHUB_LINK;
  const api_key1 = process.env.REACT_APP_APYHUB_API_KEY;
  const url2 = process.env.REACT_APP_JSON_LINK;
  const api_key2 = process.env.REACT_APP_JSON_LINK_API_KEY;
  const options = {
    method: "POST",
    headers: {
      "apy-token": api_key1,
      "Content-Type": "application/json",
    },
    body: `{"url":"${longUrl}"}`,
  };

  try {
    const response = await fetch(url1, options);
    const data = await response.json();
    console.log(data);
    const datas = data.data;
    const title = datas.title;
    const favicon = datas.favicons[0];
    const image = datas.images[0];
    return { title, favicon, image };
  } catch (error) {
    const url = `${url2}?url=${longUrl}&api_key=${api_key2}`;
    const options = {method: 'POST', headers: {'content-type': 'application/json'}, body: undefined};

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      const title = data.title;
      const favicon = data.favicon;
      const image = data.images[0];
      return { title, favicon, image };
    } catch (error) {
      const title = null;
      const favicon = null;
      const image = null;
      return { title, favicon, image };
    }
  }
};

//baseUrl for backend url
const baseUrl =
  process.env.REACT_APP_NODE_ENV === "production"
    ? "https://mynly.vercel.app"
    : "http://localhost:5000";


// @route POST /api/url/generate-qr
// @desc Generate QR code



router.post("/generate-qr", async (req, res) => {
  const { longUrl, userUid } = req.body;
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }
  const urlCode = nanoid(num);
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await QR.findOne({ longUrl });
      if (url) {
        res.json({
          qrCode: url.qrCode,
          scanCount: url.scanCount,
          urlCode: url.urlCode,
          title: url.title,
          shortUrl: url.shortUrl,
        });
      } else {
        const shortUrl = baseUrl + "/QR/" + urlCode;
        const {title, favicon, image} = await titleFetch(longUrl);
        const qrCodeBuffer = await QRcode.toBuffer(shortUrl);
        const qrCodeBase64 = qrCodeBuffer.toString("base64");

        url = new QR({
          userUid,
          longUrl,
          shortUrl,
          qrCode: qrCodeBase64,
          urlCode,
          title,
          icon: image,
          photoUrl: favicon,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await QR.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.error("Error deleting URL:", err);
    res.status(500).json({ error: "An error occurred while deleting the URL" });
  }
});


module.exports = router;
