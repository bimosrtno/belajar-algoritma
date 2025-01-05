// urutkan data dari kecil ke besar
const numbers = [22, 13, 21, 88, 87, 85, 91, 16, 82, 25];
const sortedNumbers = bubbleSort(numbers);

function bubbleSort(numbers) {
    let n = numbers.length;
    for (let i=0; i < n-1; i++) {
        for (let j=0; j < n-i-1; j++) {
            if (numbers[j] > numbers[j+1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers [j+1] = temp;
            }
        }
    }

    return numbers;
}

console.log('urutan kecil ke besar: ', sortedNumbers); 