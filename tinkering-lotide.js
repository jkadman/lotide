let test = [1 , 2 , 3, 4, 1, 1, 2, 6];
num = {};
for (let tet of test) {
  if (tet === 1) {
    num.bug = 1;
    num.bug++;
  }
}

console.log(num);

// Want to say, each type you find x value in the object return + 1