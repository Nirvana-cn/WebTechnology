function swap(myArray, p1, p2){
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}
// 时间复杂度O(n^2)
function bubbleSort(myArray){
    var len = myArray.length;
    var i;
    var j;
    var stop;
    for (i = 0; i < len - 1; i++){
        for (j = 0, stop = len - 1 - i; j < stop; j++){
            if (myArray[j] > myArray[j + 1]){
                swap(myArray, j, j + 1);
            }
        }
    }
    return myArray;
}