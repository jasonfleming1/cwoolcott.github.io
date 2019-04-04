/* ES6 Promises Example */
var IAmHungry = true;

// Promise
var willIGetFood = new Promise(
    function (resolve, reject) { 
        if (IAmHungry) {
            var whatIAte = {
                restaurant: 'Fatburger',
                food: 'XXXL Fatburger'
            };
            resolve(whatIAte);
        } else {
            var reason = new Error('I am not hungry');
            reject(reason);
        }

    }
);

var showOff = function (whatIAte) {
    var message = 'Guess what I had to eat? ' +
                whatIAte.food + ' from ' + whatIAte.restaurant;
    return Promise.resolve(message);
};

// call our promise
var itsDinnerTime = function () {
    willIGetFood
        .then(showOff)
        .then(function(fulfilled){
            console.log(fulfilled)
        })
        .catch(error => console.log(error.message)); // fat arrow
};

itsDinnerTime();