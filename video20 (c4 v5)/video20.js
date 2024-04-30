console.log(`#24 Callbacks hay Call Me Later - Chạy Theo Thứ Tự`)

let sum = (a, b, Callbacks) => {
    let tong = a + b;
    // setTimeout(() => {
    //     Callbacks(tong);
    // }, 5000);

    let i = 0;
    let timer = setInterval(() => {
        Callbacks(tong);
        i++;
        if(i === 5){
            clearInterval(timer);
        }
    }, 1000);
}

let printSum = (message) => {
    console.log(`check sum`, message)
}

sum(6, 7, printSum);