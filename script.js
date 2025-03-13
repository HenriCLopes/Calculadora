/*


let valorNaTela = 0;
    decimal = false,
    segNum = false,
    operador = "",
    lstN1 = [],
    lstN2 = [];



function zerar(){

    valorNaTela = '0', 
    operacao = false, 
    operando = false;
    decimal = false;
    lst = ["0","0","0","0"];

    document.getElementById("resultado").innerHTML = valorNaTela;
    
}
function mostrarTela(y){

    if (valorNaTela == "0") {

        valorNaTela = String(y);

        document.getElementById("resultado").innerHTML = valorNaTela;

    }
    else{

        valorNaTela = valorNaTela + String(y);

        document.getElementById("resultado").innerHTML = valorNaTela;

    }

    if (operando == true){

        var umaVez = true;

        if (umaVez){

            decimal = false;

            umaVez = false;

        }

        if (decimal == false){

            lst[2] = lst[2] + y;


        }
        else{

            lst[3] = lst[3] + y;

        }

    }
    else{

        if (decimal == false){

            lst[0] = lst[0] + y;


        }
        else{

            lst[1] = lst[1] + y;

        }

    }

}
function pegarOperador(y){

    if (operando == false){

        valorNaTela = valorNaTela + y

        document.getElementById("resultado").innerHTML = valorNaTela;

        operando = true;

        operador = y;

    }

}
function tornarDecimal(ponto){

    if (decimal == false){

        valorNaTela = valorNaTela + ponto;
    
        document.getElementById("resultado").innerHTML = valorNaTela;
    
        decimal = true;

    }

}
function calculo(operador){

    if (operador == "+"){

        console.log(lst)



        let n1 = Number(lst[0]);
        let n2 = Number(lst[1]);



        valorNaTela = n1 + n2;

        operando = mostrarResultado();

    }
    else if (operador == "-"){

        let n1 = Number(lst[0]);
        let n2 = Number(lst[1]);

        valorNaTela = n1 - n2;

        operando = mostrarResultado();
        
    }
    else if (operador == "x"){

        let n1 = Number(lst[0]);
        let n2 = Number(lst[1]);

        valorNaTela = n1 * n2;

        operando = mostrarResultado();
        
    }
    else if (operador == "/"){

        let n1 = Number(lst[0]);
        let n2 = Number(lst[1]);

        valorNaTela = n1 / n2;

        operando = mostrarResultado();;
        
    }
    else if (operador == "%"){

        let n1 = Number(lst[0]);
        let n2 = Number(lst[1]);

        valorNaTela = n1 % n2;

        operando = mostrarResultado();

    }

}
function mostrarResultado(){

    document.getElementById("resultado").innerHTML = String(valorNaTela);

    lst = [String(valorNaTela),"0"];

    console.log(lst)

    return false;

}

let valorNaTela = "0",
    operador = " ", 
    operando = false,
    decimal = false,
    lst = ["0","0","0","0"];*/

let n1 = "",
    n2 = "",
    operador = "",
    segNum = false,
    operacao = false,
    lst = [[],operador,[]];

function addLista(x){

    if (operacao){
    
        lst[2].push(x);
        
        mostrarNaTela(lst[0], operador, lst[2]);

    
    }
    else{
    
        lst[0].push(x);
        
        mostrarNaTela(lst[0], operador, lst[2]);
    
    }
}
function mostrarNaTela(x, y, z){

    valorNaTela = x.join("") + y + z.join("");
    document.getElementById("resultado").innerHTML = valorNaTela;
    
}
function pegarOperador(x){

    if(operacao){

        calculo();

    }

    if (valorNaTela != ""){

        if (x == "+"){

            operador = x;

            operacao = true;

            mostrarNaTela(lst[0], operador, lst[2]);
    
        }
    }

}
function calculo(){

    n1 = Number(lst[0].join(""));
    n2 = Number(lst[2].join(""));

    if (operador == "+"){

        var soma = n1 + n2;


        document.getElementById("resultado").innerHTML = soma;

    }

}







function verifEstList(x, y){

    if (x[x.length - 1] != y){


        if (y == Number){

            addLista(y);

        }
        else{

            return y;

        }


    }

}

function addDecimalList(y){

    if (segNum){

        var x = verifEstList(lstN2, y);

        lstN2.push(x);

    }
    else{

        verifEstList(lstN1, y);

        var x = verifEstList(lstN2, y);

        lstN1.push(x);

    }

}
function tornarDecimal(y){

    if (valorNaTela != ""){

        addDecimalList(y);

    }
    else{
 
        lstN1.unshift(0);

        addDecimalList(y);

    }    

}


