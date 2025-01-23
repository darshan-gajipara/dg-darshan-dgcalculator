function calculator(num1,num2,opration) {
    if(opration === "+"){
        return (num1+num2)
    }
    if(opration === "-"){
        return (num1-num2)
    }
    if(opration === "*"){
        return (num1*num2)
    }
    if(opration === "/"){
        return (num1/num2)
    }
}
// console.log(calculator(55,5,"/"))
  
  module.exports = calculator