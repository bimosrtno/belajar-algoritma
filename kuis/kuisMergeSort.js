//urutkan data dari kecil ke besar
//tampilkan 19 ada di index berapa
//gunakan merge sort dan sequential search

const numbers = [42, 17, 33, 8, 19, 4, 29, 25];
const target = 19;
const sortedNumbers = mergeSort(numbers);
const result = sequentialSearch(numbers, target);

function mergeSort(numbers) {
    if (numbers.length <=1) {
        return numbers; 
    }

    const middle = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, middle);
    const right = numbers.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

    }

    function merge(left,right) {
        const result = [];
        
        //bagi jadi 2
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
        return [...result,...left.slice(leftIndex),...right.slice(rightIndex)];
    }
    
    function sequentialSearch(numbers, target) { 
        for (let i=0; i<numbers.length; i++) {
            if (numbers[i] === target) {
                return i;
            }
        }
        return -1;
    
    }

//output
console.log(`urutan kecil ke besar: ${sortedNumbers}`);
console.log(`nomor ${target} ada di index ${result}`);