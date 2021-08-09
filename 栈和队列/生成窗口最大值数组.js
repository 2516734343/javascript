/**
 * 给定一个数组arr和一个数字w,求出在w长度的窗口里最大的值
 * arr = [4,3,5,4,3,3,6,7]; w = 3
 * [4,3,5],4,3,3,6,7 ===> 5
 * 4,[3,5,4],3,3,6,7 ===>5
 * ....
 * 最终结果为：[ 5, 5, 5, 4, 6, 7 ]
* */

function windowsMax(arr,w) {
    var result = [];
    var str = arr.join('');
    console.log(str);
    for (let i = 0; i <= str.length - w; i++) {
        var arrs= str.substring(i,w+i).split('').map(item => Number(item));
        result.push(Math.max(...arrs));
    }
    return result;
}
var arr = [4,3,5,4,3,3,6,7];
console.log(windowsMax(arr,3));
