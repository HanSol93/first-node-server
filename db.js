const mongoose = reqiure("mongoose");

module.exports = () => {
    function connect() {
        // 몽고디비에 연결합니다.
        mongoose.connect("localhost:27017", (err) => {
            if (err) {
                console.error("mongoDB connection error", err);
            }
            console.log("mongoDB connected");
        });
    }
    connect();
    mongoose.connection.on("disconnected", connect);
    require("./user.js");
};