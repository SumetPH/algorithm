function Insert(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num && arr[i + 1] > num) {
      let temp1 = arr.slice(0, i + 1);
      let temp2 = arr.slice(i + 1);
      temp1.push(num);
      arr = temp1.concat(temp2);
    }
  }
  return arr;
}

const result = Insert([1, 2, 4, 5], 3);
console.log(result);
