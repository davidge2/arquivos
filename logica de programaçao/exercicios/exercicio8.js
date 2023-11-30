function diagonalDifference(arr) {
    let leftdiagonal = 0;
    let rightdiagonal =0;
    for (let index =0; index<arr.length; index +=1){
        leftdiagonal += arr[index][index];
        rightdiagonal += arr[index][arr.length - 1 - index];
    }
    return Math.abs(leftdiagonal - rightdiagonal);
}
console.log(diagonalDifference([
    [1, 2, 3,], 
    [4, 5, 6,], 
    [7, 8, -9]]));