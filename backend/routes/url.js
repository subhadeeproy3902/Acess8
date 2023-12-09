const express = require("express");
const Url = require("../models/Url");
const { nanoid } = require("nanoid");
const router = express.Router();

// @route  POST /api/url/shorten
// @desc  Create short URL
const num = 10;

const titleFetch = async (longUrl) => {
  const api_link = process.env.REACT_APP_JSON_LINK;
  const api_key = process.env.REACT_APP_JSON_LINK_API_KEY;
  const url = api_link;
  const options = {
    method: "POST",
    headers: {
      "apy-token": api_key,
      "Content-Type": "application/json",
    },
    body: `{"url":"${longUrl}"}`,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const datas = data.data;
    const title = datas.title;
    const favicon = datas.favicons[0];
    const image = datas.images[0];
    return { title, favicon, image };
  } catch (error) {
    console.error(error);
  }
};

//baseUrl for the backend URL
const baseUrl =
  process.env.REACT_APP_NODE_ENV === "production"
    ? "https://mynly.vercel.app"
    : "http://localhost:5000";

router.post("/shorten", async (req, res) => {
  const { longUrl, userUid } = req.body;
  const urlCode = nanoid(num);
  try {
    let url = await Url.findOne({ longUrl });
    if (url) {
      res.json({
        shortUrl: url.shortUrl,
        clickCount: url.clickCount,
      });
    } else {
      const shortUrl = baseUrl + "/" + urlCode;
      const { title, favicon, image } = await titleFetch(longUrl);
      url = new Url({
        userUid,
        longUrl,
        shortUrl,
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
});

// @route  DELETE /api/url/shorten
// @desc  delete entry

router.delete("/delete/:id", async (req, res) => {
  try {
    await Url.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.error("Error deleting URL:", err);
    res.status(500).json({ error: "An error occurred while deleting the URL" });
  }
});

module.exports = router;
