/**
 * const. let等の変数宣言
 */
console.log("--------------------------------------------------");
console.log("               const. let等の変数宣言               ");
console.log("--------------------------------------------------");
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
console.log("---------------------------------------------");
console.log("               テンプレート文字列               ");
console.log("---------------------------------------------");
const myname = "まさや";
const myage = 26;

// 私の名前は「まさや」です。年齢は「28」歳です。
// 従来
const before = "私の名前は" + myname + "です。年齢は" + myage + "歳です。";
console.log("Before : "+before);
// テンプレート文字列
const after = `私の名前は${myname}です。年齢は${myage}歳です。`;
console.log("After  : "+after);



/**
 * アロー関数
 */
console.log("--------------------------------------");
console.log("               アロー関数               ");
console.log("--------------------------------------");
// 従来の関数
function beforeFunc(str) {
  return str;
}
console.log(beforeFunc("hello!!!"));

// アロー関数
const func2 = (str) => {
  return str;
}
console.log(func2("func2です。"));

// returnを省略できる場合
// -> 処理が1行で終わる場合
const func3 = (str) => str;
console.log(func3("func3です。"));

const addNumber = (num1, num2) => num1 + num2;
console.log(`Result: ${addNumber(1,100)}`);



/**
 * 分割代入
 */
console.log("-------------------------------------");
console.log("               分割代入               ");
console.log("-------------------------------------");
const myProfile = {
  name:"Masaya",
  age: 26
};
const message = `My name is ${myProfile.name}. My age is ${myProfile.age}.`;
console.log(message);

const { name, age } = myProfile;
const message2 = `My name is ${name}. My age is ${age}.`;
console.log(message2);

const myArray = ['まさや',26];
const message3 = `Name: ${myArray[0]}, Age: ${myArray[1]}.`;
console.log(message3);
const [ name2, age2 ] = myArray;
const message4 = `Name: ${name2}, Age: ${age2}.`;
console.log(message4);



/**
 * デフォルト値、引数など
 */
console.log("-------------------------------------------------");
console.log("               デフォルト値、引数など               ");
console.log("-------------------------------------------------");
// ↓の場合だと引数が何もないとnameにはundefinedが入る
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello();
// nameの後に=を書いて設定したい値を書く
const sayHello = (name="Guest") => console.log(`こんにちは！${name}さん！`);
sayHello("まさや");



/**
 * スプレッド構文
 */
console.log("------------------------------------------");
console.log("               スプレッド構文               ");
console.log("------------------------------------------");
// 配列の展開
// → 配列の中身を順番に処理してくれる
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 一つにまとめる
const arr2 = [1,2,3,4,5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6.push(100);
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// =で代入すると参照元も更新される。
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);



/**
 * mapやfilterを使った配列の処理
 */
console.log("--------------------------------------------------------");
console.log("               mapやfilterを使った配列の処理               ");
console.log("--------------------------------------------------------");
const nameArr = ['tanaka', 'yamada', 'kemmochi'];
for (let index = 0; index < nameArr.length; index++) {
  const element = nameArr[index];
  console.log(element);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));

nameArr.map((name, index) => console.log(`${index+1}番目は${name}`));

const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {
  return num%2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if(name === "kemmochi") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);



/**
 * 三項演算子
 */
console.log("---------------------------------------");
console.log("               三項演算子               ");
console.log("---------------------------------------");
// ES2015の新しいものではないがReactでよく使う
// 使いすぎると可読性が悪くなる

// ある条件 ? 条件に一致する場合 : 条件に一致しない場合
const val6 = 1 > 0 ? true : false;
console.log(val6);
// if-elseを1行で書ける

const num = 1300;
// console.log(num.toLocaleString()); // 数値型を3桁ごとにカンマつける
const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です'
}
console.log(checkSum(10,10));