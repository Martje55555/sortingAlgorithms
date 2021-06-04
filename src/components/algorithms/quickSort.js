export function quickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) {
      return array;
    }
    
    const pivot = array[array.length-1];
    const leftArr = [];
    const rightArr = [];
    for (const el of array.slice(0, array.length-1)){
      el <= pivot ? leftArr.push(el) : rightArr.push(el);
    //   animations.push(["comparison1",el,pivot]); //To colour the compared values
    //   animations.push(["comparison2",el,pivot]); //To take the colours off

      animations.push([el,pivot]); //To colour the compared values
      animations.push([el,pivot]); //To take the colours off
  }

    array = [...quickSortAnimations(leftArr), pivot, ...quickSortAnimations(rightArr)];
    return animations;
    //return [animations, sortArray];

  }



// export const quickSortAnimations = (array) => {
//     const sortingAnimations = [];
//     if (array.length <= 1) return array;

//     //  quickSortRecursive(array, 0, array.length - 1, sortingAnimations);
//     quickSort(array, 0, array.length-1, sortingAnimations);
//     return array;
// };


// function swap(items, leftIndex, rightIndex, sortingAnimations) {
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right, sortingAnimations) {
//     var pivot = items[Math.floor((right + left) / 2)], //middle element
//         i = left, //left pointer
//         j = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j, sortingAnimations); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right, sortingAnimations) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right, sortingAnimations); //index returned from partition

//         sortingAnimations.push(left, index-1);
//         sortingAnimations.push(left, index-1);

//         if (left < index - 1) { //more elements on the left side of the pivot
//             sortingAnimations.push(left, items[index-1]);
//             quickSort(items, left, index - 1, sortingAnimations);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             sortingAnimations.push(right, items[index]);
//             quickSort(items, index, right, sortingAnimations);
//         }
//     }
//     return items;
// }
