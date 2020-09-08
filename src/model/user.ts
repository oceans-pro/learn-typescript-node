class User {
    [Symbol.toStringTag] = "User";
    id: string;
    username: string;
    password: string;
}

import {MysqlError, queryCallback} from "mysql";
import connection from "./index";

function selectAllWithPromise(): Promise<Array<User>> {
    return new Promise((resolve, reject) => {
        let sql: string = "select * from user;";
        let cb: queryCallback = (err: MysqlError, result: any, filedInfo) => {
            if (err) {
                reject(err);
            }
            let userList = result as Array<User>;
            connection.end();
            resolve(userList);
        };
        connection.query(sql, cb);
    });
}

function selectOneById(id): Promise<User> {
    return new Promise((resolve, reject) => {
        let sql: string = `select * from user where id=${id};`;
        let cb: queryCallback = (err: MysqlError, result: any, filedInfo) => {
            if (err) {
                reject(err);
            }
            let user = result as User;
            connection.end();
            resolve(user);
        };
        connection.query(sql, cb);
    });
}

export {
    User,
    selectAllWithPromise,
    selectOneById
};
