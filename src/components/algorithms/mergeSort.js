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
        // These are the values that we're comparing; we push them once
        // to change their color.
        sortingAnimations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        sortingAnimations.push([i, j]);
        if (temp[i] <= temp[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the temp array.
            sortingAnimations.push([k, temp[i]]);
            array[k++] = temp[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            sortingAnimations.push([k, temp[j]]);
            array[k++] = temp[j++];
        }
    }
    while (i <= middle) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        sortingAnimations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        sortingAnimations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the temp array.
        sortingAnimations.push([k, temp[i]]);
        array[k++] = temp[i++];
    }
    while (j <= endIndex) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        sortingAnimations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        sortingAnimations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        sortingAnimations.push([k, temp[j]]);
        array[k++] = temp[j++];
    }
}