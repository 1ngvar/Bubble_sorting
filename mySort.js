const inputArray = prompt('Для построения графика введите числа, разделённые запятыми. \nНечисловые значения будут приравнены к 0.',
    [2, 1, 3, 3, 2, 4, 3, 6, 5, 4, 7, 8, 6, 5, 4, 44, 33, 4, 2, 56]).split(',')
    .map(x=> +x || 0 )


bubbleSorting(inputArray)




// Functions declarations

function createFigure(array) {

    let figure = document.getElementsByTagName("figure")

    // Creating a div for every array element
    for (let i = 0; i < array.length; i++) {

        let bar = createDivBar(array[i])

        // Setting it's id according to the element's position in an array
        bar.setAttribute("id", i)

        // Adding a div bar to a <figure>
        figure[0].appendChild(bar)
    }
}


function createDivBar(arrayItem) {

    let div = document.createElement("div")

    // Printing array numbers over their respective bars
    div.innerText = arrayItem

    // Setting div's height according to the element's value multiplied by 5 for better visibility
    div.style.height = arrayItem * 5 + "px"

    return div
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
    createFigure(arr)
}
