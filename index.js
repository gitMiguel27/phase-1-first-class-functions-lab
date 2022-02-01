// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(array) {
    return array.slice(0,2);
};

const returnLastTwoDrivers = function returnLastTwoDrivers(array) {
    return array.slice(array.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function selectDifferentDrivers(arrayOfDrivers, either) {
    return either(arrayOfDrivers);
}