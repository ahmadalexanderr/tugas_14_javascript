const ceilOp = (dateBirth) => {
    return Math.ceil(37/dateBirth)
}

const floorOp = (dateBirth) => {
    return Math.floor(37/dateBirth)
}

const roundOp = (dateBirth) => {
    return Math.round(37/dateBirth)
}

let x = 9
console.log(roundOp(x)) //round
console.log(ceilOp(x)) //ceil
console.log(floorOp(x)) //flor


