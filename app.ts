var moment = require("moment");

async function p1(msg : string) {
    await new Promise(resolve => setTimeout(resolve, 3000)) // wait 3 seconds

    return await new Promise<boolean>((resolve : (value : boolean) => void, reject : (reason : any) => void) => {
        console.log(msg)
        resolve(true)
    })
};

async function test_async() {

    for (var i = 0; i < 10; i++) {
        let msg = moment().format("YYYY-MM-DD HH:mm:ss, " + i);

        await p1(msg).then((response : boolean) => {
            console.log(response)
        }).catch((reason : any) => console.log(reason));
    }
}

test_async()
