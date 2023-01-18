//write a code that counts the number of emails in test.txt.
// go through the whole file
// count all <local>@<domain>.smt
let emailcount = 0;
//var e = new FileReader();
// ^\S+@\S+$
import fs from "fs";
const requireFile = async () => {
    const data = fs.readFileSync('./test.txt'); //or ('./test.txt','utf-8')
    const stringData = data.toString();
    console.log(stringData);
    // var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    //var extractedEmail = re.exec(data); //turn into an array??
   // console.log(data);
    // emailcount = extractedEmail.length;
    return emailcount;
    //const len = data.length;
    //return len;
};
requireFile().then(res => console.log(res)).catch(err => {
    console.log('some error occured');
})

