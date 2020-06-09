const express = require("express");
const path = require("path");

// 라우터 분리
const router = express.Router();

router.get("/", (rep, res) => {
    res.sendFile(path.join(__dirname, "html", "index.html"));
});

router.get("/about", (rep, res) => {
    res.sendFile(path.join(__dirname, "html", "about.html"));
});

// 모듈로 만들기
module.exports = router;