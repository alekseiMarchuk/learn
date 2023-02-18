
firstNumber = " "
secondNumber = " "
mathematicalSign = " "
IsmathematicalSign = false
resolt = 0
// allWrite = ""


document.querySelector('#first').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "1"
        
        
    }else{
        firstNumber += "1"
    }

    document.querySelector('.allWritest').innerHTML += "1"
}

document.querySelector('#second').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "2"
    }else{
        firstNumber += "2"
    }
    document.querySelector('.allWritest').innerHTML += "2"
}

document.querySelector('#third').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "3"
    }else{
        firstNumber += "3"
    }
    document.querySelector('.allWritest').innerHTML += "3"
}

document.querySelector('#fourth').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "4"
    }else{
        firstNumber += "4"
    }
    document.querySelector('.allWritest').innerHTML += "4"
}

document.querySelector('#fifth').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "5"
    }else{
        firstNumber += "5"
    }
    document.querySelector('.allWritest').innerHTML += "5"
}

document.querySelector('#sixth').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "6"
    }else{
        firstNumber += "6"
    }
    document.querySelector('.allWritest').innerHTML += "6"
}

document.querySelector('#seventh').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "7"
    }else{
        firstNumber += "7"
    }
    document.querySelector('.allWritest').innerHTML += "7"
}
document.querySelector('#eighth').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "8"
    }else{
        firstNumber += "8"
    }
    document.querySelector('.allWritest').innerHTML += "8"
}
document.querySelector('#nineth').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "9"
    }else{
        firstNumber += "9"
    }
    document.querySelector('.allWritest').innerHTML += "9"
}
document.querySelector('#zero').onclick = function(){
    
    if(IsmathematicalSign){
        secondNumber += "0"
    }else{
        firstNumber += "0"
    }
    document.querySelector('.allWritest').innerHTML += "0"
}

document.querySelector('#plas').onclick = function(){
    
    IsmathematicalSign = true
    mathematicalSign = "+"
    document.querySelector('.allWritest').innerHTML += " + "

}

document.querySelector('#minus').onclick = function(){
    
    IsmathematicalSign = true
    mathematicalSign = "-"
    document.querySelector('.allWritest').innerHTML += " - "

}

document.querySelector('#multiply').onclick = function(){
    
    IsmathematicalSign = true
    mathematicalSign = "*"
    document.querySelector('.allWritest').innerHTML += " * "

}

document.querySelector('#divide').onclick = function(){
    
    IsmathematicalSign = true
    mathematicalSign = "/"
    document.querySelector('.allWritest').innerHTML += " / "

}


document.querySelector('#itt').onclick = function(){
    
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)

    if(mathematicalSign == "+"){
        resolt = firstNumber + secondNumber
        console.log(resolt);
    }else if(mathematicalSign == "-"){
        resolt = firstNumber - secondNumber
        console.log(resolt);
    }else if(mathematicalSign == "*"){
        resolt = firstNumber * secondNumber
        console.log(resolt);
    }else if(mathematicalSign == "-"){
        resolt = firstNumber - secondNumber
        console.log(resolt);
    } else{
        console.log('Вы что-то не правильно ввели')
    }
    document.querySelector('.allWritest').innerHTML += ` = ${resolt}`
    
    
    
}

document.querySelector('#del').onclick = function(){
    firstNumber = " "
    secondNumber = " "
    mathematicalSign = " "
    IsmathematicalSign = false
    resolt = 0
    document.querySelector('.allWritest').innerHTML = ""
}










// function Write1(numb){
    // a = 0
    // b = 0
    // c = " "
    // d = 0
    // e = " "

    // if(numb == " + "){
    //     c = numb
    // }
    // if(c == " "){
    //     document.querySelector('.firstNumber').innerHTML += numb; 
    // }
    // if(c !== " "){
    //     a = document.querySelector('.firstNumber').innerHTML

    //     document.querySelector('.mathematicalSign').innerHTML += numb; 
    //    return numb;
    // }

    // console.log(a)

    // if(d == " = "){
    //     a = String(a);
    //     numb = String(numb);
    // }
    // console.log(a)
    // console.log(numb)
// }







// if(c == " + "){
// d = a + b
// }if(c == " - "){
// d = a - b
// }if(c == " * "){
// d = a * b
// }if(c == " / "){
// d = a / b
// }



// a = document.querySelector('.firstNumber').innerHTML

// b = document.querySelector('.secondNumber').innerHTML

// c = document.querySelector('.mathematicalSign').innerHTML

// d = document.querySelector('.thisIs').innerHTML









// function Write1(numb){
//     document.querySelector('.firstNumber').innerHTML += numb; 
// }
// function ItIs(that){
//     a = document.querySelector('.firstNumber').innerHTML
//     a = String(a);
//     document.querySelector('.firstNumber').innerHTML += " = "
// }


