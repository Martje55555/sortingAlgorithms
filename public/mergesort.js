export const mergeSortAnimations = (array) => {
    const sortingAnimations = [];
    if (array.length <= 1) return array;
    const temp = array.slice();
    mergeSortHelper(array, 0, array.length - 1, temp, sortingAnimations);
    return sortingAnimations;
}

const mergeSortHelper = (
    array,
    startIndex,
    endIndex,
    temp,
    sortingAnimations
) => {
    if (startIndex === endIndex) return;
    const middle = Math.floor((startIndex + endIndex) / 2)
    mergeSortHelper(temp, startIndex, middle, array, sortingAnimations);
    mergeSortHelper(temp, middle + 1, endIndex, array, sortingAnimations);
    merge(array, startIndex, middle, endIndex, temp, sortingAnimations);
}

const merge = (
    array,
    startIndex,
    middle,
    endIndex,
    temp,
    sortingAnimations
) => {
    let k = startIndex;
    let i = startIndex;
    let j = middle + 1;
    while (i <= middle && j <= endIndex) {
        
        sortingAnimations.push([i, j]);
       
        sortingAnimations.push([i, j]);
        if (temp[i] <= temp[j]) {
          
            sortingAnimations.push([k, temp[i]]);
            array[k++] = temp[i++];
        } else {
          
            sortingAnimations.push([k, temp[j]]);
            array[k++] = temp[j++];
        }
    }
    while (i <= middle) {
       
        sortingAnimations.push([i, i]);
        
        sortingAnimations.push([i, i]);
        
        sortingAnimations.push([k, temp[i]]);
        array[k++] = temp[i++];
    }
    while (j <= endIndex) {
       
        sortingAnimations.push([j, j]);
       
        sortingAnimations.push([j, j]);
      
        sortingAnimations.push([k, temp[j]]);
        array[k++] = temp[j++];
    }
}