const health = document.querySelector('.health')
class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`)
        this.elProgressbar = document.getElementById(`progressbar-${name}`)
    }
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


    changeHP = (count, cd) =>{
        this.hp.current -= count
        if(this.hp.current <= count){
            this.hp.current = 0

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
         const { hp: {current, total}, elProgressbar} = this
        const temp = current / (total / 100)
        this.elProgressbar.style.width = temp + '%'
         if(temp < 20) this.elProgressbar.classList.add('critical')
         if(temp < 90 && temp > 20) this.elProgressbar.classList.add('low')



    }
}

export default Pokemon