import fs from "fs";
let emailcount = 0;
const contents = fs.readFileSync("test.txt");
const stringData = contents.toString();
// find pieces of string in email format and add to a counter. 
// exclude strings that continue after @softwire.com (e.g. rosemaria.oniskey@softwire.comet.net) (must have white space after) -- DONE
// final answer is 261
// what if @sofwire.com is at the end of line? -- DONE
for (var i = 0; i < stringData.length; i++) {
    if ((stringData.substring(i, i + 14) === '@softwire.com ') || (stringData.substring(i, i + 15) === '@softwire.com' + "\r\n")) { emailcount++ }
}
console.log(emailcount);