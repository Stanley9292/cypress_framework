var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var result = {};
function countOccurences() {
    for (var i = 0; i < a.length; ++i) {
        if (!result[a[i]])
            result[a[i]] = 0;
        ++result[a[i]];
    }
    console.log(result);
}
console.log(countOccurences());
