import {Book, createTableWithPromise, deleteDataWithPromise, dropTableWithPromise} from "../../src/dao/book";


let b = !async function test() {
    let result = await createTableWithPromise();
    //  let result = await createTableWithPromise();
    //  let result = await deleteDataWithPromise();
    console.log(result);
}();

