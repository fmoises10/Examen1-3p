function calcular(){
    var numero=parseInt(document.getElementById('numero').value);
    console.log(numero);
    let factorial=1;
    for (let i=1; i<=numero; i++){
        factorial*=i;
    }
    document.write("el factorial es: " +factorial)
}