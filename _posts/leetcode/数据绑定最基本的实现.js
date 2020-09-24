// 实现一个方法，可以给 obj 所有的属性添加动态绑定事件，当属性值发生变化时会触发事件
/**
 * this指向obj
 * this.value是该属性对应的值，如果写成obj[key]会造成循环调用
 */
let obj = {
    key_1: 1,
    key_2: 2
  }
  function func(key) {
    console.log(key + ' 的值发生改变：' + this[key]);
  }
//   bindData(obj, func);
//   obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
//   obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"

var bindData = function(obj, func) {
    for (let key in obj) {
        Object.defineProperty(obj, key, {
            get() {
                return this.value;
            },
            set(newValue) {
                if (this.value !== newValue){
                    this.value = newValue;
                    func.call(obj, key)
                }
            }
        })
    }
}

bindData(obj, func);
obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"