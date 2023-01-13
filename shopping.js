var available_home = {
    potatoes: 2,
    carrots: 3,
    spices: 5,
    ice_cream: 0,
    bread_slices: 0
};
var required_lunch = {
    potatoes: 3,
    carrots: 3,
    spices: 3,
    ice_cream: 11,
    bread_slices: 2
};
var buy1 = (required_lunch.potatoes - available_home.potatoes);
var buy2 = (required_lunch.ice_cream - available_home.ice_cream);
var buy3 = (required_lunch.bread_slices - available_home.bread_slices);
console.log("potatoes:" + buy1);
console.log("icecream cups:" + buy2);
console.log("bread slices:" + buy3);
