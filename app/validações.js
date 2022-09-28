function verificaSeOChuteTemUmValorValido(chute){
    const numero = +chute

    /*if (chuteForIvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }*/

    if (chuteForIvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }

    if (numeroForMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Número fora do limite: Precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
        
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era <span class="box2">${numeroSecreto}<span></h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div class="seta">O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    
    }else {
        elementoChute.innerHTML += `<div class="seta">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
        
}

function chuteForIvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
