var obj = {
    name: 'gk',
    age: 23,
    gender: 'nan',
    das: 'fdf'
};
var Studen = /** @class */ (function () {
    function Studen(name, gender, age) {
        this.gender = gender;
        this._name = name;
        this.age = age;
    }
    Studen.prototype.dayhello = function () {
        console.log(132);
    };
    Object.defineProperty(Studen.prototype, "name", {
        // setGender(gender: string): void {
        //   this._gender = gender
        // }
        // getGender(): string {
        //   return this._gender
        // }
        // ts中设置getter方法
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Studen.prototype, "_age", {
        get: function () {
            return this.age;
        },
        set: function (value) {
            if (value >= 0) {
                this.age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Studen;
}());
var s = new Studen('sd', 'm', 18);
s.name = '孙悟空';
s._age = -1;
console.log(s);
