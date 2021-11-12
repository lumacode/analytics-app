import { fork } from "child_process";
import path from "path";

console.log('Process running...')


//Use fork child process not to block event loop
const child = fork(path.resolve(__dirname,"./lib/workers/childAnalyticsGenerator.js"));

child.on("close", function (code) {
console.log("child process exited with code " + code);
});


console.log('Waiting workers....');




