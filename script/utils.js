 export const random = (num) => {
    return Math.ceil(Math.random() * (num))

}

export const countKickF = () =>{
    let countKick = 1
    return function () {
        return countKick++
    }
}

