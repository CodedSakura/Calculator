let flip2DArray = (array) => {
    let result = [];
    for (let i in array[0]) {
        result.push([]);
        for (let j of array) result[i].push(j[i]);
    }
    return result;
}, trim2DArray = (array) => {
    array.forEach(i => {
        while (i[0] === " ") i.unshift();
        while (i[i.length - 1] === " ") i.pop();
    });
    return array;
};
module.exports = {
    flip2DArray: flip2DArray,
    trim2DArray: trim2DArray
};