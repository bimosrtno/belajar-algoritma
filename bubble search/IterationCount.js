// tampilkan jumlah perulangan dan tampilkan data dari nilai kecil ke besar

const numbers = [75, 88, 13, 8, 90, 2, 17, 20, 29, 99, 63, 55, 72]
const sortedNumbers = bubbleSort(numbers);

function bubbleSort (numbers) {
    let n = numbers.length;
    let iterationCount = 0;
    for (let i=0; i < n-1; i++) {
        for (let j=0; j < n-i-1; j++) { iterationCount++;
            if (numbers[j]>numbers[j+1]) {
                let temp = numbers[j];
                numbers[j] = numbers [j+1];
                numbers[j+1] = temp;
            }
        }
    }
    console.log('jumlah perulangan: ', iterationCount);
    return numbers;
} 

console.log('urutan kecil ke besar: ', sortedNumbers);
