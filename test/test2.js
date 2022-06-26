"use strict";
exports.__esModule = true;
var data = {
    a: 'A',
    b: 'B'
};
var a = {
    "a01": "AAA01",
    "a02": "AAA02",
    "a03": "AAA03"
};
var b = {
    "b01": "BBB01",
    "b02": "BBB02",
    "b03": "BBB03"
};
// オブジェクト型を配列にする
var rows = Object.keys(a).map(function (key) {
    return { key: key, value: a[key] };
});
console.log(rows);
console.log(Object.keys(data)); // ["a", "b"]
// キーの列挙型でキーの配列をキャストする
// typeof data は、Dataと同値
console.log(Object.keys(data)); // ["a", "b"]
// 普通は、キーを指定して出力する
console.log(data['a']); // 'A'
console.log(rows[0].value); // 'A'
