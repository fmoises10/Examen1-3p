function calcular(){
    var salario=parseInt(document.getElementById('salario').value);
    var antiguedad=parseInt(document.getElementById('antiguedad').value);
    let total=0;
        if(antiguedad>4|| salario<2000){
            bono=salario*0.25
        }
        else{
            bono=salario*0.20
        }
        total=bono+salario;
        document.write("la cantidad del bono es : "+bono+" total a recibir es : "+total);

    }
   