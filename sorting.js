// Bubble sorting – numbers bubble up to the top (end) of the array

const bubbleSort = (arr) => {
    // Temporary variable for swapping values
    let temp

    for (let i = arr.length; i > 0; i--) {

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp        =  arr[j]
                arr[j]      =  arr[j + 1]
                arr[j + 1]  =  temp
            }
        }
    }
    return arr
}
//
//
// const array = [2, 1, 3, 3, 2, 4, 3, 6, 5, 4, 7, 8, 6, 5, 4, 44, 33, 4, 2, 111]
// document.write("<p>Sorted array: " + bubbleSort(array) + "</p>")