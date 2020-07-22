let dodaj = document.getElementById("dodaj");
let lista = document.getElementById("todoContainter");
let wpisz = document.getElementById("inputField");

dodaj.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = wpisz.value;
    lista.appendChild(paragraph);
    wpisz.value = "";
    paragraph.addEventListener('click', function()
    {
        paragraph.style.textDecoration ="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        lista.removeChild(paragraph);
    })


})