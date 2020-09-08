import {Connection} from "mysql";

function createTable(connection: Connection): void {
    connection.query(
            "select table_name from information_schema.Tables where table_name = image",
            function (err, data) {
                if (data && data.length) return;
                connection.query(`
                            create table image (
                                id int not null auto_increment,
                                file_key varchar(40) not null,
                                file_name varchar(40) not null,
                                primary key (id)
                            );
                        `);
                
            });
};

export default createTable;
