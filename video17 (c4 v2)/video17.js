console.log('#21 RETURN - ĐI ĐI ĐỂ TRỞ VỀ với JS')

function mefuFunc(x, y, i) {

    console.log('1')
    console.log('11')
    console.log('111')
    if (i === 5) return 0;

    console.log('1111')
    console.log('111111')
    return x + y;
}

console.log('check sum: ', mefuFunc(5, 6, 5))