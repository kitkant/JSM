class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`)
        this.elProgressbar = document.getElementById(`progressbar-${name}`)
    }
}
class Pokemon extends Selectors{
    constructor({name, hp, type, selector }) {
        super(selector)
        console.log(selector+' selector')
        this.name = name
        this.hp = {
            current: hp,
            total: hp,
        }
        this.type = type

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

        this.elProgressbar.style.width = current / (total / 100) + '%'
    }
}

export default Pokemon