/**
 * 数据结构处理
 */

 // 样例数据
let data = {
    name: 'jack',
    child: [
      { name: 'jack1' },
      {
        name: 'jack2',
        child: [{
          name: 'jack2-1',
          child: { name: 'jack2-1-1' }
        }, {
          name: 'jack2-2'
        }]
      },
      {
        name: 'jack3',
        child: { name: 'jack3-1' }
      }
    ]
}

function findMultiChildPerson(data) {
    let list = [data];
    let nameList = [];
  
    while (list.length > 0) {
      const obj = list.shift();
      if (obj.hasOwnProperty('child')) {
        if (Array.isArray(obj.child)) {
          nameList.push(obj.name);
          list = list.concat(obj.child);
        } else {
          list.push(obj.child);
        }
      }
    }
    return nameList;
  }

  /**
   * 
   * 为什么不能用分号
   * 为什么var定义函数在执行后面不行
   */
function findMultiChildPerson1(data) {
    let nameList = [];

    function tmp(data) {
        if(data.hasOwnProperty('child')) {
            if(Array.isArray(data.child)) {
                nameList.push(data.name)
                data.child.forEach(c=>tmp(c))
            } else {
                tmp(data.child)
            }
        }
    }

    tmp(data);
    return nameList;
}
  
console.log(findMultiChildPerson1(data))
  