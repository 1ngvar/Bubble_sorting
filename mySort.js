/*
    Sweetalert.js
*/

Swal.fire({
    input: 'text',
    inputValue: '63, 1, 3, 20, 74, 4, 35, 6, 5, 28, 7, 8, 6, 5, 4, 44, 33, 4, 2, 56',
    html: 'Введите числа, разделённые запятыми.<br/> Нечисловые значения будут приравнены к 0. <br/> Максимальная высота столбца ограничена 550 px',
    icon: 'info',
    confirmButtonText: 'Готово!',
    backdrop: `
    rgba(0,0,123,0.4)
    url("img/nyan-cat.gif")
    left top
    no-repeat
  `
}).then((result) => { if (result.value) { renderArray(result.value) } });


/*
    Variables declaration
*/

const figure = document.getElementsByTagName("figure")
const allDivs = document.getElementsByTagName("div")
const title = document.getElementById("title")

// Tracking the state of an array to forbid sorting it more than once to avoid some problems
window.sorted = false



/*
    Functions declaration
*/

function renderArray(inputString) {
    window.inputArray = inputString.split(',').map(x=> +x || 0 );

    const maxValue = Math.max(...inputArray)
    // console.log("maxValue is " + maxValue);

    createFigure(inputArray);
    console.log("inputString: " +  inputString);
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


function createFigure(array) {

    // Creating a div for every array element
    for (let i = 0; i < array.length; i++) {

        let bar = createDivBar(array[i])

        bar.onclick = zeroOutDivs

        figure[0].appendChild(bar)
    }

    // Fading the title in
    setTimeout(() => {
        title.style.opacity = 1
    }, 3000);
}


function createDivBar(arrayItem) {

    let div = document.createElement("div")

    // Printing array numbers over their respective bars
    div.innerText = arrayItem

    // Creating initial divs to modify them later
    div.style.height = 0
    div.style.opacity = 0


    setTimeout(() => {
        // Setting div's height according to the element's value multiplied by a custom multiplier for better visibility
        div.style.height = arrayItem * 5 + "px"
        div.style.opacity = 1
    }, 100)

    return div
}


function zeroOutDivs() {

    if (!window.sorted) {

        for (div of allDivs) {
            div.style.height = "11px";
        }

        // Fading out the title
        setTimeout(() => {
            title.style.opacity = 0
        }, 1000);

        // Fading out old divs
        setTimeout(() => {
            for (div of allDivs) {
                div.style.opacity = "0";
            }
        }, 2000);


        // Deleting them
        setTimeout(() => figure[0].innerHTML = '', 3000);

        // Creating a brand new Figure
        setTimeout(() => {
            bubbleSorting(inputArray)
        }, 4000)

        window.sorted = true
    }
}



