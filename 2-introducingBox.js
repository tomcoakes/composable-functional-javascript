function Box (x) {
  return {
    map: func => Box(func(x)),
    inspect: () => `Box(${x})`,
    fold: f => f(x)
  }
}

function nextCharForNumberString (str) {
  return Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .fold(i => String.fromCharCode(i))
}

const result = nextCharForNumberString(' 64 ')

console.log('result: ', result)