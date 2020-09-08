/**
 * 测试DDL语句
 */
import connection from "./index";

class Book {
    id: number;
    bookName: string;
    bookPrice: string;
}

let createStr = `
CREATE TABLE \`表_书籍\` (
  \`id\` int(11) NOT NULL,
  \`book_name\` varchar(255) DEFAULT NULL,
  \`book_price\` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

let delStr = `
delete from 表_书籍
`;

function createTableWithPromise() {
    return new Promise((resolve, reject) => {
        connection.query(createStr, (err, value) => {
            if (err) {
                reject(err);
            }
            resolve(value);
        });
    });
}

function deleteTableWithPromise() {
    return new Promise((resolve, reject) => {
        connection.query(delStr, (err, value) => {
            if (err) {
                reject(err);
            }
            resolve(value);
        });
    });
}


export {
    Book,
    createTableWithPromise,
    deleteTableWithPromise
};
