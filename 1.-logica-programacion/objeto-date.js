//Sun Sep 26 2021 17:01:47 GMT-0500 (hora estándar de Perú)
console.log(Date());

let fecha = new Date();

// Sun Sep 26 2021 17:04:32 GMT-0500 (hora estándar de Perú)
console.log(fecha);

// Dia de Mes => 26
console.log(fecha.getDate()); 

// dia de la semana D L M M J V S -> 0 1 2 3 4 5 6 => 0
console.log(fecha.getDay());

// mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11 => 8
console.log(fecha.getMonth());

// Obtener el Año => 2021
console.log(fecha.getFullYear());

// Obtener Hora 0 a 23 horas => 17
console.log(fecha.getHours());

// Obtener Minutos => 13
console.log(fecha.getMinutes());

// Obtener Segundos => 54
console.log(fecha.getSeconds());

// Obtener Milisegundos => 681
console.log(fecha.getMilliseconds());

// Obtener fecha entendible => Sun Sep 26 2021 17:15:28 GMT-0500 (hora estándar de Perú)
console.log(fecha.toString());

// Sun Sep 26 2021
console.log(fecha.toDateString());

// 26/9/2021 17:17:22
console.log(fecha.toLocaleString());

// 26/9/2021
console.log(fecha.toLocaleDateString());

// 17:25:15
console.log(fecha.toLocaleTimeString());

// Uso horario => 300 (minutos) 5Horas
console.log(fecha.getTimezoneOffset());

// Dia cero o dia en que se encuentra Londres => 26
console.log(fecha.getUTCDate());

// Hora Londres => 22
console.log(fecha.getUTCHours());

// Fecha instante => 1632695795519, este numero representa cuantos segundos paso desde 1 de enero de 1970
console.log(Date.now());

// Calculando mi fecha
let cumpleJon = new Date(1996,8,19);
console.log(cumpleJon); // Thu Sep 19 1996 00:00:00 GMT-0500 (hora estándar de Perú)


// Un libreria para majenar fecha
// link => https://momentjs.com/