import Pokemon from "./pokemon.js"
import {random, countKickF, generateLog} from "./utils.js"
import {pokemons} from "./pokemons.js"

const pokemonImg = document.getElementById('img-player1')
const pokemonName = document.getElementById('name-player1')

const randomItem = Math.ceil(Math.random() * pokemons.length - 1)
const pokemon = pokemons[randomItem]
const charmander = pokemons.find(item => item.name === 'Charmander')



pokemonImg.src = pokemon.img
pokemonName.innerText = pokemon.name

let player1 = new Pokemon({
    ...pokemon,
    selector: 'player1'
})
let player2 = new Pokemon({
    ...charmander,
    selector: 'player2'
})



const control = document.querySelector('.control')
player1.attacks.forEach(item => {
    const btn = document.createElement('button')
    let count = countKickF(item.maxCount)
    btn.classList.add('button')
    btn.innerText = item.name + `(${item.maxCount})`
    btn.addEventListener('click', () =>{
        let c = count()
        player1.changeHP(random(20),control, function (number) {
            btn.innerText = item.name + ` (${c})`
            if(!c) btn.disabled = true
            console.log(generateLog(player1, player2, number))
        })
        player2.changeHP(random(20), control)

            // startBnt()
            // resetBtn()
        console.log('Click btn ', btn.innerText)

    })
    control.appendChild(btn)

})

// const allButtons = document.querySelectorAll('.control .button');
// allButtons.forEach($item => $item.remove());

//
//
//
// const player1 = new Pokemon({
//     name: 'Pikachu',
//     type: 'electric',
//     hp: 500,
//     selector: 'character'
// })
// const player2 = new Pokemon({
//     name: 'Charmander',
//     type: 'fire',
//     hp: 450,
//     selector: 'enemy'
// })
// console.log(player1)
// console.log(player2)
//
// function countKickF() {
//     let countKick = 1
//     return function () {
//         return countKick++
//     }
// }
// let count = countKickF()
//
//
// btnKick.addEventListener('click',function () {
//
//     player1.changeHP(random(20), function (number) {
//         console.log('Урон', number)
//         console.log(generateLog(player1, player2, number))
//     })
//     player2.changeHP(random(20))
//     let c = count()
//     console.log(`Удар ${c}/6`)
//     if(c === 6)
//     {
//         btnKick.disabled = true
//         btnBallLightning.disabled = true
//     }
//
//
// })
// btnBallLightning.addEventListener('click', () => {
//
//     player2.changeHP(50)
//     let c = count()
//     console.log(`Удар ${c}/6`)
//     if(c === 6)
//     {
//         btnKick.disabled = true
//         btnBallLightning.disabled = true
//     }
// })
// function generateLog(firstPerson, secondPerson, count) {
//     const {name, hp: { current, total} } = firstPerson
//     const{ name: enemyName} = player2
//     const logs = [
//         `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. ${count} [${current} / ${total}]`,
//         `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. ${count} [${current} / ${total}]`,
//         `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} [${current} / ${total}]`,
//         `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. ${count} [${current} / 100]`,
//         `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} [${current} / ${total}]`,
//         `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. ${count} [${current} / ${total}]`,
//         `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. ${count} [${current} / ${total}]`,
//         `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника ${count} [${current} / ${total}]`,
//         `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. ${count} [${current} / ${total}]`,
//         `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. ${count} [${current} / ${total}]`
//     ];
//     return logs[random(logs.length) - 1]
// }
//




