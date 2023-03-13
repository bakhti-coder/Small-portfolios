let arr = [10, 5, 7, 8, 11, 3, 1, 6];

function getCloseSum(arr) {
    let newArr = [];
    newArr[0] = arr[0] + arr[1];
    newArr[arr.length - 1] = arr[arr.length - 1] + arr[arr.length - 2];
    for(i = 1; i < arr.length - 1; i++) {
        newArr[i] = arr[i] + arr[i - 1] + arr[i + 1];
    }
    return newArr;
}

console.log(getCloseSum(arr));