var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayhelly = function () {
        console.log('person');
    };
    return Person;
}());
var p = new Person('孙悟空', 18);
p.sayhelly();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id) {
        var _this = this;
        console.log(123);
        _this = _super.call(this, name, age) || this;
        _this.id = id;
        return _this;
    }
    // super 表示当前类的父类
    Student.prototype.sayhelly = function () {
        _super.prototype.sayhelly.call(this);
    };
    return Student;
}(Person));
var studet = new Student('ss', 56, 1);
studet.sayhelly();
console.log(studet);
