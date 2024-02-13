const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
var myDate = new Date();
var hrss = myDate.getHours();

var greet;
var n;
if(hrss<4)
{
    greet='Good Night';
}
else if (hrss>=4&&hrss < 12)
  greet = 'Good Morning';

else if (hrss >= 12 && hrss <= 17)

  greet = 'Good Afternoon ';
  

else if (hrss >= 17 && hrss <= 24)
greet = 'Good Evening  ';


document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';

let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(()=>{let currentTime=new Date();
    console.log(currentTime);
hrs.innerHTML= currentTime.getHours();
min.innerHTML= currentTime.getMinutes();
sec.innerHTML= currentTime.getSeconds();},1000);


function addTask()
{
    if(inputBox.value ==='')
    {
      alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);// to dislay the value in list..
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);// to display cross sign..
    }
    inputBox.value="";
    savedata();
}
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
    }
},false)//it is very important to understand and keep it in mind

function savedata()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();