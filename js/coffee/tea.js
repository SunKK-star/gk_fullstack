// 1. 把水煮开
// 2. 用沸水浸泡茶叶
// 3. 把茶水倒进杯子
// 4. 加柠檬

var Tea = function() {

}
Tea.prototype.boilWater = function() {
  console.log('把水煮开');
} 
Tea.prototype.brewTeaGriends = function() {
  console.log('用沸水浸泡茶叶');
}
Tea.prototype.addtocup = function() {
  console.log('把茶水倒进杯子');
}
Tea.prototype.addlemen = function() {
  console.log('加柠檬');
}
Tea.prototype.init = function() {
  this.boilWater();
  this.brewTeaGriends();
  this.addtocup();
  this.addlemen();
}
var tea = new Tea();
tea.init('加糖和牛奶');
