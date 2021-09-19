try {
    let numero = "a";
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero");
    }

    console.log(numero * numero);
    
} catch (err) {
    console.log(err);
} finally {
    // El bloque finally se ejecutara siempre al final
    // de un bloque try-catch
}