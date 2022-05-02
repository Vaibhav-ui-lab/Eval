// write js code here corresponding to index.html
// You should add submit event on the form
var arr = [];
document.querySelector("#masaiForm").addEventListener("submit",myFun);
function myFun(){
    event.preventDefault();
    var obj = {
        number: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value
    }
    arr.push(obj);
    localStorage.setItem("schedule",JSON.stringify(arr));
}