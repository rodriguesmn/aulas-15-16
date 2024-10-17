let pokemon = [
    {nome: 'bulbasauro', tipo: 'planta e veneno'},
    {nome: 'charmander', tipo: 'fogo'},
    {nome: 'squirtle', tipo: 'água'}
]

let pergunta = prompt('Digite 1 para Bulbasauro, 2 para Charmander ou 3 para Ssquirtle')

function qualTipoPokemon(pokemon){
    switch (pokemon){
        case 'bulbasauro':
        console.log('planta e veneno')
        break
    }
    switch (pokemon){
        case 'charmander':
        console.log('fogo')
        break
    }
    switch (pokemon){
        case 'squirtle':
        console.log('água')
        break
    }

}