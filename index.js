const baseArray = ["Milo", "Otis", "Garfield"]

const append = [...baseArray]
append.push('Odie')

const prepend = [...baseArray]
prepend.unshift('Odie')

const removeLast = [...baseArray]
removeLast.pop()

const removeFirst = [...baseArray]
removeFirst.shift()