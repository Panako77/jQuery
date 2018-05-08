$(document).ready(function(){
    console.log("JS ready");
    /*Crea 2 variables i comparales.Si son iguals mostra per la consola
    "son iguals" , en cas contrari, mostra per consola "no son iguals"*/
    
    var name="cesar";
    var lastname="celda";
    
    if( name == lastname ){
        console.log("son iguales");
    }else{
        console.log("son diferentes");
    }
    
    /*Crea un array amb 5 marques de cotxes i mostra per consola
    cadascun d ells
    */
    
    var marques =["porsche","ferrari","bentley","aston martin","lamborgini"];
    for(var i=0; i<marques.length;i++){
        console.log(marques[i]);
    }
    
});