
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }

 matrix.map((item, index) => {
   if (index % 2 !== 0) {
     item.reverse();
   }

 });
 let arr = [].concat(...matrix);
 return arr;
}

