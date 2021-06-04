// export function quickSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) {
//       return array;
//     }
    
//     const pivot = array[array.length-1];
//     const leftArr = [];
//     const rightArr = [];
//     for (const el of array.slice(0, array.length-1)){
//       el <= pivot ? leftArr.push(el) : rightArr.push(el);
//     //   animations.push(["comparison1",el,pivot]); //To colour the compared values
//     //   animations.push(["comparison2",el,pivot]); //To take the colours off

//       animations.push(["first",el,pivot]); //To colour the compared values
//       animations.push(["second",el,pivot]); //To take the colours off
//   }
 
//     const sortArray = [...quickSortAnimations(leftArr), pivot, ...quickSortAnimations(rightArr)];
//     //return sortArray;
//     return [animations, sortArray];

//   }
function compare(a/*: number*/, b/*: number*/)/*: ['compare', number, number]*/ {
  return ['compare', a, b];
}
function swap(a/*: number*/, b/*: number*/)/*: ['swap', number, number]*/ {
  return ['swap', a, b];
}

export function* quickSort(from/*: number*/, to/*: number*/)/*: Generator<['swap' | 'compare', number, number], void, number> */ {
	if(to - from <= 1) {
		return; // An array with the length of 1 or smaller is always sorted
	}
	// Pick pivot
	const pivot = to - 1;
	// Partition
	let i = from;
	for(let j = from; j < to; j++) {
		if((yield compare(j, pivot)) < 0) {
			yield swap(i, j);
			i++;
		}
	}
	yield swap(i, pivot)
	yield* quickSort(from, i);
	yield* quickSort(i + 1, to);
}