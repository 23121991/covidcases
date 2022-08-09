var div = document.createElement("div")
div.style.textAlign = "center";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML = "Search";
button.addEventListener("click",foo);

let active = document.createElement("div");
active.setAttribute("Id", "Active");
let Recovered = document.createElement("div");
Recovered.setAttribute("Id", "Recover");
let Deaths = document.createElement("div");
Deaths.setAttribute("Id", "Deaths");

div.append(input,button,active,Recovered,Deaths);
document.body.append(div);

async function foo() {

    let res = document.getElementById("country").value;
    var url = `https://api.covid19api.com/dayone/counrty/${res}`;

    let result = await fetch(url);
    let result1 = await result.json();
    let index = result1.length-1;
    console.log(result1[index].Active);
    active.innerHTML =`total Active Cases:${result1[index].Active}`;

    console.log(result1[index].Recovered);
    Recovered.innerHTML =`total Recovered Cases:${result1[index].Recovered}`;

    console.log(result1[index].Deaths);
    Deaths.innerHTML =`total Deaths Cases:${result1[index].Deaths}`;







}