const myMain = document.querySelector("main");

//create my form element
const myForm = document.createElement("form");
const labelName = document.createElement("label");
const labelSurname = document.createElement("label");
const labelDate = document.createElement("label");
const labelSelect = document.createElement("label");
const inputText1 = document.createElement("input");
const inputText2 = document.createElement("input");
const inputDate = document.createElement("input");
const btnSubmit = document.createElement("input");
const selOption = document.createElement("select");

inputText1.id = "input-name"
inputText2.id = "input-surname"

//create notify element
const nameNotify = document.createElement('h1')
const surNotify = document.createElement('h1')
const dateNotify = document.createElement('h1')
const selectNotify = document.createElement('h1')

//cotain string of subject
let insName = "Insert Name"
let insSur = "Insert Surname"
let insDate = "Insert Birth date"
let sel_lang = "Select The language"

//fix by vairialbe
let MAX_SIZE = 5;
let SIZE;

nameNotify.innerText = insName
surNotify.innerText = insSur
dateNotify.innerText = insDate
selectNotify.innerText = sel_lang

let eNotify = [
    nameNotify,
    surNotify,
    dateNotify,
    selectNotify
]

labelName.innerText = "Name";
labelSurname.innerText = "Surname";
labelDate.innerText = "Date of Birth";
labelSelect.innerText = "Select language";

inputText1.setAttribute("required", "");
inputText2.setAttribute("required", "");
inputDate.setAttribute("required", "");
selOption.setAttribute("required", "");
inputText1.setAttribute("type", "text");
inputText2.setAttribute("type", "text");
inputDate.setAttribute("type", "date");
selOption.setAttribute("type", "select");
btnSubmit.setAttribute("type", "button");
btnSubmit.value = "Submit"

labelName.classList.add("label-top");
labelSurname.classList.add("label-top");
inputText1.classList.add("input-text");
inputText2.classList.add("input-text");
inputDate.id = "input-date";
selOption.id = "select";
btnSubmit.id = "btn-submit";

//Setup select element
let selectedOps = "-- Select --"
let options = [selectedOps, "C", "Java", "JavaScript", "Python"].map(
    (arg) => {
        let ourOption = document.createElement("option");
        if (arg == selectedOps) {
            ourOption.value = "none";
            ourOption.setAttribute('selected', "")
        } else {
            ourOption.value = arg;
        }
        ourOption.innerText = arg;

        return ourOption;
    }
);

options.forEach((element) => {
    selOption.appendChild(element);
});

//append a element inside Form element
myForm.appendChild(labelName);
myForm.appendChild(inputText1);
myForm.innerHTML += "<br>";
myForm.appendChild(labelSurname);
myForm.appendChild(inputText2);
myForm.innerHTML += "<br>";
myForm.appendChild(labelDate);
myForm.innerHTML += "<br>";
myForm.appendChild(inputDate);
myForm.innerHTML += "<br>";
myForm.appendChild(labelSelect);
myForm.appendChild(selOption);
myForm.innerHTML += "<br>";
myForm.appendChild(btnSubmit);
myMain.appendChild(myForm);


//add event
document.querySelectorAll("input")
    .forEach((element) => {
        //submit button
        element.addEventListener('focus', (e) => {
            element.style.backgroundColor = "yellow"
        })
        element.addEventListener('blur', () => {
            element.style.backgroundColor = "white"

        })
        element.addEventListener('change', (e) => {
            let element = e.target
            // Input name and surname
            if (element.value.length !== 0 && element.id === inputText1.id) {
                nameNotify.innerHTML = ""
            } else if (element.value.length !== 0 && element.id === inputText2.id) {
                surNotify.innerHTML = ""
            } else if (element.value.length === 0 && element.id === inputText1.id) {
                nameNotify.innerHTML = insName
            } else if (element.value.length === 0 && element.id === inputText2.id) {
                surNotify.innerHTML = insSur
            }
        })
        element.addEventListener('input', (e) => {
            if (e.target.id === inputDate.id && e.target.value.length !== 0) {
                dateNotify.innerHTML = ""
            } else if (e.target.id === inputDate.id && e.target.value.length === 0) {
                dateNotify.innerHTML = insDate
            }
        })
    })

var select = document.querySelector('#select')
select.addEventListener('change', function (e) {
    if (e.target.value !== "none") {
        selectNotify.innerHTML = ""
    } else {
        selectNotify.innerHTML = sel_lang
    }
});

myMain.addEventListener('click', (e) => {
    if(e.target.id === btnSubmit.id){
        showMessage()
    }
})

const showMessage = () => {
    let inputText = document.getElementsByClassName('input-text')
    let inputDate = document.getElementById('input-date')
    let selOps    = document.getElementById('select')
    let temp      = `${inputText[0].value}  ${inputText[1].value}, ${inputDate.value}, ${selOps.value}`
    SIZE          = myMain.children.length

    const myBool = (
        inputText[0].value !== 0        &&
        inputText[1].value !== 0        &&
        inputDate.value.length !== 0    &&
        selOps.value !== 'none'         
    )
    if (
        myBool  &&
        SIZE === MAX_SIZE
        ) {
        const message = document.createElement('p')
        message.innerHTML = temp
        myMain.appendChild(message)
    }else if(
        SIZE === MAX_SIZE + 1 &&
        myBool
        ){
        const message = document.getElementsByTagName('p')
        message.innerHTML = temp
    }
    
    else{
        let aMesage = document.querySelector('p')
        if(aMesage){
            aMesage.remove()

        }
    }
}

eNotify.forEach(e => {
    myMain.appendChild(e)
})