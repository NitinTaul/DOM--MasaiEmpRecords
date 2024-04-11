


let empname = document.querySelector("form>#name");
let empid = document.querySelector("form>#employeeID");
let dept = document.querySelector("form>#department");
let ex = document.querySelector("form>#exp");
let mail = document.querySelector("form>#email");
let mob = document.querySelector("form>#mbl");
let sub = document.querySelector("form > input[type='submit']");
let tableBody = document.querySelector("#table-container>tbody");

let data = [];

function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
  let storedValue = JSON.parse(localStorage.getItem("data"));

  if (storedValue) {
    data = storedValue;
    showData(data);
  }
}

function handleClick() {
  let obj = {
    empname: empname.value,
    empid: empid.value,
    dept: dept.value,
    ex: ex.value,
    mail: mail.value,
    mob: mob.value,
  };
  data.push(obj);
  saveData();
  showData(data);
}

function showData(arr) {
  tableBody.innerHTML = "";
  arr.forEach(function (ele) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = ele.empname;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.empid;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.dept;
    let td4 = document.createElement("td");
    td4.innerHTML = ele.ex;
    let td5 = document.createElement("td");
    td5.innerHTML = ele.mail;
    let td6 = document.createElement("td");
    td6.innerHTML = ele.mob;
    let td7 = document.createElement("td");
    td7.innerHTML = exp(ele.ex);
    let td8 = document.createElement("td");
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", function () {
      handleDelete(arr.indexOf(ele));
    });
    td8.appendChild(btn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tableBody.appendChild(tr);
  });
}

function exp(experience) {
  if (experience > 5) {
    return "Senior";
  } else if (experience >= 2 && experience <= 5) {
    return "Junior";
  } else {
    return "Fresher";
  }
}

function handleDelete(index) {
  data = data.filter(function (ele, i) {
    return index !== i;
  });
  saveData();
  showData(data);
}

sub.addEventListener("click", handleClick);

loadData();