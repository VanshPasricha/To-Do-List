var t1 = document.getElementById("t1");
var y = document.getElementById("list-con");
var z = document.getElementById("b1");

function addtask() {
    if (t1.value.trim() === '') {
        alert("Please enter a valid task!");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = t1.value;
    y.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

    t1.value = '';
    saveData();
}

y.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } 
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", y.innerHTML);
}

function showtask() {
    y.innerHTML = localStorage.getItem('data') || "";
}

document.addEventListener("DOMContentLoaded", showtask);
