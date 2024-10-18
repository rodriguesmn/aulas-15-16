let ensinoMedio
let perguntaIdade
let perguntaFaculdade

ensinoMedio = prompt('Você já concluiu o ensino médio? Digite S para sim e N para não.')
perguntaIdade = prompt('Você tem quantos anos?')
perguntaFaculdade = prompt('Está matriculado em outra faculdade? Digite S para sim e N para não.')

function podeMatricular(ensinoMedio, perguntaIdade, perguntaFaculdade){
    if (ensinoMedio === 'S' && perguntaIdade >= 18 && perguntaFaculdade === 'S'){
        return "Pode se matricular."
    } else 
        return "Não pode se matricular."
}

podeMatricular(ensinoMedio, perguntaIdade, perguntaFaculdade)