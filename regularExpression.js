import fs from "fs";
let emailcount = 0;
const contents = fs.readFileSync("test.txt");
const stringData = contents.toString();

// final answer is 261

for (var i = 0; i < stringData.length; i++) {
    if ((stringData.substring(i, i + 14) === '@softwire.com ') || (stringData.substring(i, i + 15) === '@softwire.com' + "\r\n")) { emailcount++ }
}
console.log(emailcount);