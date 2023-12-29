// code your solution here




function saturdayFun( message = "roller-skate"){
    return `This Saturday, I want to ${message}!`;
}
console.log(saturdayFun())  //hoisting function calling before delclaration 


function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(initialized = "*") {
    return function(adjective= "a hard worker") {
        return `You are ${initialized}${adjective}${initialized}!`;
    };

    function fn(initialized = "||") {
        return function(adjective= "a dedicated programmer") {
        return `You are ${initialized}${adjective}${initialized}!`;
    }
   
    
    }
}





