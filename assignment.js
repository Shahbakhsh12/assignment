function CreateClosure(num) {
    return function(x) {
        return x + num;
    };
}
let adfive = CreateClosure(5);
let result = adfive(10);


function searchArray(arr, value, index = 0) {
    if (index >= arr.length) {
        return false;
    } else if (arr[index] === value) {
        return true;
    } else {
        return searchArray(arr, value, index + 1);
    }
}

function addParagraph(text) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    const body = document.querySelector("body");
    body.appendChild(newParagraph);
}

function addListItem(text) {
    const newListItem = document.createElement("li");
    newListItem.textContent = text;
    const list = document.querySelector("ul");
    list.appendChild(newListItem);
}

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

const myObject = { name: "John", age: 30 };
saveToLocalStorage("my-key", myObject);

function retrieveFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    if (objectString === null) {
        return null;
    }
    return JSON.parse(objectString);
}


const myObject = { name: "shahbakhsh", age: 20, email: "shahbakhsh@example.com" };
const retrievedObject = saveObjectToLocalStorage(myObject);
console.log(retrievedObject);
