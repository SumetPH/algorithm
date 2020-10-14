function Sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const sum = Sum([2, 3, 1, 5, 4]);
console.log(sum);
