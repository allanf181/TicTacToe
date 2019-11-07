/* ---------->>> DEFINIÇÃO DE TERMOS <<<----------
O nome de cada célula da matriz é a letra m seguida da posição x e y, por exemplo:
m00, m01, m02... etc.

Preencher na matriz abaixo os seguintes números:
1 = representa o Jogador 1
2 = representa o jogador 2 (ou a Máquina)

matriz[posição]

    0 1 2
    3 4 5
    6 7 8
*/

/* ---------->>> VARIÁVEIS GLOBAIS <<<----------*/
var rodada = 1;
var n_jogos = 1;
var jogabilidade = true;
var vez_jogador = 0;

/* ---------->>> MATRIZ DO JOGO <<<----------*/
var matriz = new Array(9);
for (var i = 0; i < 9; i++)
    matriz[i] = 0;


function jogar(id, posicao) {
    vez_jogador = rodada % 2;
    if (vez_jogador == 1 && jogabilidade == true) {
        //jogada do jogador 1       
        if (matriz[posicao] == 0) {
            document.getElementById(id).style.backgroundImage = "url('img/x.png')";
            matriz[posicao] = 1;
            rodada++;
        }
    }

    if (vez_jogador == 0 && jogabilidade == true) {
        //jogada do jogador 2
        if (matriz[posicao] == 0) {
            document.getElementById(id).style.backgroundImage = "url('img/o.png')";
            matriz[posicao] = 2;
            rodada++;
        }
    }

    vitoria1();
    vitoria2();
}


function vitoria1() {
    //Horizontal
    if (matriz[0] == 1 && matriz[1] == 1 && matriz[2] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[3] == 1 && matriz[4] == 1 && matriz[5] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[6] == 1 && matriz[7] == 1 && matriz[8] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    //Vertical
    if (matriz[0] == 1 && matriz[3] == 1 && matriz[6] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[1] == 1 && matriz[4] == 1 && matriz[7] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[2] == 1 && matriz[5] == 1 && matriz[8] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    //Diagonal
    if (matriz[0] == 1 && matriz[4] == 1 && matriz[8] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[2] == 1 && matriz[4] == 1 && matriz[6] == 1) {
        console.log("Jogador 1 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }
}

function vitoria2() {
    //Horizontal
    if (matriz[0] == 2 && matriz[1] == 2 && matriz[2] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[3] == 2 && matriz[4] == 2 && matriz[5] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[6] == 2 && matriz[7] == 2 && matriz[8] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    //Vertical
    if (matriz[0] == 2 && matriz[3] == 2 && matriz[6] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[1] == 2 && matriz[4] == 2 && matriz[7] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[2] == 2 && matriz[5] == 2 && matriz[8] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    //Diagonal
    if (matriz[0] == 2 && matriz[4] == 2 && matriz[8] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }

    if (matriz[2] == 2 && matriz[4] == 2 && matriz[6] == 2) {
        console.log("Jogador 2 venceu no jogo nº: " + n_jogos);
        jogabilidade = false;
    }
}


function novoJogo() {
    rodada = 1;
    n_jogos++;
    jogabilidade = true;

    var campos = document.getElementsByClassName("default");
    for (var i = 0; i < campos.length; i++) {
        campos[i].style.backgroundImage = "none";
    }

    for (var i = 0; i < 9; i++) {
        matriz[i] = 0;
    }
}



