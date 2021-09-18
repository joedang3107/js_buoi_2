// generator

function makeIterator () {

}

// yeild


function* idMaker () {
    let index = 0
    yield index++
    yield index++
    yield index++
    yield index++
}

var genId = idMaker()
while (true) {
    let next = genId.next()
    if (next.done) {
        break
    }
    console.log(next.value);
}