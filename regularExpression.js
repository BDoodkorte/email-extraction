import fs from "fs";
let emailcount = 0;
const contents = fs.readFileSync("test.txt");
const stringData = contents.toString();

const re = /^@softwire\.com($|\s)/;

for (var i = 0; i < stringData.length; i++) {
    if ((stringData.substring(i, i+15).match(re))) { emailcount++ }
}

console.log(emailcount);