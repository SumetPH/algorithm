function Min(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const result = Min([2, 3, 1, 0, 10, 9]);
console.log(result);
