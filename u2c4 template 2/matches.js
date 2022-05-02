// write js code here corresponding to matches.html
var favr = [];
var data = JSON.parse(localStorage.getItem("schedule"));
data.forEach(element => {
    var row = document.createElement("tr");
    var tbody = document.querySelector("tbody");
    tbody.append(row);

    var row1 = document.createElement("td");
    row1.innerText = element.number;

    var row2 = document.createElement("td");
    row2.innerText = element.teamA;

    var row3 = document.createElement("td");
    row3.innerText = element.teamB;

    var row4 = document.createElement("td");
    row4.innerText = element.date;

    var row5 = document.createElement("td");
    row5.setAttribute("class","venue");
    row5.innerText = element.venue;

    var row6 = document.createElement("td");
    row6.setAttribute("id","fav");
    row6.innerText = "Add as Favourites";
    row6.style.color = "green"

    var last = tbody.lastElementChild;
    last.append(row1,row2,row3,row4,row5,row6);

    document.querySelector("#fav").addEventListener("click",add)
    function add(){
        favr.push(element);
        localStorage.setItem("favourites",JSON.stringify(favr));
    }
});

document.querySelector("#filterVenue").addEventListener("click",filter)
function filter(){
    var ven = document.querySelector("#filterVenue").value;
    var check = document.querySelectorAll("tr");
    check.forEach(element => {
        var bag = 
        if()
    });
}