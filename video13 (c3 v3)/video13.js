console.log(`#17 If/Else statement. Break & Continue`)
console.log('hello world')

let arrTop4 = ['Liver', 'Chelsea', 'Mu', 'Mancity']

let i = 0;
while (i < arrTop4.length) {
    i++;
    if (arrTop4[i] === 'Chelsea') {
        console.log('check it: ', i + 1, arrTop4[i])
        continue;
    }
    console.log('check i =', i)
}

let j = 0;
while (j < arrTop4.length) {
    if (arrTop4[j] === 'Chelsea') {
        console.log('check it: ', j + 1, arrTop4[j])
        break;
    }
    console.log('check j =', j)
    j++;
} 