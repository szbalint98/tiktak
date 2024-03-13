export function jatekter() {
  let txt = "";

  for (let index = 0; index < 9; index++) {
    txt += `<button id="${index}"></button>`;
  }
  return txt;
}
export function torles(){
  location.reload()
}
export function nyeres(){
  let txt = "";
  txt+="<h1>Nyertél!</h1>"
  return txt;
}
export function jatekos1(){
  let txt="" 
  txt+="<h3>1.Játékos köre!</h3>"
  return txt;
}
export function jatekos2(){
  let txt="" 
  txt+="<h3>2.Játékos köre!</h3>"
  return txt;
}
