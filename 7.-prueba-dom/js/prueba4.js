/***** Cuenta Regresiva *****/

export default function countdown(id, limitDate, finalMessage){
    const $countdown = document.getElementById(id);
    const countdownDate = new Date(limitDate).getTime(); // la fecha convierte en milisegundos

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(); // Fecha ahora
        let limitTime = countdownDate - now;
        let days = Math.floor(limitTime/(1000*60*60*24)); //1000 milisegundos en un dia, 60s que  hay en un minuto, 20m, 24h
        let hours = ("0" + Math.floor(limitTime % (1000*60*60*24) / (1000*60*60))).slice(-2); // dividimos el residuo de dias
        let minutes = ("0" + Math.floor(limitTime % (1000*60*60) / (1000*60))).slice(-2);
        let seconds = ("0" + Math.floor(limitTime % (1000*60) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }

    }, 1000)
}