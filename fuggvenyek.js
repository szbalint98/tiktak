export function jatekter() {
  let txt = "";

  for (let index = 0; index < 9; index++) {
    txt += `<button id="${index}"></button>`;
  }
  return txt;
}
export function torles(lista){
  for (let index = 0; index < lista.length; index++) {
      lista[index].classList.remove("kor")
      lista[index].classList.remove("x")
      
  }
}
export function nyeres(){
  let txt = "";
  txt+="<h1>Nyertél!</h1>"
  return txt;
}
