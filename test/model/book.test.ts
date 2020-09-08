import {Book, createTableWithPromise, deleteDataWithPromise} from "../../src/model/book";


!async function test1() {
    // let result = await createTableWithPromise();
    // console.log(result);
    
    let result = await deleteDataWithPromise();
    console.log(result);
}();
