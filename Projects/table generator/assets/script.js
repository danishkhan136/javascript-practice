const input = document.querySelector("#numberInput");
const addBtn = document.querySelector("#addBtn");
const output = document.querySelector("#output");
const generateBtn = document.querySelector("#generate");
let result = "";

const num = [];


const removeDuplicates = new Set(num)
const newDAta = [...removeDuplicates]
console.log(newDAta)

addBtn.addEventListener("click", function () {
    if (input.value === "") {
        alert("Please enter a number");
        return;
    }

    const value = Number(input.value);

    num.push(value);

    a=arrayDisplay.textContent = JSON.stringify(num);
    
    


    input.value = "";
})


generateBtn.addEventListener("click", function () {

    let result = "";

    newDAta.forEach(element => {

        let table = "<div class='table-card'>";

        for (let i = 1; i <= 10; i++) {
            table += `<p>${element} x ${i} = ${element * i}</p>`;
        }

        table += "</div>";

        result += table;
    });

    output.innerHTML = result;
});