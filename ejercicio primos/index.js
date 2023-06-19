function calcular(){
    var cantidad=parseInt(document.getElementById('numero').value);
    console.log(numero);
    let primos=0,j=2;
    for (let i=2; i<=cantidad; i++){
        for(; j<=cantidad;j++){
            if(cantidad%i==0 && (i==j || i==1)){
                console.log(j)
                document.write(j)
                primos++
        }
    }
}
    // document.write("hay "+primos+" numeros primos ")
}