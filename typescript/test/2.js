var obj = {
    name: 'gk',
    age: 23,
    gender: 'nan',
    das: 'fdf'
};
var Studen = /** @class */ (function () {
    function Studen(name, gender, age) {
        this._name = name;
        this._gender = gender;
        this.age = age;
    }
    Studen.prototype.dayhello = function () {
        console.log(132);
    };
    Studen.prototype.setGender = function (gender) {
        this._gender = gender;
    };
    Studen.prototype.getGender = function () {
        return this._gender;
    };
    return Studen;
}());
var s = new Studen('sd', 'm', 18);
s._name = 'swk';
s.setGender('man');
console.log(s.getGender());
