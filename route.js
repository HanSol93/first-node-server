const express = require("express");
const User = require("./user");

// 라우터 분리
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/:name", (req, res) => {
    User.find({ name: req.params.name }, (err, user) => {
        res.render("index", { user });
    });
});

// 모듈로 만들기
module.exports = router;