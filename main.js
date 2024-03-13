import{ jatekos1,jatekos2, jatekter, nyeres, torles} from './fuggvenyek.js'
const JATEKTERELEM=document.querySelector(".mezo")
const NYERESELEM=document.querySelector('#nyeres')
const JATEKOSELEM=document.querySelector('#jatekos')

JATEKTERELEM.innerHTML=jatekter();
let valtozo=0
const JELTOMB=[0,0,0,0,0,0,0,0,0]
JATEKOSELEM.innerHTML+="<h3>1.Játékos köre!</h3>"


const GOMBOK = document.querySelectorAll(".mezo button");
for (let index = 0; index < GOMBOK.length; index++) {
  GOMBOK[index].addEventListener("click", function (event) {
    valtozo++
    let aktualisKlikk = event.target;
    if (valtozo%2===0) {
        aktualisKlikk.classList.add("kor");
        JATEKOSELEM.innerHTML=jatekos1()
        
    }else{
        aktualisKlikk.classList.add("x");
        JATEKOSELEM.innerHTML=jatekos2()
        console.log(aktualisKlikk.id)
        JELTOMB[aktualisKlikk.id]+=1
        if (JELTOMB[0] ===1 && JELTOMB[1]===1 && JELTOMB[2]===1) {
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
        }else if(JELTOMB[0] ===1 && JELTOMB[3]===1 && JELTOMB[6]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
        }else if(JELTOMB[0] ===1 && JELTOMB[4]===1 && JELTOMB[8]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
        }
    }
    
  });
}
const TORLESGOMB=document.querySelector("#torles")
TORLESGOMB.addEventListener('click',torles,{
  
})
