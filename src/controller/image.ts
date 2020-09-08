import {uploadFile} from "../service/upload";

const express = require("express");
let router = express.Router();
import createTable from "../dao/image";
import connection from "../dao";

router.get("/", function (req, res, next) {
    console.log(connection);
    createTable(connection);
    res.render("index", {title: "Express"});
});

router.get("/upload", function (req, res, next) {
    console.log("upload");
    res.render("upload", {title: "upload"});
});

router.post("/file_upload", async function (req, res) {
    try {
        let data = await uploadFile(req);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
    res.send("ok");
});


export = router;
