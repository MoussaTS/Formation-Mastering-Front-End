function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  let arrayLeft = [];
  let arrayRight = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? arrayLeft.push(array[i]) : arrayRight.push(array[i]);
  }
  if (arrayLeft.length > 0 && arrayRight.length > 0) {
    console.log(arrayLeft, pivot, arrayRight);
    return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)];
  } else if (arrayLeft.length > 0) {
    console.log(arrayLeft);
    return [...quickSort(arrayLeft), pivot];
  } else {
    console.log(arrayRight);
    return [pivot, ...quickSort(arrayRight)];
  }
}

console.log(quickSort([10, 1, 9, 213, 93, 7, 2600, 42, 533, 934, 328, 400]));
