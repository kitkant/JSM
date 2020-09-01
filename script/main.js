import Pokemon from "./pokemon.js";
import random from "./utils.js"


const btnKick = document.getElementById('btn-kick')
const btnBallLightning = document.getElementById('btn-ball_lightning')

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selector: 'character'
})
const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selector: 'enemy'
})
console.log(player1)
console.log(player2)

function countKickF() {
    let countKick = 1
    return function () {
        return countKick++
    }
}
let count = countKickF()


btnKick.addEventListener('click',function () {

    player1.changeHP(random(20), function (number) {
        console.log('Урон', number)
        console.log(generateLog(player1, player2, number))
    })
    player2.changeHP(random(20))
    let c = count()
    console.log(`Удар ${c}/6`)
    if(c === 6)
    {
        btnKick.disabled = true
        btnBallLightning.disabled = true
    }


})
btnBallLightning.addEventListener('click', () => {

    player2.changeHP(50)
    let c = count()
    console.log(`Удар ${c}/6`)
    if(c === 6)
    {
        btnKick.disabled = true
        btnBallLightning.disabled = true
    }
})
function generateLog(firstPerson, secondPerson, count) {
    const {name, hp: { current, total} } = firstPerson
    const{ name: enemyName} = player2
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. ${count} [${current} / ${total}]`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. ${count} [${current} / ${total}]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} [${current} / ${total}]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. ${count} [${current} / 100]`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} [${current} / ${total}]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. ${count} [${current} / ${total}]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. ${count} [${current} / ${total}]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника ${count} [${current} / ${total}]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. ${count} [${current} / ${total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. ${count} [${current} / ${total}]`
    ];
    return logs[random(logs.length) - 1]
}




