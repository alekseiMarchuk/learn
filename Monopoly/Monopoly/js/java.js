// какое событие произойдёт будет влиять от внутнреннего числа, в зависимости от клетки, на которой расположены игроки. 

// если игрок приобретает улицу, комунальные услуги, или что-то ещё, на клетке появляется эмблема игрока

// экран разделён на двоих участников, у каждого свои настройки могут быть

// при покупке есть эффекты типа звука кассового аппарата, звука поезда, зажигания лампы, или воды из под крана(до покупки лампочка не горит, а вода из под крана не течёт)

// игрок нажимает на карточку, она постепенно подлетает к нему и увеличивается. вторым щелчком игрок открывает карточку, и она одновременно поворачивается.

// чтобы купить или продать имущество, либо взять деньги в долг(на определённое количество ходов, или неопределённое), игрокам нужно зажать одновременно клавиши левый контрл и правый контрл, и две кнопки мыши (первый зажимает правый ctrl и пкм, второй левые)
// Также обязательно должно быть подобие загрузки, панель загрузки, типа совершение сделки на несколько секунд(может быть заполнение, например деньгами, но хз). А до этого должны быть кнопки совершить сделку и отмена. Эта функция доступна на нижней части экрана

// Посередине должен стоять переключатель, стрелка, которая показывает на правого или левого игрока. В начале она показывает на верх, поэтому в самом начале на её нужно нажать. Она провернётся и укажет кто должен ходить первым.

// Не забыть про то, что три дуплета = тюрьма

// Если попал в тюрьму, номер её клетки = -1. При выходе, помимо шагов кубика, будет прибавляться 1.

// !!1!11 padding: ... ; Возможно поможет сделать так, чтобы борд не ломался


firstBone = 0
secondBone = 0
res = 0

FirstPlayerMove = 0
SecondPlayerMove = 0

IsFirstPlayer = true

PlayerFirstName = "Игрок слева"
PlayerSecondName = "Игрок справа"



function Click(){

  setTimeout(function Click() {
            
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
              
    firstBone = getRandomIntInclusive(1, 6)
    secondBone = getRandomIntInclusive(1, 6)
        
    if(firstBone == 1){
      document.querySelector("#firstDice").src = "/home/alex/github/Monopoly/Monopoly/img/arrow.png"
    }if(firstBone == 2){
      document.querySelector('#firstDice').innerHTML = "2"
    }if(firstBone == 3){
      document.querySelector('#firstDice').innerHTML = "3"
    }if(firstBone == 4){
      document.querySelector('#firstDice').innerHTML = "4"
    }if(firstBone == 5){
      document.querySelector('#firstDice').innerHTML = "5"
    }if(firstBone == 6){
      document.querySelector('#firstDice').innerHTML = "6"
    }
        
     
    // if(firstBone == 1){
    //   document.querySelector("#firstDice").src = "/home/alex/github/Monopoly/Monopoly/img/bone1.png"
    // }if(firstBone == 2){
    //   document.querySelector("#firstDice").src = "/home/alex/github/Monopoly/Monopoly/img/bone2.png"
    // }if(firstBone == 3){
    //   document.querySelector("#firstDice").src = "/home/alex/github/Monopoly/Monopoly/img/bone3.png"
    // }if(firstBone == 4){
    //   document.querySelector("#firstDice").src = "/home/alex/github/Monopoly/Monopoly/img/bone4.png"
    // }if(firstBone == 5){
    //   document.querySelector("#firstDice").src = "/home/alex/github/Monopoly/Monopoly/img/bone5.png"
    // }if(firstBone == 6){
    //   document.querySelector("#firstDice").src = "/home/alex/github/Monopoly/Monopoly/img/bone6.png"
    // }
        




    if(secondBone == 1){
      document.querySelector('#secondDice').innerHTML = "1"
    }if(secondBone == 2){
      document.querySelector('#secondDice').innerHTML = "2"
    }if(secondBone == 3){
      document.querySelector('#secondDice').innerHTML = "3"
    }if(secondBone == 4){
      document.querySelector('#secondDice').innerHTML = "4"
    }if(secondBone == 5){
      document.querySelector('#secondDice').innerHTML = "5"
    }if(secondBone == 6){
      document.querySelector('#secondDice').innerHTML = "6"
    }
    
    document.querySelector('#sum').innerHTML = firstBone + secondBone


    sum = document.querySelector('#sum').innerHTML
    sum = Number(sum)

    if(IsFirstPlayer){
      FirstPlayerMove += sum

      if(FirstPlayerMove >= 40){
        FirstPlayerMove = FirstPlayerMove - 40
      }
      document.querySelector('#FirstPlayerMoveHTML').innerHTML = FirstPlayerMove
    }else{
      SecondPlayerMove += sum

      if(SecondPlayerMove >= 40){
        SecondPlayerMove = SecondPlayerMove - 40
      }
      document.querySelector('#SecondPlayerMoveHTML').innerHTML = SecondPlayerMove
    }
    
    




    }, 400);


    document.querySelector('#firstDice').innerHTML = ""
    document.querySelector('#secondDice').innerHTML = ""
    document.querySelector('#sum').innerHTML = "?"
        
   
}

function ClickArrow(){
  if(IsFirstPlayer){
    IsFirstPlayer = false
    document.getElementsByClassName('arrow')[0].style.transform = "rotate(0deg)";
  }else{
    IsFirstPlayer = true
    document.getElementsByClassName('arrow')[0].style.transform = "rotate(180deg)";
    
  }

}
