export function jatekter() {
  let txt = "";

  for (let index = 0; index < 9; index++) {
    txt += `<button id="but${index}"></button>`;
  }
  return txt;
}
