// let ary = [1, 2, 3, , 4, 4, , 33, 2, 1, 1];
// let newAry = [];
// ary.forEach((item, index) => {
//     if (!newAry.includes(item)) {
//         newAry.push(item)
//     }
// });
// console.log(newAry);

// let ary = [1, 2, 3, , 4, 4, , 33, 2, 1, 1];
// for (var j = 0; j < ary.length; j++) {
//     for (var i = j + 1; i < ary.length; i++) {
//         if (ary[j] == ary[i]) {
//             num = ary.splice(i, 1);
//             // 数组塌陷，j后面的每一项元素都提前了一位
//             j--;

//         }
//     }
// }

// console.log(ary);

// 数组去重比较好的办法
//创建对象
// let m = {};
// var ary = [1, 12, 3, 5, , 64, 4, 3, 3];
// for (i = 0; i < ary.length; i++) {
//     val = ary[i]
//     if (m[val] !== val) {
//         m[val] = val;
//     } else {
//         ary.splice(i, 1);
//         i--;
//     }
// }
// console.log(ary);


// 基于splice删除性能并不好，当前项被删后，每一项索引都要向前提一位，如果后面内容过多，一定影响性能
// 删除方法：把最后一项，替换重复项，并且删除最后一项

// var ary = [1, 12, 3, 5, , 64, 4, 3, 3];
/*
 unique：实现数组去重的方法
 @params
   形参：要去重的数组

  @return 
    返回值去重后的数组

 */

// function unique(ary) {

//     let m = {};
//     for (i = 0; i < ary.length; i++) {
//         val = ary[i]
//         if (m[val] !== val) {
//             m[val] = val;
//         } else {
//             ary[i] = ary[ary.length - 1];
//             ary.splice(ary.length - 1, 1);
//             i--;
//         }
//     }
//     return ary;
// }
// console.log(unique(ary));

// //正则表达式
// let ary = [1, 12, 3, 5, , 64, 4, 3, 3];
// ary.sort((a, b) => a - b);
// let str = ary.join("@") + "@";
// let reg = /(\d+@)\1*/g;
// ary = [];
// str.replace(reg, (n, m) => {
//     m = Number(m.slice(0, m.length - 1));
//     ary.push(m);
// })
// console.log(str.match(reg));
// console.log(str);
// console.log(ary);

// // 基于es6的Set （对应的叫map
// let ary = [1, 12, 3, 5, , 64, 4, 3, 3];
// ary = [...new Set(ary)];
// console.log(ary);

// let str = "dskhkajsakjsa;ldjsklajdsakjdslkj";
//charAt ：根据索引获取指定位置的字符
/*charCodeAt： 获取指定字符的ASCII码值
@params 
  n[number] 获取字符指定的索引

  @return 
  返回查找到的字符
  找不到返回空字符串，或者对应的编码值

 */

// let time = '2019-7-14 12:6:23'
//把时间变为自己想要呈现的格式
//“2019年07月24日 12时06分23秒”
//"2019年07月24日"
//"07/24 12:06"

// 方案一
// time.replace("年", '-').replace("月", '-').replace("日", '-').replace("时", ':').replace("分", ':').replace("秒", ':');
// console.log(time);

// 方案二： 获取到年月日小时分秒这几个值后， 最后想拼成什么效果就拼成什么
// 基于indexOf获取指定位置索引 基于subString一点点截取
// let time = '2019-7-14 12:6:23';
// let n = time.indexOf("-");
// let m = time.lastIndexOf("-");
// let x = time.indexOf(" ");
// let y = time.indexOf(":");
// let z = time.lastIndexOf(":");
// let year = time.substring(0, n);
// let month = time.substring(n + 1, m);
// let day = time.substring(m + 1, x);

// let time = '2019-7-14 12:6:23';
// let n = time.split(' ');
// console.log(n);
// let m = n[0].split('-');
// console.log(m);
// let x = n[1].split(':');
// console.log(x);

// // 正则表达式
// let addZero = val => val.length < 2 ? val = "0" + val : val;
// let time = '2019-7-14 12:6:23';
// let ary = time.split(/(?: |-|:)/g);
// console.log(ary);

// let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';
// /*
// 结果：{
//   lx:1,
//   name:"珠峰",
//   teacher："aaa",
//   HASH:'box
// }
// */
// //获取问号后面的值
// let askIndex = url.indexOf('?');
// let wellIndex = url.indexOf('#');
// let askText = url.substring(askIndex + 1, wellIndex);
// let wellText = url.substring(wellIndex + 1);

// let result = {};
// // 问号后面的值详细处理
// askAry = askText.split("&");
// askAry.forEach(item => {
//     item = item.split('=');
//     result[item[0]] = item[1];

// });
// result['HASH'] = wellText;
// console.log(result);

// let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';
/*
结果：{
  lx:1,
  name:"珠峰",
  teacher："aaa",
  HASH:'box
}
*/
// 可能没有问号，以及#
//获取问号后面的值 
// let askIndex = url.indexOf('?');
// let wellIndex = url.indexOf('#');
// let askText = url.substring(askIndex + 1, wellIndex);
// let wellText = url.substring(wellIndex + 1);

// let result = {};
// // 问号后面的值详细处理
// askAry = askText.split("&");
// askAry.forEach(item => {
//     item = item.split('=');
//     result[item[0]] = item[1];

// });
// result['HASH'] = wellText;
// console.log(result);

// 获取url地址中问号传参的信息和哈希值
/**
 * 
//  * @param {*}
//  *  url 要解析的URL字符串
//  * @return
//  * [object]包含参数和哈希值信息的对象
//  */
// function queryURLParams(url) {
//     let result = {},
//         reg1 = /([^?=&#]+)=([^?=&#]+)/g,
//         reg2 = /#([^?=&#]+)/;
//     url.replace(reg1, (n, x, y) => result[x] = y);
//     url.replace(reg2, (n, x) => result['HASH'] = x);
//     return result;

// }
// console.log(queryURLParams(url));

//验证码