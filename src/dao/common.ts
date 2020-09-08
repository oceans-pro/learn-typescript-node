/**
 * 测试DDL语句
 */
import connection from "./index";
import {MysqlError, queryCallback} from "mysql";

function justDoIt<T>(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {
        let cb: queryCallback = (err: MysqlError, result: any, filedInfo) => {
            if (err) {
                reject(err);
            }
            connection.end();
            resolve(result);
        };
        connection.query(sql, cb);
    });
}

export {
    justDoIt
};
