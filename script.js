let n1 = "",
    n2 = "",
    operador = "",
    resultado = "",
    valorNaTela = 0,
    operacao = false,
    decimal = false,
    inicio = false,
    lst = [[""],operador,[""]];
    tamanho = 0;
function addLista(x){

    var t1 = lst[0].length;
    var t2 = lst[2].length;

    tamanho = t1 + 1 + t2;

    if (tamanho <= 15){

        inicio = true;

        if (operacao){
        
            lst[2].push(x);
            
            mostrarNaTela(lst[0], operador, lst[2]);
        
        }
        else{

            lst[0].push(x);
            
            mostrarNaTela(lst[0], operador, lst[2]);
        
        }
    
    }

}
function mostrarNaTela(x, y, z){

    valorNaTela = x.join("") + y + z.join("");
    document.getElementById("resultado").innerHTML = valorNaTela;
    
}
function escOperação(x){

    if (x == "+"){

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);
    
        return "+";

    }
    else if (x == "-"){

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "-";

    }
    else if (x == "x"){

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "x";

    }
    else if (x == "/"){

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "/";

    }
    else if (x == "%"){

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "%";

    }

}
function pegarOperador(x){

    if (x == "-" && operacao == false){

        lst[0].unshift(x);

        mostrarNaTela(lst[0], operador, lst[2]);

    }
    if (inicio){

        if(operacao){

            calculo();
    
        }
    
        if (lst[0].slice(-1) == "."){
    
            lst[0].pop()
    
            operador = escOperação(x);
    
        }
        else{
    
            operador = escOperação(x);
    
        }

    }

}
function posCalculo(x){

    var lista = String(x).split("");
    
    lista.unshift(" ");

    operador = " ";

    lst = [lista, operador,[""]]
    
    decimal = false;

    operacao = false;

    document.getElementById("resultado").innerHTML = x;

}
function calculo(){

    if (inicio){

        n1 = Number(lst[0].join(""));
        n2 = Number(lst[2].join(""));
    
        if (operador == "+"){
    
            resultado = n1 + n2;

            posCalculo(resultado);
    
        }
        else if (operador == "-"){

            resultado = n1 - n2;

            posCalculo(resultado);

        }
        else if (operador == "x"){

            resultado = n1 * n2;

            posCalculo(resultado);

        }
        else if (operador == "/"){

            resultado = n1 / n2;

            posCalculo(resultado);

        }
        else if (operador == "%"){


            resultado = n1 % n2;

            posCalculo(resultado);

        }

    }

}   
function tornarDecimal(y){

    if (operacao){

        if(decimal == false){

            if (lst[2] == ""){

                lst[2].push(0);
                lst[2].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2])
        
                decimal = true;

            }
            else{

                lst[2].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2])
        
                decimal = true;

            }

        }

    }
    else{

        if (decimal == false){

            if (valorNaTela == 0){

                lst[0].push(0);
                lst[0].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2])
        
                decimal = true;

            }
            else{

                lst[0].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2])
        
                decimal = true;

            }

        }

    }

}
function zerar(){

    if (inicio){

        if (operacao){

            console.log(lst[1].length ,lst[2].length)

            if (operacao && lst[2].length == 1){

                operador = ""

                operacao = false;
                
                mostrarNaTela(lst[0], operador, lst[2]);

            }
    
            lst[2].pop()
            
            mostrarNaTela(lst[0], operador, lst[2]);

        }
        else{
            if (lst[0].length <= 2){

                n1 = "",
                n2 = "",
                operador = "",
                resultado = "",
                valorNaTela = 0,
                operacao = false,
                decimal = false,
                inicio = false,
                lst = [[""],operador,[""]];

                document.getElementById("resultado").innerHTML = 0;

            }
            else{

                console.log(operador)
                lst[0].pop();
                console.log(lst[0])
                mostrarNaTela(lst[0], operador, lst[2]);

            }

        }

    }

}