const btnKick = document.getElementById('btn-kick')
const btnBallLightning = document.getElementById('btn-ball_lightning')

let fatality = 0

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}

btnKick.addEventListener('click',function () {
    console.log('Kick')
    changeHP(random(15), character)
    changeHP(random(20), enemy)
})
btnBallLightning.addEventListener('click', () => {
    fatality++
    changeHP(50, enemy, fatality)
})

function init() {
    renderHP(character)
    renderHP(enemy)
}

function renderHP(person) {
    renderHPLife(person)
    renderProgressbarHP(person)
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP

}
function renderProgressbarHP(person){
    person.elProgressbar.style.width = person.damageHP + '%'
}

function changeHP(count, person, fatality = 0){
   if(fatality === 1){
       btnBallLightning.disabled = true
   }
    if(person.damageHP <= count){
       person.damageHP = 0
       alert(person.name +' проиграл')
       btnKick.disabled = true
   } else {
       console.log(person.damageHP)
       person.damageHP -= count
   }

    renderHP(person)
}

function random(num){
    return Math.ceil(Math.random() * num)
}


init()