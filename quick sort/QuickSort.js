//urutkan dari kecil ke besar

const numbers = [75, 88, 13, 8, 90, 2, 17, 20, 29, 99, 63, 55, 72];
const sortedNumber = quickSort(numbers);

function quickSort(numbers) {
    if (numbers.length <= 1) {
        return numbers;
    }

    const pivot = numbers [numbers.length -1];
    const left = [];
    const right = [];

    for (let i =0; i < numbers.length -1 ; i++) {
        if (numbers[i] < pivot) { // < untuk lebih kecil > untuk lebih besar
            left.push(numbers[i]); }
            else {
                right.push(numbers[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }

   console.log('urutan kecil ke besar:', sortedNumber);