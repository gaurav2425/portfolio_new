// let arr = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

let arr = [1, 1, 5];

const result = (arr, start, end) => {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  console.log("mid", mid);
  if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) {
    return arr[mid];
  }

  if (arr[mid] == arr[mid - 1]) {
    return result(arr, mid + 1, end);
  } else {
    return result(arr, start, mid - 1);
  }
};

console.log(result(arr, 0, arr.length - 1));

// let start = 0;
// let end = arr.length - 1;

// // let mid=Math.ceil(arr.length);
// // console.log(mid)
// while (start <= end) {
//   console.log("Hello");
//   let mid = Math.floor(arr.length / 2);
//   console.log("mid", mid);
//   //   break;
//   if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) {
//     console.log("ans", arr[mid]);
//     break;
//   }

//   if (arr[mid] == arr[mid - 1]) {
//     console.log();

//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
//   //   return arr[mid];
// }
