function array(value) {
    const result = value.map(el => {
        const newArr= ""
        return el += newArr
    })
    const split = result[3].split(',')
    result.pop()
    console.log(result ,split.join(' '))
}

array(["Hallo", "nama", "saya",["Mega", "sukmawati", ["kelas",["Xl", ["RPL", "1"]]]]])