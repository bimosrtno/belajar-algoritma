
// buat fungsi untuk sorting angka 5,3,8.4,2 dengan algoritma sort manual
// tampilkan urutan angka genap dari kecil ke besar dan angka ganjil dari besar ke kecil
// hasil akhir gabungan angka genap di depan dan ganjil di belakang

const numbers = [5,3,8,4,2];

function bubbleSort(numbers , ascending = true) {
    const arr = [...numbers];
    const n = arr.length;
    
    for (let i =0; i <n-1; i++) {
        for (let j=0; j <n-i-1; j++) {
            if ((ascending && arr[j]>arr[j+1] || !ascending && arr[j]<arr[j+1])) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    
    return arr;
 }


//sort number
function sortNumber(numbers) {
    
    const even =[];
    const odd = [];
    
    for (let i=0; i <numbers.length; i++) {
        if (numbers[i]%2 === 0) {
            even.push(numbers[i]);
        } else {
            odd.push(numbers[i]);
        }
    }
    
    const sortedEven = bubbleSort(even, true);
    const sortedOdd = bubbleSort(odd, false);
    
    console.log("angka genap", sortedEven);
    console.log("angka ganjil", sortedOdd);
    
    return [...sortedEven, ...sortedOdd];
}



const result = sortNumber(numbers);
console.log("sudah diurutkan:", result);