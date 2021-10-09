(function(){
    console.log("Mi primer funcion anonima");
})();

(function(d, w, c){
    console.log("Mi segunda funcion anonima");
    c.log("Es una consola");
})(document, window, console);

// Formas de Escribir las funciones anónimas

// 1. Clasica
(function(){
    console.log('Version Clasica');
})();

// 2. La Crockford (JavaScript The Good Parts)
((function(){
    console.log('Version Crockford');
})());

// 3. Unaria
+function(){
    console.log('Version Unaria');
}();

// 4. Facebook
!function(){
    console.log('Version Facebook');
}();