import {Connection, ConnectionConfig} from "mysql";

export {};
const mysql = require("mysql");

let options: ConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "learn-typescript"
};
const connection: Connection = mysql.createConnection(options);
connection.connect(err => {
    if (err) {
        console.error("mysql连接失败");
    } else {
        console.log("mysql连接成功");
    }
});
export default connection;
