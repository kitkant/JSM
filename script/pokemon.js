class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`)
        this.elProgressbar = document.getElementById(`progressbar-${name}`)
    }
}


function startBnt(control) {
    const btnStart = document.createElement('button')
    btnStart.classList.add('button')
    btnStart.id = 'btn-start'
    btnStart.innerText = 'Start Game'
    control.appendChild(btnStart)
}
function resetBtn(control) {
    const btn = document.createElement('button')
    btn.classList.add('button')
    btn.innerText = 'Reset Game'
    btn.id = 'btn-reset'
    control.appendChild(btn)
}
class Pokemon extends Selectors{
    constructor({name, hp, type, selector, attacks = [] }) {
        super(selector)

        this.name = name
        this.hp = {
            current: hp,
            total: hp,
        }
        this.type = type
        this.attacks = attacks
        this.renderHP()
    }


    changeHP = (count,control, cd) =>{
        this.hp.current -= count
        if(this.hp.current <= count){
            this.hp.current = 0
            control.querySelectorAll('.button').forEach(item=>{
                item.disabled = true
            })
            const allButtons = document.querySelectorAll('.control .button');
            allButtons.forEach($item => $item.remove());
            startBnt(control)
            resetBtn(control)
        }
        this.renderHP()
        cd && cd(count)

    }
    renderHP = () => {

        this.renderHPLife()
        this.renderProgressbarHP()

    }
     renderHPLife = () => {

        this.elHP.innerText = this.hp.current + ' / ' + this.hp.total
    }
     renderProgressbarHP = () => {
         const { hp: {current, total}} = this
        const temp = current / (total / 100)
        this.elProgressbar.style.width = temp + '%'
         if(temp < 20) this.elProgressbar.classList.add('critical')
         if(temp < 90 && temp > 20) this.elProgressbar.classList.add('low')



    }
}

export default Pokemon