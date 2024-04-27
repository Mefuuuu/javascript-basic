console.log(`#16 While/Do While Loops - Vòng Lặp While với JS`)
console.log('hello world')
let arrTop4 = ['ManCity', 'Liver', 'MU', 'Chelsea']

for (let i = 0; i < arrTop4.length; i++) {
    console.log('Top ', i + 1, arrTop4[i])
}

let i = 0;
// while (i < arrTop4.length) {
//     console.log('Top ', i + 1, arrTop4[i])
//     i++;
// }

let flag = false;
while (!flag) {
    console.log('print i = ',i)
    i++;
    if (i === 10) {
        flag = true;
    }
}