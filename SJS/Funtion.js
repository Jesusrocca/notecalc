
function limpiar(){
    document.getElementById('MF').reset();
}
 
function calcular(){
    var X = parseInt(document.getElementById('valor1').value);
    var XP=parseInt(document.getElementById('porvalor1').value);
    if(X<1 || XP>100 || X>20 || XP<1){
        alert("Ingrese datos correctos en la NOTA 1")
    }else{
        var R1=X*(XP/100);
    }    
    var Y= parseInt(document.getElementById('valor2').value);
    var YP=parseInt(document.getElementById('porvalor2').value);
    var R2=Y*(YP/100)
    if(Y<1 ||Y>20 || YP>100 ||YP<1){
        alert("Ingrese datos correctos en la NOTA 2")
    }else{
        var R2=Y*(YP/100);
    }   
    var Z= parseInt(document.getElementById('valor3').value);
    var ZP=parseInt(document.getElementById('porvalor3').value);
    if(Z<1 ||Z>20 || ZP>100 ||ZP<1){
        alert("Ingrese datos correctos en la NOTA 3")
    }else{
        var R3=Y*(ZP/100)
    } 
   

    document.getElementById('elresultado').innerHTML=R1+R2+R3;

}
