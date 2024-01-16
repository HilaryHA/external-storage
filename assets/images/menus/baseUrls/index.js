// import meatDishes1 from './meatDishes1';
// import meatDishes2 from './meatDishes2';
// import meatDishes3 from './meatDishes3';

const { meatDishes1 } = require("./meatDishes1");
const { meatDishes2 } = require("./meatDishes2");
const { meatDishes3 } = require("./meatDishes3");
const { meatDishes4 } = require("./meatDishes4");

const allUrls = {
    meatDishes1,
    meatDishes2,
    meatDishes3,
    meatDishes4
}

export default allUrls

module.exports = {
    allUrls
}