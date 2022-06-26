export{}

type Data = {
  a: string,
  b: string,
};
const data: Data = {
  a: 'A',
  b: 'B',
};

type Cfg1 = {
  "a01": string;
  "a02": string;
  "a03": string;
}

type Cfg2 = {
  "b01": string;
  "b02": string;
  "b03": string;
}

const a :Cfg1 = {
  "a01": "AAA01",
  "a02": "AAA02",
  "a03": "AAA03"
}

const b :Cfg2 = {
  "b01": "BBB01",
  "b02": "BBB02",
  "b03": "BBB03"
}

// オブジェクト型を配列にする
const rows = (Object.keys(a) as (keyof typeof a)[]).map((key) => {
  return { key, value: a[key] }
});
console.log(rows); 


// オブジェクト型を配列にする
// const rows = (Object.keys(data) as (keyof typeof data)[]).map((key) => {
//   return { key, value: data[key] }
// });

// console.log(rows); 
// [{
//  "key": "a",
//  "value": "A"
// }, {
//  "key": "b",
//  "value": "B"
// }] 

// 挙動の確認
type dataType = keyof Data; // 'a'|'b'
console.log(Object.keys(data)); // ["a", "b"]
// キーの列挙型でキーの配列をキャストする
// typeof data は、Dataと同値
console.log(Object.keys(data) as (keyof typeof data)[]); // ["a", "b"]

// 普通は、キーを指定して出力する
console.log(data['a']); // 'A'
console.log(rows[0].value); // 'A'