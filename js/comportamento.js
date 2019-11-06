/* ---------->>> DEFINIÇÃO DE TERMOS <<<----------
O nome de cada célula da matriz é a letra m seguida da posição x e y, por exemplo:
m00, m01, m02... etc.

Preencher na matriz abaixo os seguintes números:
1 = representa o Jogador 1
2 = representa o jogador 2 (ou a Máquina)

matriz[linha][coluna]
*/

/* ---------->>> VARIÁVEIS GLOBAIS <<<----------*/
var rodada = 0;

/* ---------->>> MATRIZ DO JOGO <<<----------*/
var matriz = new Array(3);
for (var i = 0; i < 3; i++)
    matriz[i] = new Array(3);

for (var i = 0; i < 3; i++)
    for (var j = 0; j < 3; j++)
        matriz[i][j] = 0;



function jogar(id, x, y) {
    rodada++;

    if ((rodada % 2) == 1) {
        //jogada do jogador 1
        document.getElementById(id).style.backgroundImage = "url('img/x.png')";
        matriz[x][y] = 1;
    }

    else {
        //jogada do jogador 2
        document.getElementById(id).style.backgroundImage = "url('img/o.png')";
        matriz[x][y] = 2;
    }

    vitoria1();
    vitoria2();
}


function vitoria1() {
    //Horizontal
    if (matriz[0][0] == 1 && matriz[1][0] == 1 && matriz[2][0] == 1) {
        console.log("Jogador 1 venceu!");
    }

    if (matriz[0][1] == 1 && matriz[1][1] == 1 && matriz[2][1] == 1) {
        console.log("Jogador 1 venceu!");
    }

    if (matriz[0][2] == 1 && matriz[1][2] == 1 && matriz[2][2] == 1) {
        console.log("Jogador 1 venceu!");
    }

    //Vertical
    if (matriz[0][0] == 1 && matriz[0][1] == 1 && matriz[0][2] == 1) {
        console.log("Jogador 1 venceu!");
    }

    if (matriz[1][0] == 1 && matriz[1][1] == 1 && matriz[1][2] == 1) {
        console.log("Jogador 1 venceu!");
    }

    if (matriz[2][0] == 1 && matriz[2][1] == 1 && matriz[2][2] == 1) {
        console.log("Jogador 1 venceu!");
    }

    //Diagonal
    if (matriz[0][0] == 1 && matriz[1][1] == 1 && matriz[1][2] == 1) {
        console.log("Jogador 1 venceu!");
    }

    if (matriz[0][2] == 1 && matriz[1][1] == 1 && matriz[2][0] == 1) {
        console.log("Jogador 1 venceu!");
    }
}

function vitoria2() {
    //Horizontal
    if (matriz[0][0] == 2 && matriz[1][0] == 2 && matriz[2][0] == 2) {
        console.log("Jogador 2 venceu!");
    }

    if (matriz[0][1] == 2 && matriz[1][1] == 2 && matriz[2][1] == 2) {
        console.log("Jogador 2 venceu!");
    }

    if (matriz[0][2] == 2 && matriz[1][2] == 2 && matriz[2][2] == 2) {
        console.log("Jogador 2 venceu!");
    }

    //Vertical
    if (matriz[0][0] == 2 && matriz[0][1] == 2 && matriz[0][2] == 2) {
        console.log("Jogador 2 venceu!");
    }

    if (matriz[1][0] == 2 && matriz[1][1] == 2 && matriz[1][2] == 2) {
        console.log("Jogador 2 venceu!");
    }

    if (matriz[2][0] == 2 && matriz[2][1] == 2 && matriz[2][2] == 2) {
        console.log("Jogador 2 venceu!");
    }

    //Diagonal
    if (matriz[0][0] == 2 && matriz[1][1] == 2 && matriz[1][2] == 2) {
        console.log("Jogador 2 venceu!");
    }

    if (matriz[0][2] == 2 && matriz[1][1] == 2 && matriz[2][0] == 2) {
        console.log("Jogador 2 venceu!");
    }
}

function novoJogo() {
    rodada = 0;

    var campos = document.getElementsByClassName("default");
    for (var i = 0; i < campos.length; i++) {
        campos[i].style.backgroundImage = "none";
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            matriz[i][j] = 0;
        }
    }
}



