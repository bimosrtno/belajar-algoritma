// Urutkan angka dari kecil ke besar menggunakan Merge Sort

const numbers = [3, 10, 21, 1, 18, 9];
const sortedNumbers = mergeSort(numbers);

function mergeSort(numbers) {
    if (numbers.length <= 1) {
        return numbers; 
    }

    // Bagi array jadi dua 
    const middle = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, middle);
    const right = numbers.slice(middle);


    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

console.log('Urutan kecil ke besar:', sortedNumbers);
