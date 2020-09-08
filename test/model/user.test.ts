import {User, selectAllWithPromise, selectOneById} from "../../src/dao/user";
import {justDoIt} from "../../src/dao/common";

!async function test() {
    
    // const user: User = await selectOneById(1);
    // console.log(user);
    
    
    // const userList = await selectAllWithPromise();
    // for (const user of userList) {
    //     console.log(user);
    // }
    
    
    const data = await justDoIt("insert into user(id, username, password) values(100, 'wwj', 'wwj')");
    console.log(data);
}();

