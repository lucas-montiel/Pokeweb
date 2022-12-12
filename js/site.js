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

  console.log(conti);
};

getContinent("arg");

// //forma mas utilizadas para funciones
// const hola = ()=> {
//     console.log("hola1");
// };
// //forma en donde se puede usar funciones
// function hola2(){
//    console.log("hola2");
//
