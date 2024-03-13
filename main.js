import{ jatekter, nyeres, torles} from './fuggvenyek.js'
const JATEKTERELEM=document.querySelector(".mezo")
const NYERESELEM=document.querySelector('#nyeres')

JATEKTERELEM.innerHTML=jatekter();
let gyujto=""
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
        console.log(aktualisKlikk.id)
        gyujto+=aktualisKlikk.id
        console.log(gyujto)
        if (gyujto==="012" || gyujto==="102"||gyujto==="201"|| gyujto==="120" ||gyujto==="021" ) {
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
        }
    }
    
  });
}
const TORLESGOMB=document.querySelector("#torles")
TORLESGOMB.addEventListener('click',function(){
    gyujto=""
    torles(GOMBOK)
})
