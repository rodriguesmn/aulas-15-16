let perguntaTurno
perguntaTurno = prompt("Digite M (matutino), V (Vespertino) ou N (Noturno).")

function turnoEscolar(matutino, vespertino, noturno){
    switch ("M"){
        case matutino:
        console.log("Bom dia!")
        break
    } 
    switch ("V"){
        case vespertino:
        console.log("Boa tarde!")
        break
    }
    switch ("N"){
        case noturno:
        console.log("Boa noite!")
        break
    }
}
turnoEscolar(matutino, vespertino, noturno)