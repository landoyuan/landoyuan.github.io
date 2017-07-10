$(document).ready(function(){
  var humanMoves = [];
  var cpuMoves = [];
  var randoMove;
  var level;
  var matched;
  var sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  var sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

$('.start').click(function(){
  startGame();
})

function startGame(){
  humanMoves = [];
  cpuMoves = [];
  level = 0;
  $('#lvl').text(level);
  setTimeout(function(){
    cpuMove();
  },50)
}

function cpuMove() {
  level++;
  $('#lvl').text(level);
  randoMove = Math.floor(Math.random()*4+1);
  cpuMoves.push(randoMove);
  cpuMoves.forEach(function(value,index){
    setTimeout(function(){
      cpuAnimate(value)
    },index*500);
  })
}

function cpuAnimate(num){
  switch (num) {
    case 1:
      sound1.play();
      $('#red').fadeOut(150).fadeIn(150);
      break;
    case 2:
      sound2.play();
      $('#blue').fadeOut(150).fadeIn(150);
      break;
    case 3:
      sound3.play();
      $('#green').fadeOut(150).fadeIn(150);
      break;
    case 4:
      sound4.play();
      $('#yellow').fadeOut(150).fadeIn(150);
      break;
  }
}

$('#red').click(function(){
  humanMoves.push(1)
  sound1.play();
  $('#red').fadeOut(150).fadeIn(150);
  if (humanMoves.length === cpuMoves.length){
    checkAccuracy();
  }
})
$('#blue').click(function(){
  humanMoves.push(2)
  sound2.play();
  $('#blue').fadeOut(150).fadeIn(150);
  if (humanMoves.length === cpuMoves.length){
    checkAccuracy();
  }
})
$('#green').click(function(){
  humanMoves.push(3)
  sound3.play();
  $('#green').fadeOut(150).fadeIn(150);
  if (humanMoves.length === cpuMoves.length){
    checkAccuracy();
  }
})
$('#yellow').click(function(){
  humanMoves.push(4)
  sound4.play();
  $('#yellow').fadeOut(150).fadeIn(150);
  if (humanMoves.length === cpuMoves.length){
    checkAccuracy();
  }
})

function checkAccuracy(){
  matched = cpuMoves.every(function(element,index){
    return element === humanMoves[index];
  });
  if(!matched){
    setTimeout(function(){
      cpuMoves.forEach(function(value, index) {
        setTimeout(function() {
          cpuAnimate(value)
        }, index * 500);
      });
    },1000);
    humanMoves = [];
  }
  else if(level<20){
    humanMoves = [];
    setTimeout(function(){
      cpuMove()
    },800)
  }
  else{
    alert('You win!');
  }
}

});