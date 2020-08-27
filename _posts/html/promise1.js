var p1 = new Promise(function(resolve,reject){
    resolve(1);
  });
  var p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(2);  
    }, 500);      
  });
  var p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
      reject(3);  
    }, 500);      
  });
  
  console.log(p1);
  console.log(p2);
  console.log(p3);
  setTimeout(function(){
    console.log(p2);
  }, 1000);
  setTimeout(function(){
    console.log(p3);
  }, 1000);
  
  p1.then(function(value){
    console.log(value);
  });
  p2.then(function(value){
    console.log(value);
  });
  p3.catch(function(err){
    console.log(err);
  });
  