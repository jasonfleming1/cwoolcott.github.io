var isPalindrome = function(str) {
    var strLen = str.length;
    //Zero or one Letter Left
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    
    //Compare first and last letter
    if (str[0] === str[strLen - 1]) {
        //Return to isPalindrome with first and last letter removed
        return isPalindrome( str.slice(1, strLen - 1) );
    }
    // If Letters didn't match Recursion doesn't take place
    return false;
};

console.log(isPalindrome('tacocat'));