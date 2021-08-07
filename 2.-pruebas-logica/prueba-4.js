const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/************** forEach ***************** */
// Imprimir las companias usando for
//   for(let i=0; i<companies.length; i++){
//       console.log(companies[i])
//   }


// Usando el forEach
//companies.forEach((compania) => console.log(compania))


/*************** Filter **************** */
// Usando filter => Imprime mayor o igual de 21 años
// *******con for
// let edadmayor = [];
// for(let i=0; i<ages.length; i++){
//     if(ages[i] >= 21){
//         edadmayor.push(ages[i])
//     }
// }

// console.log(edadmayor);

// *****con Filter
const edadmayor = ages.filter(edad => edad >= 21);
// console.log(edadmayor)

// Filtras las companias de retail
const retail = companies.filter(compania => compania.category === 'Retail');
// console.log(retail);

// Obtiene todas las empresas de los años 80
const start80 = companies.filter(compania => (compania.start >= 1980 && compania.start < 1990))
//console.log(start80);

// Imprima las companias que duraron 10 años o mas
const duracionEmpresa = companies.filter(compania => (compania.end - compania.start >= 10))
//console.log(duracionEmpresa)


/*************** Map **************** */
// Crea un array solo con nombre de compania
const nameCompania = companies.map(compania => compania.name);
// console.log(nameCompania);

// Eleva al cuadrado las edades
const edadcuadrado = ages.map(edad => edad*edad);
//console.log(edadcuadrado);

// Obteniendo las raiz cuadrado
const edadSquare = ages.map(edad => Math.sqrt(edad));
//console.log(edadSquare);


/*************** Sort **************** */
// Ordena el arreglo por la fecha de creacion de la empresa
const ordenCompania = companies.sort((a,b) => (a.start > b.start ? 1 : -1))
//console.log(ordenCompania);

// Ordena las edades de menor a mayor
const ordenEdad = ages.sort((a,b) => a-b);
//console.log(ordenEdad);


/*************** Reduce **************** */
// Suma toda las edades
const sumaEdad = ages.reduce((a,b) => a+b, 0);
//console.log(sumaEdad);

// Usando for
let EdadSumaTotal = 0;

for(let i=0; i<ages.length; i++){
    EdadSumaTotal += ages[i]
}

//console.log(EdadSumaTotal);

// Obtener el total de años de las companias
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
//console.log(totalYears);

// Combinando Metodos
const combined = ages
    .map(age => ages * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a -b)
    .reduce((a, b) => a + b, 0);


console.log(combined);