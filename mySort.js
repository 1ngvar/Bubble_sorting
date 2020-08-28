const myArray = [2, 1, 3, 3, 2, 4, 3, 6, 5, 4, 7, 8, 6, 5, 4, 44, 33, 4, 2, 56]

function createFigure(array) {

    let figure = document.getElementsByTagName("figure")

    // Creating a div for every array element
    for (let i = 0; i < array.length; i++) {

        let bar = document.createElement("div")

        // Setting it's id according to the element's position in an array
        bar.setAttribute("id", i)

        // Setting it's height according to the element's value multiplied by 5
        bar.style.height = array[i] * 5 + "px"

        figure[0].appendChild(bar)

    }
}


function bubbleSorting(arr) {
    let temp

    for (let i = arr.length; i > 0; i--) {

        for (let j=0; j < i; j++) {

            if (arr[j] > arr[j + 1]) {
                temp        =  arr[j]
                arr[j]      =  arr[j + 1]
                arr[j + 1]  =  temp
            }
        }
    }
    // return arr
    createFigure(arr)
}



    createFigure(myArray)

    bubbleSorting(myArray)

// console.log("Sorted array: " + bubbleSorting(myArray))
