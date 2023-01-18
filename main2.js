import fs from "fs";
let emailcount = 0;
const contents = fs.readFileSync("test.txt");
const stringData = contents.toString();
// find pieces of string in email format and add to a counter. 
// exclude strings that continue after @softwire.com (e.g. rosemaria.oniskey@softwire.comet.net) (must have white space after) -- DONE
// find a way to exclude string that only contain @softwire.com and nothing before (must not have whitespace before) -- IN PROGRESS
// final answer is 261
// what if @sofwire.com is at the end of line?
 
for (var i = 0; i < stringData.length; i++) {
    if ((stringData.substring(i, i+ 14) === '@softwire.com ')) { emailcount++ }
}
console.log(emailcount);