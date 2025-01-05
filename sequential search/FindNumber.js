// cari nomer 88 di dalam array
const numbers = [22, 13, 21, 88, 87, 85, 91, 16, 82, 25];
const target = 88;
const result = findNumber(numbers, target);

function findNumber(numbers, target) {
    for (let i =0; i < numbers.length; i++) {
        if (numbers [i] === target) {
            return i;
        }
    }
    return -1;
}

if (result === -1) {
    console.log(`nomer ${target} tidak ada`);
} else {
    console.log(`nomer ${target} ada di index ${result}`);
}
