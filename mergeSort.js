// Implementation of mergeSort. The algorithm breaks down the arrays into smaller pieces
// and reconnect them. This is less favorable than quickSort for array sortings
// since it will create extra in each recursive stack. However, this is better in
// linked lists due to not needing for instant accessing of index values.

var mergeSort = (array) => {
  if (array.length === 0 || array.length === 1) return array;
  var mid = Math.floor(array.length/2);
  var left = array.slice(0, mid);
  var right = array.slice(mid, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

// This merge function is the meat of the problem.
// After we get two individual halves, we need to compare the first indices of
// each half. The smaller one will go in first and so on. When both halves are done
// we need to add the leftover onto the res array.

// The 'gotcha' here is that we need to do the concatenation at the end of each
// merge operation. Merge sort is a bit easier to write than quickSort, yet more
// difficult in understanding what's going on.

function merge(left, right) {
  var res = [];
  var l = 0;
  var r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      res.push(left[l++]);
    } else {
      res.push(right[r++]);
    }
  }
  return res.concat(left.slice(l)).concat(right.slice(r));
}
