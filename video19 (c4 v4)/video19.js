console.log(`#23 Function vs Method - Phân Biệt Hàm và Phương Thức `)

let sum = (a, b) => {
    return a + b;
}

console.log('check sum', sum(9, 6))

let obj = {
    name: 'mefu',
    address: 'hcm',
    getName: function () {
        return this.name;
    }
}

console.log('getName: ', obj.getName())

//function vs method => reuse