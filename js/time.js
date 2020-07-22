function zegar()
{
 var dzisiaj = new Date();
var day = dzisiaj.getDate();
var mounth = dzisiaj.getMonth()+1;
var year = dzisiaj.getFullYear();
var hour = dzisiaj.getHours();
var min = dzisiaj.getMinutes();
var sec = dzisiaj.getSeconds(); 

document.getElementById("zegar").innerHTML = day + "/" + mounth + "/" + year + " " + hour + ":" + min + ":" + sec;

setTimeout("zegar()",1000)


}





