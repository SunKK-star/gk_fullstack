let a: string | number;
a = 'fd';
let b: unknown = 'fddf';
// a = b as string
a = <string>b