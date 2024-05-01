console.log(`#28 Sort - Hỗ Trợ Sắp xếp Array Linh Hoạt`)

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log(array2);

// Expected output: Array [1, 100000, 21, 30, 4]

//"built upon converting the elements into strings"

const array1 = [1, 30, 4, 21, 100000];
array1.sort((item1, item2) => {
    return item1 - item2;
})
console.log(array1);

// Expected output: Array [1, 4, 21, 30, 100000]

