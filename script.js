let n1 = "",
    n2 = "",
    operador = "",
    resultado = "",
    valorNaTela = 0,
    operacao = false,
    decimal = false,
    inicio = false,
    tema = false,
    lst = [[""],operador,[""]];
    tamanho = 0;

//Função para "escutar" o teclado
document.addEventListener("keydown", function(event){

    console.log(event.key)
    if (event.key == 1){addLista(1)}
    else if (event.key == 2){addLista(2)}
    else if (event.key == 3){addLista(3)}
    else if (event.key == 4){addLista(4)}
    else if (event.key == 5){addLista(5)}
    else if (event.key == 6){addLista(6)}
    else if (event.key == 7){addLista(7)}
    else if (event.key == 8){addLista(8)}
    else if (event.key == 9){addLista(9)}
    else if (event.key == 0){addLista(0)}
    else if (event.key == "Backspace"){zerar()}
    else if (event.key == "%"){pegarOperador("&")}
    else if (event.key == "*"){pegarOperador("x")}
    else if (event.key == "/"){pegarOperador("/")}
    else if (event.key == "-"){pegarOperador("-")}
    else if (event.key == "+"){pegarOperador("+")}
    else if (event.key == "Enter"){calculo()}
    else if (event.key == ","){tornarDecimal(".")}

})
//Função para mudar o tema
function mudarTema(){

    if (tema){

        document.getElementById("slide").style.marginRight = "35px";
        document.getElementById("slide").style.marginLeft = "5px";
        document.getElementById("fundo").style.backgroundImage = "linear-gradient(45deg, red, yellow, green, blue)";
        document.getElementById("tela").style.backgroundColor = "lightblue";
        document.getElementById("bac").style.backgroundColor = "rgb(47, 47, 47)";
        document.getElementById("bac").style.color = "aliceblue";
        document.getElementById("calculadora").style.backgroundColor = "aliceblue";
        document.getElementById("lugardafrase").style.backgroundColor = "aliceblue";
        document.getElementById("frase").style.backgroundColor = "antiquewhite";


        tema = false;

    }
    else{

        document.getElementById("slide").style.marginRight = "2px";
        document.getElementById("slide").style.marginLeft = "38px";
        document.getElementById("fundo").style.backgroundImage = "linear-gradient(45deg, rgb(47, 47, 47), white)";
        document.getElementById("tela").style.backgroundColor = "white";
        document.getElementById("bac").style.backgroundColor = "#5E2129";
        document.getElementById("bac").style.color = "white";
        document.getElementById("calculadora").style.backgroundColor = "rgb(47, 47, 47)";
        document.getElementById("lugardafrase").style.backgroundColor = "rgb(47, 47, 47)";
        document.getElementById("frase").style.backgroundColor = "rgb(214, 214, 214)";


        tema = true;

    }

}
//Adiciona os números na lista, x = número selecionado
function addLista(x){

    //Determina o tamanho da lista
    var t1 = lst[0].length;
    var t2 = lst[2].length;

    tamanho = t1 + 1 + t2;

    //Se o tamanho da lista 
    if (tamanho <= 16){//For menor ou igual a 16...

        //Se inicía pois um número foi selecionado
        inicio = true;

        //Se o valor será adicionado no...
        if (operacao){//Segundo dígito...
        
            lst[2].push(x);
 
            mostrarNaTela(lst[0], operador, lst[2]);
        
        }
        else{//Primeiro dígito...

            //Se alguém digitar algum núemro 
            if (lst[0][1] == "0"){//E zero estiver na tela 

                lst[0].pop(1);
             
                lst[0].push(x);

                mostrarNaTela(lst[0], operador, lst[2]);

            }
            else{//E 0 não estiver na tela ...

                lst[0].push(x);

                mostrarNaTela(lst[0], operador, lst[2]);

            }
           
        }
    
    }

}
//Mostra na tela o número 1, o operador e o número 2
function mostrarNaTela(x, y, z){

    valorNaTela = x.join("") + y + z.join("");
    document.getElementById("resultado").innerHTML = valorNaTela;
    
}
//Restorna qual operador aparecera na tela
function escOperação(x){

    if (x == "+"){//Retorna "+"

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);
    
        return "+";

    }
    else if (x == "-"){//Retorna "-"

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "-";

    }
    else if (x == "x"){//Retorna "x"

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "x";

    }
    else if (x == "/"){//Retorna "/"

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "/";

    }
    else if (x == "%"){//Retorna "%"

        operacao = true;
    
        decimal = false;

        mostrarNaTela(lst[0], x, lst[2]);

        return "%";

    }

}
//Adiciona o operador na tela
function pegarOperador(x){

    //Se selecionar um operador e...
    if (x == "-" && operacao == false && lst[0].length == 1){//Se esse operador for "-" 

        lst[0].unshift(x);

        mostrarNaTela(lst[0], operador, lst[2]);

    }
    else if (inicio){//Se um número já foi sido selecionado

        if(operacao){//E um operador já foi selecionad

            calculo();
    
        }
    
        if (lst[0].slice(-1) == "."){//Se o último valor da lista é um "."
    
            lst[0].pop();
    
            operador = escOperação(x);
    
        }
        else{//Diga qual operador ele é
    
            operador = escOperação(x);
    
        }

    }

}
//Mostra o resultado e reseta variáveis
function posCalculo(x){

    //Verifica o valor do resultado
    if (x == "Indefinido" || x == "NaN"){//Se ele é indefinido

        lst[0].pop(1);

        operador = " ";

        lst = [lst[0], operador,[""]];
        
        decimal = false;

        operacao = false;

        document.getElementById("resultado").innerHTML = "Indefinido";

        inicio = false;

    }
    else{//Se ele é definido

        var lista = String(x).split("");
    
        lista.unshift(" ");

        operador = " ";

        lst = [lista, operador,[""]];
        
        decimal = false;

        operacao = false;
        
        document.getElementById("resultado").innerHTML = x;

    }

}
//Calcula o resultado
function calculo(){

    if (inicio){//Se a calculadora foi iniciada...

        n1 = Number(lst[0].join(""));
        n2 = Number(lst[2].join(""));
    
        if (operador == "+"){//E o operador for "+"...
    
            resultado = n1 + n2;

            posCalculo(resultado);
    
        }
        else if (operador == "-"){//E o operador for "-"

            resultado = n1 - n2;

            posCalculo(resultado);

        }
        else if (operador == "x"){//E o operador for "x"

            resultado = n1 * n2;

            posCalculo(resultado);

        }
        else if (operador == "/"){//E o operador for "/"

            if (n2 == 0){//Se o número estiver sendo dividido por 0

                resultado = "Indefinido";

                posCalculo(resultado);

            }
            else{//Se o número não estiver sendo dividido por zero

                resultado = n1 / n2;

                posCalculo(resultado);
                
            }

        }
        else if (operador == "%"){//E operador for "%"

            if (n2 == 0){//Se o número for 0

                resultado = "Indefinido";

                posCalculo(resultado);

            }
            else{//Se o número não for 0

                resultado = n1 % n2;

                posCalculo(resultado);
                
            }

        }

    }

}   
//Adiciona um ".", tronando o núemro decimal
function tornarDecimal(y){

    //Verifica em qual número deve adicionar o "."
    if (operacao){//Se for no segundo

        if(decimal == false){//E ainda não tiver adicionado um "."

            if (lst[2] == ""){//Se não existir valor antes

                lst[2].push(0);
                lst[2].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2]);
        
                decimal = true;

            }
            else{//Se existir valor antes

                lst[2].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2]);
        
                decimal = true;

            }

        }

    }
    else{//Se for o primeiro número

        if (decimal == false){//E ainda não tiver adicionado um "."

            if (valorNaTela == 0){//Se a tela mostra 0

                lst[0].push(0);
                lst[0].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2]);
        
                decimal = true;

            }
            else{//Se a tela não mostra 0

                lst[0].push(y);
        
                mostrarNaTela(lst[0], operador, lst[2]);
        
                decimal = true;

            }

        }

    }

}
//Zera ou apaga dígitos
function zerar(){

    var indefinido = document.getElementById("resultado").innerHTML;

    //Verifica o etado da calculadora
    if (inicio || indefinido == "Indefinido"){//Se já digitaram um número ou se o resultdado deu infinito

        //Verifica qual lsita deve ser apagada
        if (operacao){//Se for a segunda

            if (lst[2].length == 1){//Se o segundo número ainda não foi digitado

                operador = "";

                operacao = false;
                
                mostrarNaTela(lst[0], operador, lst[2]);

            }
    
            lst[2].pop();
            
            mostrarNaTela(lst[0], operador, lst[2]);

        }
        else{//Se for a primeira
            if (lst[0].length <= 2){//E tiver apenas um dígito na tela

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
            else{//E tiver mais dígitos na tela 

                lst[0].pop();

                mostrarNaTela(lst[0], operador, lst[2]);

            }

        }

    }

}