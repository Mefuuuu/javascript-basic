console.log(`#25 Tìm Kiếm với Filter/Find Trên Mảng Array Dữ Liệu`)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    {name: 'Mefu', age: 23},
    {name: 'Mef', age: 27},
    {name: 'Meu', age: 24},
    {name: 'Mfu', age: 21},
    {name: 'efu', age: 23}
]
//filter, find

let filter = arr.filter((item, index) => {
    // console.log(`check filter item: `, item, `index: `, index)
    return item && item.age === 23;
})

let find = arr.find((item, index) => {
    return item && item.age === 27;
})

console.log(filter)
console.log(find)