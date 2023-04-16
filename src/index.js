/**
 * const. let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "val変数は上書き可能";
console.log(val1);

// varは再宣言可能
var val1 = "varを再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数は上書き可能";
console.log(val2);

// letは再宣言できない
// let val2 = "letを再宣言";

const val3 = "const変数";
console.log(val3);

// constは上書き不可能
// val3 = "constを上書き";

// const val3 = "constを再宣言";

// constで定義してもオブジェクトならプロパティを変更可能
const val4 = {
  name: "なまえ",
  age: 30,
};
console.log(val4);
val4.name = "ナマエ";
console.log(val4);

// 新しいプロパティを追加は可能
val4.address = "Tokyo";
console.log(val4);

// constで定義しても配列ならプロパティを変更可能
const val5 = ["dog", "cat"];
console.log(val5);
val5[0] = "bird";
console.log(val5);
val5.push("monkey");
console.log(val5);


/**
 * テンプレート文字列
 */
// 文字列の中にJsの変数を埋め込める
const myname = "まさや";
const myage = 26;

// 私の名前は「まさや」です。年齢は「28」歳です。
// 従来
const before = "私の名前は" + myname + "です。年齢は" + myage + "歳です。";
console.log("Before : "+before);
// テンプレート文字列
const after = `私の名前は${myname}です。年齢は${myage}歳です。`;
console.log("After  : "+after);