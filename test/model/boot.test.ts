import {Book, createTableWithPromise} from "../../src/model/book";


!async function test1() {
    let result = await createTableWithPromise();
    console.log(result);
}();
