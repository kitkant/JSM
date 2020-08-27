const btnKick = document.getElementById('btn-kick')
const btnBallLightning = document.getElementById('btn-ball_lightning')

let fatality = 0


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

   if(fatality === 1){
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
}

function random(num){
    return Math.ceil(Math.random() * num)
}


init(enemy, character)