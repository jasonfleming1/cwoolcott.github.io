// Get filename from user
var filename = process.argv[2];
var readFile = require("./helpers").readFile;

// readFile throws due to an unknown error with the filesystem.
throw new Error("Something is Wrong.");

try{
    readFile(filename);
}
catch(err){
    console.log("File Not Found!!!!")
}

console.log("The rest of your program didn't work.");
