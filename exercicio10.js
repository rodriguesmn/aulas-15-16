let perguntaTurno
perguntaTurno = prompt("Digite M (matutino), V (Vespertino) ou N (Noturno).")

function turnoEscolar(matutino, vespertino, noturno){
    if (matutino === 'M'){
        return "Bom dia!"
    } else if (vespertino === 'V'){
        return "Boa tarde!"
    } else (noturno === 'N')
    return "Boa noite!"
}
turnoEscolar(matutino, vespertino, noturno)