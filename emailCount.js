// Import test.txt
import fs from "fs";
import { prompt } from "readline-sync";
const contents = fs.readFileSync("test.txt", 'utf8');
const flArray = contents.split(/\s+/);

//Grab each domain name sub string and put in an array. 
function getDomain(){
const domainSearch = new RegExp('.@(.*\..*)');
const domainArray = [];
for (let i = 0; i < flArray.length; i++) {
    const domain = flArray[i].match(domainSearch);
    if (domain) 
    { 
        domainArray.push(domain[1]);
    }
}
 return new Set(domainArray);
}

//Set counter for each domain to 0 and put each domain with a counter in a dictionary object
function getDomainCounter(domainSet) {
    const emailDict = {};
    for (let item of domainSet) {
        emailDict[item] = 0;
    }
    return emailDict;
}

//Update the counter for each time the domain name exists in the array of domain names
function updateDomainCounter(domainsCounter, domainSet) {
    for (let i = 0; i < flArray.length; i++) {
        for (let item of domainSet) {
            if (flArray[i].match('.*@' + item + '$')) {
                domainsCounter[item]++;
            }
        }
    }
    return domainsCounter;
}

//Sort the dictionary by counter and grab the 10 highest
function pickHighest(obj, num) {
    const topTen = {};
    Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key, ind) => {
        if (ind < num) {
            topTen[key] = obj[key];
        }
    });
    return topTen;
};


//Sort the dictionary by counter and grab those above user input
function pickFrequency(obj, num) {
    const reqObject = {};
    Object.keys(obj).forEach((key) => {
        if (obj[key] >= num) {
            reqObject[key] = obj[key];
        }
    });
    return reqObject;
};

const domainSet = getDomain();
const domainCounter = getDomainCounter(domainSet);
const emailDict = updateDomainCounter(domainCounter, domainSet);

// Prompt user to select an option
console.log("What would you like to know? \n Option 1: Top 10 most common domain names \n Option 2: More than xxx occurences");
let emailOption = prompt();
console.log(parseInt(emailOption)!=1);
while(parseInt(emailOption) != 1 && parseInt(emailOption) != 2){
        console.log("Invalid choice. Please choose 1 or 2");
        emailOption = prompt();
}
if(parseInt(emailOption) == 1){
const results = pickHighest(emailDict,10);
console.log(results);
}
else if( parseInt(emailOption) == 2){
console.log("Please provide a number:")
let domainOccurance = prompt();
const results2 = pickFrequency(emailDict,domainOccurance);
console.log(results2);
}
