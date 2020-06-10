const express = require("express");
const path = require("path");
const app = express();
const db = require("./db");
const route = require("./route");

app.use(express.static(path.join(__dirname, "html")));

db();

app.use("/", route);

app.use((req, res, next) => {
    // 404 에러 처리 부분
    res.status(404).send("일치하는 주소가 없습니다!");
});

app.use((err, req, res, next) => {
    // 서버 에러 처리 부분
    console.error(err.stack);
    // 500 상태 표시 후 에러메세지 전송
    res.status(500).send("서버 에러!");
});

app.listen(8080, () => {
    console.log("Express App on port 8080!");
});