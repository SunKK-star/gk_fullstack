// let getArray = <T>(arg: T[]): T[] => {
//   console.log(arg.length);
  
//   return arg
// }

// getArray([1,2,3,5,8])

// let identity = <T>(arg: T): T => {
//   return arg
// }

// let myIdentity: {<T>(arg: T): T} = identity;


// 泛型接口
// interface GenericIdentityFn {
//   <T>(arg: T): T
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn = identity

// interface lengthWise {
//   length: number;
// }

// interface ArrayType {
//   <T extends lengthWise>(arg: T): T
// } 

// let getArray:  ArrayType= <T extends lengthWise>(arg: T): T => {
//   console.log(arg.length);
//   return arg
// }
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn<Number> = identity;

// function getProperty(obj: T, key: K) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// getProperty(x, "m");


