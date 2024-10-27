// // // Majburiy masalalar
// // 1-SAVOL JAVOBI
// function capitalizeName(name, surname) {
//   return (
//     name.charAt(0).toUpperCase() +
//     name.slice(1) +
//     "\n" +
//     surname.charAt(0).toUpperCase() +
//     surname.slice(1)
//   );
// }
// console.log(capitalizeName("javlon", "yusupov"));

// // 2-SAVOL JAVOBI
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Frontend"));
// // 3-SAVOL JAVOBI
// function sumMedium(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return Math.trunc(sum / arg.length);
// }
// let arr = [10, 20, 40, 30];
// console.log(sumMedium(arr));
// // 4-SAVOL JAVOBI
// function arrLength(arg) {
//   return arg.map(function (value) {
//     return value.length;
//   });
// }
// console.log(arrLength(["Asad", "Hoshim"]));
// // 5-SAVOL JAVOBI
// function filter(arg) {
//   return arg.filter(function (value) {
//     return value % 2 == 1;
//   });
// }
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // 6-SAVOL JAVOBI
// function twoObjectMerge(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }
// let obj1 = {
//   name: "John",
//   age: 18,
// };
// let obj2 = {
//   location: "America",
//   phone: "+1 (555) 123-4567",
// };
// console.log(twoObjectMerge(obj1, obj2));
// // 7-SAVOL JAVOBI
// function spacesRemove(str) {
//   return str.replaceAll(" ", "");
// }
// console.log(spacesRemove("   Hello         Frontend       "));
// // 8-SAVOL JAVOBI
// let obj = {
//   name: "John",
//   age: 23,
// };
// function objectToArray(obj) {
//   return Object.values(obj);
// }
// console.log(objectToArray(obj));

// // 9-SAVOL JAVOBI
// function minAndMax(arg) {
//   let min = arg[0];
//   let max = arg[0];
//   for (let i = 0; i < arg.length; i++) {
//     if (min > arg[i]) {
//       min = arg[i];
//     }
//     if (max < arg[i]) {
//       max = arg[i];
//     }
//   }
//   return [min, max];
// }
// console.log(minAndMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // 10-SAVOL JAVOBI
// function countLetter(str) {
//   let count = 0;
//   let A = "aeiou";
//   let res = str.toLowerCase().split("");
//   res.forEach(function (value) {
//     if (A.includes(value)) count++;
//   });
//   return count;
// }
// console.log(countLetter("Frontend"));
// // 11-SAVOL JAVOBI
// function positive2Array(arg) {
//   return arg.map(function (value) {
//     return value + 2;
//   });
// }
// console.log(positive2Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // 12-SAVOL JAVOBI
// function wordLongestArrat(arg) {
//   let res = "";
//   arg.map(function (value) {
//     if (value.length > res.length) {
//       res = value;
//     }
//   });
//   return res;
// }
// console.log(wordLongestArrat(["olma", "banan", "gilos"]));
// // 13-SAVOL JAVOBI
// function array(arg) {
//   let sum = 0;
//   arg.forEach(function (value) {
//     sum += value;
//   });
//   let med = sum / arg.length;
//   let res = arg.filter(function (value) {
//     return value > med;
//   });
//   return res;
// }
// console.log(array([3, 7, 2, 10, 6]));
// // 14-SAVOL JAVOBI
// function stringDelete(str) {
//   return str.slice(1, -1);
// }
// console.log(stringDelete("Najot talim"));
// // 15-SAVOL JAVOBI
// function kvSum(arg) {
//   let sum = 0;
//   arg.map(function (value) {
//     sum += value * value;
//   });
//   return sum;
// }
// console.log(kvSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // 16-SAVOL JAVOBI
// function reverseArray(arg) {
//   let res = [];
//   arg.map(function (value) {
//     res.unshift(arg[value]);
//   });
//   return res;
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));
// // 17-SAVOL JAVOBI
// function uperCaseString(str) {
//   return str
//     .split(" ")
//     .map(function (value) {
//       return value.charAt(0).toUpperCase() + value.slice(1);
//     })
//     .join(" ");
// }
// console.log(uperCaseString("najot talim fergana"));

// // 18-SAVOL JAVOBI
// function filterObj(arr, age) {
//     return arr.filter(function (value) {
//       return value.age > age;
//     });
//   }

//   let obj = [
//     { name: "Hasan", age: 20 },
//     { name: "Murod", age: 25 },
//     { name: "Abdulhay", age: 15 },
//   ];

//   console.log(filterObj(obj, 18));

// // 19-SAVOL JAVOBI
// function includeArray(arr, elt) {
//   return arr.filter(function (value) {
//     return value == elt;
//   });
// }
// console.log(includeArray([1, 2, 3, 4, 5, 6, 7, 1], 1));
// // 20-SAVOL JAVOBI
// function separateString(str1, str2) {
//   return str1
//     .split("")
//     .filter(function (value) {
//       return str2.includes(value);
//     })
//     .join("");
// }

// console.log(separateString("Najot ta'lim", "Frontend reactJS"));
