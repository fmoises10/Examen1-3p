function calcular(){
    var numero=parseInt(document.getElementById('numero').value);
    console.log(numero);
    let multiplos=0;
    for (let i=1; i<=numero; i++){
        if(i%3==0 || i%5==0){
        document.write(i+'<br>')
        multiplos++;
        }
    }
    document.write("hay "+multiplos+" multiplos de 3 y 5 ")
}