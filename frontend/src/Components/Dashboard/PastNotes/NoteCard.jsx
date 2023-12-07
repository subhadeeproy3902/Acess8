import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
  const [backgroundimage, setBackgroundImages] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTitleBackground = () => {
      if (note.backGroundColor === "bg-yellow-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(253,255,0),rgb(255,167,0))");
      }
      else if (note.backGroundColor === "bg-green-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(30,248,46),rgb(46,174,0))");
      }
      else if (note.backGroundColor === "bg-blue-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(30, 178, 248),rgb(46, 36, 197))");
      }
      else if (note.backGroundColor === "bg-orange-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(255,182,93),rgb(255,140,0))")
      }
      else if (note.backGroundColor === "bg-purple-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(200,93,255),rgb(155,0,171))")
      }
      else if (note.backGroundColor === "bg-red-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(255,111,93),rgb(225,0,0))")
      }
      else if (note.backGroundColor === "bg-pink-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(255,93,227),rgb(206,0,200))")
      }
      else if (note.backGroundColor === "bg-gray-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(183,183,183),rgb(104,104,104))")
      }
      else if (note.backGroundColor === "bg-lime-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(144,255,76),rgb(81,155,0))")
      }
      else if (note.backGroundColor === "bg-cyan-200") {
        setBackgroundImages("repeating-linear-gradient(45deg, rgba(118, 118, 118, 0.05) 0px, rgba(118, 118, 118, 0.05) 19px,rgba(59, 59, 59, 0.05) 19px, rgba(59, 59, 59, 0.05) 67px,rgba(195, 195, 195, 0.05) 67px, rgba(195, 195, 195, 0.05) 87px,rgba(121, 121, 121, 0.05) 87px, rgba(121, 121, 121, 0.05) 133px,rgba(250, 250, 250, 0.05) 133px, rgba(250, 250, 250, 0.05) 172px,rgba(106, 106, 106, 0.05) 172px, rgba(106, 106, 106, 0.05) 197px,rgba(151, 151, 151, 0.05) 197px, rgba(151, 151, 151, 0.05) 226px,rgba(219, 219, 219, 0.05) 226px, rgba(219, 219, 219, 0.05) 260px),repeating-linear-gradient(45deg, rgba(70, 70, 70, 0.05) 0px, rgba(70, 70, 70, 0.05) 40px,rgba(220, 220, 220, 0.05) 40px, rgba(220, 220, 220, 0.05) 79px,rgba(95, 95, 95, 0.05) 79px, rgba(95, 95, 95, 0.05) 103px,rgba(15, 15, 15, 0.05) 103px, rgba(15, 15, 15, 0.05) 148px,rgba(51, 51, 51, 0.05) 148px, rgba(51, 51, 51, 0.05) 186px,rgba(225, 225, 225, 0.05) 186px, rgba(225, 225, 225, 0.05) 202px,rgba(60, 60, 60, 0.05) 202px, rgba(60, 60, 60, 0.05) 239px,rgba(67, 67, 67, 0.05) 239px, rgba(67, 67, 67, 0.05) 259px),repeating-linear-gradient(45deg, rgba(146, 146, 146, 0.05) 0px, rgba(146, 146, 146, 0.05) 40px,rgba(166, 166, 166, 0.05) 40px, rgba(166, 166, 166, 0.05) 54px,rgba(156, 156, 156, 0.05) 54px, rgba(156, 156, 156, 0.05) 71px,rgba(134, 134, 134, 0.05) 71px, rgba(134, 134, 134, 0.05) 95px,rgba(77, 77, 77, 0.05) 95px, rgba(77, 77, 77, 0.05) 111px,rgba(26, 26, 26, 0.05) 111px, rgba(26, 26, 26, 0.05) 153px,rgba(46, 46, 46, 0.05) 153px, rgba(46, 46, 46, 0.05) 202px,rgba(197, 197, 197, 0.05) 202px, rgba(197, 197, 197, 0.05) 216px),linear-gradient(90deg, rgb(76,255,180),rgb(0,159,120))")
      }
    }
    getTitleBackground();
  }, [note.backGroundColor]);

  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const baseUrl =
    nodeEnv === "production"
      ? "https://mynly.vercel.app"
      : "http://localhost:5000";

  const deleteNote = async (id) => {
    setLoading(true);
    const api = baseUrl + "/api/notes/deleteNote/" + id;
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
        <div className='outline-none w-80 mb-10 m-0 sm:m-0 sm:mb-4 md:m-4'>
          <div className='min-w-xs shadow-xl rounded-3xl' style={{ backgroundImage: backgroundimage }}>
            <div className='text-slate-950 p-4'>
              <h2 className='text-xl px-2 break-all line-clamp-1 font-bold'>
                {note.title}
              </h2>
            </div>
            <div className={`border-t-4 border-slate-700 p-4 rounded-t-3xl rounded-b-2xl ${note.backGroundColor}`}>
              <p className='text-slate-800 leading-6 h-28 font-medium text-wrap break-all'>
                {note.description
                  ? note.description.length > 100
                    ? note.description.substring(0, 150) + '...'
                    : note.description
                  : '--- Edit to add description...'}
              </p>
              <div className='mt-8 flex flex-row justify-between bg'>
                <p className='text-gray-600 text-sm font-medium tracking-wider'>{note.date}</p>
                <div className='flex gap-2'>
                  <Link to={`/dashboard/notes-saver/${note._id}`} className="w-8 h-8 rounded-full bg-gray-800 opacity-80 hover:opacity-100 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="edit note">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                    </svg>
                  </Link>
                  <button className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600" aria-label="edit note" onClick={() => deleteNote(note._id)}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 12V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 7H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NoteCard