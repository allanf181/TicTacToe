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
let rodada = 1;
let n_jogos = 1;
let jogabilidade = true;
let modoAI = false;
let vez_jogador = 0;
let vitoriaJogador1 = 0;
let vitoriaJogador2 = 0;
let empates = 0;

/* ---------->>> MATRIZ DO JOGO <<<----------*/
let matriz = new Array(9);
matriz.fill(0);


function jogar(id, posicao) {
    vez_jogador = rodada % 2;
    if (vez_jogador === 1 && jogabilidade) {
        //jogada do jogador 1       
        if (matriz[posicao] === 0) {
            id.style.backgroundImage = "url('img/x.png')";
            matriz[posicao] = 1;
            rodada++;
            if(modoAI) {
                if (vitoria(matriz, 1) || vitoria(matriz, -1) || empate(matriz)) return;
                let posicaoAI = minimax(matriz, -1, 0);
                console.log("f");
                console.log(posicaoAI);
                document.getElementById("m" + posicaoAI[1]).style.backgroundImage = "url('img/o.png')";
                matriz[posicaoAI[1]] = -1;
                rodada++;
            }
        }
    }

    if ((vez_jogador === 0 && jogabilidade) && !modoAI) {
        //jogada do jogador 2
        if (matriz[posicao] === 0) {
            id.style.backgroundImage = "url('img/o.png')";
            matriz[posicao] = -1;
            rodada++;
        }
    }


    vitoria(matriz, 1);
    vitoria(matriz, -1);
    empate(matriz);

}

function vitoria(jogo, jogador) {
    if(testavitoria(jogo, jogador)){
        console.debug(jogo);
        qtdVitoria(jogador);
        return true;
    }
    return false;
}

function empate(jogo) {
    if(!jogo.includes(0)){
        qtdVitoria(0);
        return true;
    }
    return false;
}

function testavitoria(jogo, jogador) {
    //Horizontal
    if (jogo[0] === jogador && jogo[1] === jogador && jogo[2] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    if (jogo[3] === jogador && jogo[4] === jogador && jogo[5] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    if (jogo[6] === jogador && jogo[7] === jogador && jogo[8] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    //Vertical
    if (jogo[0] === jogador && jogo[3] === jogador && jogo[6] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    if (jogo[1] === jogador && jogo[4] === jogador && jogo[7] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    if (jogo[2] === jogador && jogo[5] === jogador && jogo[8] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    //Diagonal
    if (jogo[0] === jogador && jogo[4] === jogador && jogo[8] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    if (jogo[2] === jogador && jogo[4] === jogador && jogo[6] === jogador) {
        //console.log("Jogador " + jogador + "venceu no jogo nº: " + n_jogos);
        return true;
    }

    return false;
}

function novoJogo() {
    rodada = 1;
    n_jogos++;
    jogabilidade = true;
    modoAI = $("#modoAI").is(":checked");
    let campos = document.getElementsByClassName("default");
    for (let i = 0; i < 9; i++) {
        campos[i].style.backgroundImage = "none";
        matriz[i] = 0;
    }
}

function qtdVitoria(jogador) {
    jogabilidade = false;
    document.getElementById('numeroJogos').innerHTML = n_jogos;

    switch (jogador) {
        case 1:
            vitoriaJogador1++;
            document.getElementById('vitoriaJogador1').innerHTML = vitoriaJogador1;
            document.getElementById('spanVencedor').innerHTML = '1';
            $('#modalVencedor').modal('show');
            break;
        case -1:
            vitoriaJogador2++;
            document.getElementById('vitoriaJogador2').innerHTML = vitoriaJogador2;
            document.getElementById('spanVencedor').innerHTML = '2';
            $('#modalVencedor').modal('show');
            break;
        case 0:
            empates++;
            document.getElementById('empates').innerHTML = empates;
            $('#modalEmpate').modal('show');
            break;
        default:
            break;
    }

}

function pontuacao(jogo, jogador, profundidade) {
    if (testavitoria(jogo, -1)){
        return 10 - profundidade;
    }else if (testavitoria(jogo, 1)){
        return profundidade - 10;
    }
    else {
        return 0;
    }
}

function minimax(jogo, jogador, profundidade){
    if(!jogo.includes(0) || testavitoria(jogo, 1) || testavitoria(jogo, -1)){
        return [pontuacao(jogo, jogador, profundidade), -1];
    }
    let prof = profundidade + 1;
    let pontuacoes = [];
    let movimentos = [];
    for (let i = 0; i < 9; i++){
        let copiajogo = [...jogo];
        if(copiajogo[i] === 0) {
            copiajogo[i] = jogador;
            let a = minimax(copiajogo, -jogador, prof);
            //console.log(profundidade);
            //console.log(a);
            pontuacoes.push(a[0]);
            movimentos.push(i);
        }
    }

    if(jogador === -1){
        return [pontuacoes[pontuacoes.indexOf(Math.max(...pontuacoes))],movimentos[pontuacoes.indexOf(Math.max(...pontuacoes))], movimentos, pontuacoes];
    }else{
        return [pontuacoes[pontuacoes.indexOf(Math.min(...pontuacoes))],movimentos[pontuacoes.indexOf(Math.min(...pontuacoes))], movimentos, pontuacoes];
    }
}


