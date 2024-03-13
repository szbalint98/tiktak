import{ jatekter} from './fuggvenyek.js'
const JATEKTERELEM=document.querySelector(".mezo")
JATEKTERELEM.innerHTML=jatekter();

let valtozo=0
const GOMBOK = document.querySelectorAll(".mezo button");
for (let index = 0; index < GOMBOK.length; index++) {
  GOMBOK[index].addEventListener("click", function (event) {
    valtozo++
    let aktualisKlikk = event.target;
    if (valtozo%2===0) {
        aktualisKlikk.classList.add("kor");
    }else{
        aktualisKlikk.classList.add("x");
    }
    
  });
}