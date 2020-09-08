import path = require("path");
import formidable = require("formidable");
import {IncomingForm} from "formidable";
import {IncomingMessage} from "http";

async function uploadFile(req: Express.Request) {
    return new Promise((resolve, reject) => {
        const incomingForm: IncomingForm = new formidable.IncomingForm();
        incomingForm.encoding = "utf-8";
        incomingForm.uploadDir = path.join(__dirname, "../../static/");
        incomingForm.keepExtensions = true;
        incomingForm.parse(req as IncomingMessage, (err, fields) => {
            const {file} = fields;
            console.log(err);
            console.log(fields);
            if (!err) resolve(file);
            else reject(err);
        });
    });
}

export {
    uploadFile
};
