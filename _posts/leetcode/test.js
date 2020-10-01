a=[1,2,3];
b=[2,3,4];
function common(a, b) {
  ans = [];
  for(let tmp of a) {
    if (b.indexOf(tmp)!==-1) {
      ans.push(tmp)
    }
  }
  return Array.from(new Set(ans));
}
console.log(common(a, b))

a=[1,2,3];
b=[2,3,4];
helper = new Map()
let ans = []
for(let tmp of a) {
  if(a[tmp]!==undefined) {
    a[tmp]+=1;
  }else {
    a[tmp] = 1;
  }
}
for(let tmp of b) {
  if(a[tmp]>0) {
    a[tmp] -= 1;
    ans.push(tmp)
  }
}
console.log(ans)
