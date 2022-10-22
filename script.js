const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputAgency = document.getElementById("agency");
const tableContent = document.getElementById("tabletasks");
const resetButton = document.getElementById("reset-button");
const inputtodolist = document.getElementById("formtasks");


//Add Data
inputtodolist.addEventListener("submit", function(event){
    event.preventDefault();

    row = document.createElement("tr");

    row.innerHTML = `
        <td>${inputFirstName.value}</td>
        <td>${inputLastName.value}</td>
        <td>${inputAgency.value}</td>
        <td>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
    `
    tableContent.appendChild(row);
})


//Delete Data
tableContent.addEventListener("click", function (event) {
    if(event.target.classList.contains("delete")){
        event.target.parentElement.parentElement.remove();
    }
})


//Clear All Fields
function clearFields(){
    inputFirstName.value = "";
    inputLastName.value = "";
    inputAgency.value = "";
}

resetButton.addEventListener("click", function(event){
    clearFields();
})










