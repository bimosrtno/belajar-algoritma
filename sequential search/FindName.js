// cari nama joko dalam array

const names= ['jaka', 'budi', 'joni', 'jaki', 'tono', 'joko', 'jono', 'tohir'];
const target = 'joko';
const result = findName(names, target);

function findName(names, target) 
{ for (let i = 0; i < names.length; i++) {
    if (names[i]===target) {
        return i;
    }
}
  return -1;
}


 if (result === -1) {
    console.log(` nama ${target} tidak ada`);
 } else {
    console.log(`nama ${target} ada di index ${result}`);
 } 