class continent {
  constructor(continente) {
    this.flag = continente.flag;
    this.name = continente.name;
    this.capital = continente.capital;
  }
}
const getContinent = async (name) => {
  const uri = `https://restcountries.com/v2/name/${name}`;
  const resp = await fetch(uri);
  const country = await resp.json();

  let conti = new continent(country[0]);

  // destructuracion
  // let { region } = conti;
  //  o
  //  let [...] = array;
  //  o
  //  let array = ['chavo', 'quico', 'chilindrina'];
  //  let [,,personaje3] = array;
  document.getElementById("pais_name").innerHTML = conti.name;
  document.getElementById("pais_flag").src = conti.flag;
  document.getElementById("pais_region").innerHTML = conti.capital;
};

const $bt_search_pais = document.getElementById("bt_search_pais");
$bt_search_pais.addEventListener("click", () => {
  debugger;
  const $input_pais = document.getElementById("input_pais");
  getContinent($input_pais.value);
});

// //forma mas utilizadas para funciones
// const hola = ()=> {
//     console.log("hola1");
// };
// //forma en donde se puede usar funciones
// function hola2(){
//    console.log("hola2");
//
