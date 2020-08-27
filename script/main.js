const btnKick = document.getElementById('btn-kick')
const btnBallLightning = document.getElementById('btn-ball_lightning')
const logs = document.querySelector('#logs')

let fatality = 0,
    countRound = 0


const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
    renderHP: renderHP
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
    renderHP: renderHP
}

btnKick.addEventListener('click',function () {

    character.changeHP(random(15))
    enemy.changeHP(random(20))
})
btnBallLightning.addEventListener('click', () => {
    fatality++
    enemy.changeHP(50,  fatality)
})

function generateLog(firstPerson, secondPerson, count, HP) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count} [${HP} / 100]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${count} [${HP} / 100]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} [${HP} / 100]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count} [${HP} / 100]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} [${HP} / 100]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count} [${HP} / 100]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count} [${HP} / 100]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${count} [${HP} / 100]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count} [${HP} / 100]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count} [${HP} / 100]`
    ];


    return logs[random(logs.length) - 1]
}


function init(enemy, character) {

    character.renderHP()
    enemy.renderHP()

}

function renderHP() {

    this.renderHPLife()
    this.renderProgressbarHP()

}

function renderHPLife() {

    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP
}

function renderProgressbarHP(){
    this.elProgressbar.style.width = this.damageHP + '%'
}
function changeHP(count, fatality = 0){
    countRound++

   if(fatality === 1 || this.damageHP <= count){
       btnBallLightning.disabled = true
   }
    if(this.damageHP <= count){
       this.damageHP = 0
       alert(this.name +' проиграл')
       btnKick.disabled = true
   } else {

       this.damageHP -= count
   }

    this.renderHP()
    const log = this === enemy ?  generateLog(this, character, count, this.damageHP) : generateLog( this, enemy, count, this.damageHP)
    const p = document.createElement('p')
    p.innerText = `Удар ${countRound}: ${log}`
    logs.insertBefore(p, logs.children[0])

}

function random(num){
    return Math.ceil(Math.random() * num)
}


init(enemy, character)