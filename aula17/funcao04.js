function fatorial (a) {
    b = a
    while (a!=1) {
        a -= 1
        b = a*b
    }

    return b
}

console.log (fatorial (5))