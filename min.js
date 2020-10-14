function Min(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const result = Min([2, 3, 1, 0, 10, 9]);
console.log(result);
