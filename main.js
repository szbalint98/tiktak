import{ jatekos1,jatekos2, jatekter, nyeres, torles} from './fuggvenyek.js'
const JATEKTERELEM=document.querySelector(".mezo")
const NYERESELEM=document.querySelector('#nyeres')
const JATEKOSELEM=document.querySelector('#jatekos')

JATEKTERELEM.innerHTML=jatekter();
let valtozo=0

const JELTOMBX=[0,0,0,0,0,0,0,0,0]
const JELTOMBO=[0,0,0,0,0,0,0,0,0]

JATEKOSELEM.innerHTML+="<h3>1.Játékos köre!</h3>"
const GOMBOK = document.querySelectorAll(".mezo button");
for (let index = 0; index < GOMBOK.length; index++) {
  GOMBOK[index].addEventListener("click", function (event) {
    valtozo++
    let aktualisKlikk = event.target;
    if (valtozo%2===0) {
        aktualisKlikk.classList.add("kor");
        JATEKOSELEM.innerHTML=jatekos1()
        console.log(aktualisKlikk.id)
        JELTOMBO[aktualisKlikk.id]+=1
        nyertE(0,1,2,JELTOMBO,GOMBOK,"rkor")
        nyertE(0,3,6,JELTOMBO,GOMBOK,"rkor")
        nyertE(0,4,8,JELTOMBO,GOMBOK,"rkor")
        nyertE(3,4,5,JELTOMBO,GOMBOK,"rkor")
        nyertE(1,4,7,JELTOMBO,GOMBOK,"rkor")
        nyertE(3,6,8,JELTOMBO,GOMBOK,"rkor")
        nyertE(6,7,8,JELTOMBO,GOMBOK,"rkor")
        nyertE(2,4,6,JELTOMBO,GOMBOK,"rkor")
      
    }else{
        aktualisKlikk.classList.add("x");
        JATEKOSELEM.innerHTML=jatekos2()
        console.log(aktualisKlikk.id)
        JELTOMBX[aktualisKlikk.id]+=1
        nyertE(0,1,2,JELTOMBX,GOMBOK,"rx")
        nyertE(0,3,6,JELTOMBX,GOMBOK,"rx")
        nyertE(0,4,8,JELTOMBX,GOMBOK,"rx")
        nyertE(3,4,5,JELTOMBX,GOMBOK,"rx")
        nyertE(1,4,7,JELTOMBX,GOMBOK,"rx")
        nyertE(3,6,8,JELTOMBX,GOMBOK,"rx")
        nyertE(6,7,8,JELTOMBX,GOMBOK,"rx")
        nyertE(2,4,6,JELTOMBX,GOMBOK,"rx")
      
    }
    }
    )
  };

const TORLESGOMB=document.querySelector("#torles")
TORLESGOMB.addEventListener('click',torles,{
  
})
function nyertE(a,b,c,tomb,gomb,css){
  if (tomb[a] ===1 && tomb[b]===1 && tomb[c]===1) {
    NYERESELEM.innerHTML=nyeres();
    NYERESELEM.classList.add("nyeresClass")
    gomb[a].classList.add(css);
    gomb[b].classList.add(css);
    gomb[c].classList.add(css);
    JATEKOSELEM.innerHTML=""
}}
