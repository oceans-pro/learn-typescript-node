import {User, selectAllWithPromise, selectOneById} from "../../src/model/user";

!async function test1() {
    
    const user: User = await selectOneById(1);
    console.log(user);
    
    
    // const userList = await selectAllWithPromise();
    // for (const user of userList) {
    //     console.log(user);
    // }
    
}();

