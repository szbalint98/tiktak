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
      if (JELTOMBO[0] ===1 && JELTOMBO[1]===1 && JELTOMBO[2]===1) {
        NYERESELEM.innerHTML=nyeres();
        NYERESELEM.classList.add("nyeresClass")
        GOMBOK[0].classList.add("rkor");
        GOMBOK[1].classList.add("rkor");
        GOMBOK[2].classList.add("rkor");
        JATEKOSELEM.innerHTML=""
      }else if(JELTOMBO[0] ===1 && JELTOMBO[3]===1 && JELTOMBO[6]===1){
        NYERESELEM.innerHTML=nyeres();
        NYERESELEM.classList.add("nyeresClass")
        GOMBOK[0].classList.add("rkor");
        GOMBOK[3].classList.add("rkor");
        GOMBOK[6].classList.add("rkor");
        JATEKOSELEM.innerHTML=""
      }else if(JELTOMBO[0] ===1 && JELTOMBO[4]===1 && JELTOMBO[8]===1){
        NYERESELEM.innerHTML=nyeres();
        NYERESELEM.classList.add("nyeresClass")
        GOMBOK[0].classList.add("rkor");
        GOMBOK[4].classList.add("rkor");
        GOMBOK[8].classList.add("rkor");
        JATEKOSELEM.innerHTML=""
      }else if(JELTOMBO[3] ===1 && JELTOMBO[4]===1 && JELTOMBO[5]===1){
        NYERESELEM.innerHTML=nyeres();
        NYERESELEM.classList.add("nyeresClass")
        GOMBOK[3].classList.add("rkor");
        GOMBOK[4].classList.add("rkor");
        GOMBOK[5].classList.add("rkor");
        JATEKOSELEM.innerHTML=""
      }else if(JELTOMBO[1] ===1 && JELTOMBO[4]===1 && JELTOMBO[7]===1){
        NYERESELEM.innerHTML=nyeres();
        NYERESELEM.classList.add("nyeresClass")
        GOMBOK[1].classList.add("rkor");
        GOMBOK[4].classList.add("rkor");
        GOMBOK[7].classList.add("rkor");
        JATEKOSELEM.innerHTML=""
      }
      else if(JELTOMBO[3] ===1 && JELTOMBO[6]===1 && JELTOMBO[8]===1){
        NYERESELEM.innerHTML=nyeres();
        NYERESELEM.classList.add("nyeresClass")
        GOMBOK[3].classList.add("rkor");
        GOMBOK[6].classList.add("rkor");
        GOMBOK[8].classList.add("rkor");
        JATEKOSELEM.innerHTML=""
      }
      else if(JELTOMBO[6] ===1 && JELTOMBO[7]===1 && JELTOMBO[8]===1){
        NYERESELEM.innerHTML=nyeres();
        NYERESELEM.classList.add("nyeresClass")
        GOMBOK[6].classList.add("rkor");
        GOMBOK[7].classList.add("rkor");
        GOMBOK[8].classList.add("rkor");
        JATEKOSELEM.innerHTML=""
      }
        
    }else{
        aktualisKlikk.classList.add("x");
        JATEKOSELEM.innerHTML=jatekos2()
        console.log(aktualisKlikk.id)
        JELTOMBX[aktualisKlikk.id]+=1
        if (JELTOMBX[0] ===1 && JELTOMBX[1]===1 && JELTOMBX[2]===1) {
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
          GOMBOK[0].classList.add("rx");
          GOMBOK[1].classList.add("rx");
          GOMBOK[2].classList.add("rx");
          JATEKOSELEM.innerHTML=""
        }else if(JELTOMBX[0] ===1 && JELTOMBX[3]===1 && JELTOMBX[6]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
          GOMBOK[0].classList.add("rx");
          GOMBOK[3].classList.add("rx");
          GOMBOK[6].classList.add("rx");
          JATEKOSELEM.innerHTML=""
        }else if(JELTOMBX[0] ===1 && JELTOMBX[4]===1 && JELTOMBX[8]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
          GOMBOK[0].classList.add("rx");
          GOMBOK[4].classList.add("rx");
          GOMBOK[8].classList.add("rx");
          JATEKOSELEM.innerHTML=""
        }else if(JELTOMBX[3] ===1 && JELTOMBX[4]===1 && JELTOMBX[5]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
          GOMBOK[3].classList.add("rx");
          GOMBOK[4].classList.add("rx");
          GOMBOK[5].classList.add("rx");
          JATEKOSELEM.innerHTML=""
        }else if(JELTOMBX[1] ===1 && JELTOMBX[4]===1 && JELTOMBX[7]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
          GOMBOK[1].classList.add("rx");
          GOMBOK[4].classList.add("rx");
          GOMBOK[7].classList.add("rx");
          JATEKOSELEM.innerHTML=""
        }
        else if(JELTOMBX[3] ===1 && JELTOMBX[6]===1 && JELTOMBX[8]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
          GOMBOK[3].classList.add("rx");
          GOMBOK[6].classList.add("rx");
          GOMBOK[8].classList.add("rx");
          JATEKOSELEM.innerHTML=""
        }
        else if(JELTOMBX[6] ===1 && JELTOMBX[7]===1 && JELTOMBX[8]===1){
          NYERESELEM.innerHTML=nyeres();
          NYERESELEM.classList.add("nyeresClass")
          GOMBOK[6].classList.add("rx");
          GOMBOK[7].classList.add("rx");
          GOMBOK[8].classList.add("rx");
          JATEKOSELEM.innerHTML=""
        }
    }
    
  });
}
const TORLESGOMB=document.querySelector("#torles")
TORLESGOMB.addEventListener('click',torles,{
  
})
