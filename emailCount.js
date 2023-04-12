// What are the 10 most common email address domains in the text file, and how often do they appear?

// Import test.txt
import fs from "fs";
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
function updateDomainCounter(emailDict, domainSet) {
    for (let i = 0; i < flArray.length; i++) {
        for (let item of domainSet) {
            if (flArray[i].match('.*@' + item + '$')) {
                emailDict[item]++;
            }
        }
    }
    return emailDict;
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

const domainSet = getDomain();
const domainCounter = getDomainCounter(domainSet);
const emailDict = updateDomainCounter(domainCounter, domainSet);
const results = pickHighest(emailDict,10);

// Show top 10 domain names and how often they occur. 
console.log(results);