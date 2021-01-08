n=16
inputNumber=13
function findOppositeNumber(n,inputNumber) {
    return (inputNumber+n/2)%n
}
console.log(findOppositeNumber(n,inputNumber))
a="xyzydrggff"
b="123434564"
function merge2String(a,b) {
    mergeString=""
    for (let i = 0; i < a.length+b.length; i++) {
        if (i<=a.length-1){
            mergeString+=a[i]
        }
        if (i<=b.length-1){
            mergeString+=b[i]
        }
    }
    return mergeString
}
console.log(merge2String(a,b))