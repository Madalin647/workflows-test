
function AddNumber(a,b){
  const n = Number(a) + Number(b)
  const number = Number(n.toFixed(0))

  return number
}

module.exports = AddNumber