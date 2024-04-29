console.log(`#24 Callbacks hay Call Me Later - Chạy Theo Thứ Tự`)

let sum = (a, b, Callbacks) => {
    let tong = a + b;
    setTimeout(() => {
        Callbacks(tong);
    }, 5000);
}

let printSum = (message) => {
    console.log(`check sum`, message)
}

sum(6, 7, printSum);