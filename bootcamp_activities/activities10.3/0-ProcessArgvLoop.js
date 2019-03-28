// Basically same as nodeArgs=[‘node’,'somefile','34','66','100']
var nodeArgs = process.argv;

//in “node somefile.js 34 66 100” this pulls only 34,66,100 from the Array
var a = 0;

for (var i = 2; i < nodeArgs.length; i++) {

     a += parseInt(nodeArgs[i]);

}

console.log(a)