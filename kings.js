$(document).ready(function(){
  var array1 = [];
  var kings = 4;
  var card;
  generateDeck = function(){
    for(i=1;i<53;i++){
      array1.push(i);
    }
  }
  generateDeck();
  $('button').click(function(){
    var random = Math.floor(Math.random()*array1.length+1);
    card = array1[random];
    if(card===1){
      $('#card').html('ACE &#x2663');
      $('#rule').text('Waterfall');
      $('#explanation').text('Everyone drinks in sequence.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===2){
      $('#card').html('2 &#x2663');
      $('#rule').text('You');
      $('#explanation').text('Pick someone to drink.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===3){
      $('#card').html('3 &#x2663');
      $('#rule').text('Me');
      $('#explanation').text('You drink.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===4){
      $('#card').html('4 &#x2663');
      $('#rule').text('Whores');
      $('#explanation').text('Ladies drink.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===5){
      $('#card').html('5 &#x2663');
      $('#rule').text('Bust a jive');
      $('#explanation').text('Bust a dance move. Next person copies + adds a move.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===6){
      $('#card').html('6 &#x2663');
      $('#rule').text('Dicks');
      $('#explanation').text('Gents drink.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===7){
      $('#card').html('7 &#x2663');
      $('#rule').text('Heaven');
      $('#explanation').text('Touch the sky. Last one to raise hand, drinks.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===8){
      $('#card').html('8 &#x2663');
      $('#rule').text('Pick a mate');
      $('#explanation').text('Pick someone. They drink everytime you drink.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===9){
      $('#card').html('9 &#x2663');
      $('#rule').text('Bust a rhyme');
      $('#explanation').text('Pick a word. Everyone takes turns rhyming that word.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===10){
      $('#card').html('10 &#x2663');
      $('#rule').text('Categories');
      $('#explanation').text('Pick a category. Everyone names something in that category.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===11){
      $('#card').html('JACK &#x2663');
      $('#rule').text('Never have I ever');
      $('#explanation').text('Everyone raises 3 fingers. Play never have I ever.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===12){
      $('#card').html('QUEEN &#x2663');
      $('#rule').text('Question');
      $('#explanation').text('Only speak in questions for the turn.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===13){
      $('#card').html('KINGS &#x2663');
      $('#rule').text('Kings Cup');
      $('#explanation').text('Make up a rule. Pour some drink into center cup.');
      $('#card').css('color','#008744');
      $('#rule').css('color','#008744');
      $('#explanation').css('color','#008744');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
      kings--;
      $('.kingsleft').text(kings);
      if(kings===0){
        alert('Bottoms up!')
      }
    }
    if(card===14){
      $('#card').html('ACE &#x2666');
      $('#rule').text('Waterfall');
      $('#explanation').text('Everyone drinks in sequence.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===15){
      $('#card').html('2 &#x2666');
      $('#rule').text('You');
      $('#explanation').text('Pick someone to drink.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===16){
      $('#card').html('3 &#x2666');
      $('#rule').text('Me');
      $('#explanation').text('You drink.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===17){
      $('#card').html('4 &#x2666');
      $('#rule').text('Whores');
      $('#explanation').text('Ladies drink.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===18){
      $('#card').html('5 &#x2666');
      $('#rule').text('Bust a jive');
      $('#explanation').text('Bust a dance move. Next person copies + adds a move.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===19){
      $('#card').html('6 &#x2666');
      $('#rule').text('Dicks');
      $('#explanation').text('Gents drink.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===20){
      $('#card').html('7 &#x2666');
      $('#rule').text('Heaven');
      $('#explanation').text('Touch the sky. Last one to raise hand, drinks.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===21){
      $('#card').html('8 &#x2666');
      $('#rule').text('Pick a mate');
      $('#explanation').text('Pick someone. They drink everytime you drink.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===22){
      $('#card').html('9 &#x2666');
      $('#rule').text('Bust a rhyme');
      $('#explanation').text('Pick a word. Everyone takes turns rhyming that word.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===23){
      $('#card').html('10 &#x2666');
      $('#rule').text('Categories');
      $('#explanation').text('Pick a category. Everyone names something in that category.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===24){
      $('#card').html('JACK &#x2666');
      $('#rule').text('Never have I ever');
      $('#explanation').text('Everyone raises 3 fingers. Play never have I ever.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===25){
      $('#card').html('QUEEN &#x2666');
      $('#rule').text('Question');
      $('#explanation').text('Only speak in questions for the turn.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===26){
      $('#card').html('KINGS &#x2666');
      $('#rule').text('Kings Cup');
      $('#explanation').text('Make up a rule. Pour some drink into center cup.');
      $('#card').css('color','#d62d20');
      $('#rule').css('color','#d62d20');
      $('#explanation').css('color','#d62d20');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
      kings--;
      $('.kingsleft').text(kings);
      if(kings===0){
        alert('Bottoms up!')
      }
    }
    if(card===27){
      $('#card').html('ACE &#x2665');
      $('#rule').text('Waterfall');
      $('#explanation').text('Everyone drinks in sequence.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===28){
      $('#card').html('2 &#x2665');
      $('#rule').text('You');
      $('#explanation').text('Pick someone to drink.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===29){
      $('#card').html('3 &#x2665');
      $('#rule').text('Me');
      $('#explanation').text('You drink.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===30){
      $('#card').html('4 &#x2665');
      $('#rule').text('Whores');
      $('#explanation').text('Ladies drink.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===31){
      $('#card').html('5 &#x2665');
      $('#rule').text('Bust a jive');
      $('#explanation').text('Bust a dance move. Next person copies + adds a move.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===32){
      $('#card').html('6 &#x2665');
      $('#rule').text('Dicks');
      $('#explanation').text('Gents drink.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===33){
      $('#card').html('7 &#x2665');
      $('#rule').text('Heaven');
      $('#explanation').text('Touch the sky. Last one to raise hand, drinks.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===34){
      $('#card').html('8 &#x2665');
      $('#rule').text('Pick a mate');
      $('#explanation').text('Pick someone. They drink everytime you drink.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===35){
      $('#card').html('9 &#x2665');
      $('#rule').text('Bust a rhyme');
      $('#explanation').text('Pick a word. Everyone takes turns rhyming that word.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===36){
      $('#card').html('10 &#x2665');
      $('#rule').text('Categories');
      $('#explanation').text('Pick a category. Everyone names something in that category.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
    }
    if(card===37){
      $('#card').html('JACK &#x2665');
      $('#rule').text('Never have I ever');
      $('#explanation').text('Everyone raises 3 fingers. Play never have I ever.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===38){
      $('#card').html('QUEEN &#x2665');
      $('#rule').text('Question');
      $('#explanation').text('Only speak in questions for the turn.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===39){
      $('#card').html('KINGS &#x2665');
      $('#rule').text('Kings Cup');
      $('#explanation').text('Make up a rule. Pour some drink into center cup.');
      $('#card').css('color','#ffa700');
      $('#rule').css('color','#ffa700');
      $('#explanation').css('color','#ffa700');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
      kings--;
      $('.kingsleft').text(kings);
      if(kings===0){
        alert('Bottoms up!')
      }
    }
    if(card===40){
      $('#card').html('ACE &#x2660');
      $('#rule').text('Waterfall');
      $('#explanation').text('Everyone drinks in sequence.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===41){
      $('#card').html('2 &#x2660');
      $('#rule').text('You');
      $('#explanation').text('Pick someone to drink.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===42){
      $('#card').html('3 &#x2660');
      $('#rule').text('Me');
      $('#explanation').text('You drink.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===43){
      $('#card').html('4 &#x2660');
      $('#rule').text('Whores');
      $('#explanation').text('Ladies drink.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===44){
      $('#card').html('5 &#x2660');
      $('#rule').text('Bust a jive');
      $('#explanation').text('Bust a dance move. Next person copies + adds a move.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===45){
      $('#card').html('6 &#x2660');
      $('#rule').text('Dicks');
      $('#explanation').text('Gents drink.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===46){
      $('#card').html('7 &#x2660');
      $('#rule').text('Heaven');
      $('#explanation').text('Touch the sky. Last one to raise hand, drinks.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===47){
      $('#card').html('8 &#x2660');
      $('#rule').text('Pick a mate');
      $('#explanation').text('Pick someone. They drink everytime you drink.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===48){
      $('#card').html('9 &#x2660');
      $('#rule').text('Bust a rhyme');
      $('#explanation').text('Pick a word. Everyone takes turns rhyming that word.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===49){
      $('#card').html('10 &#x2660');
      $('#rule').text('Categories');
      $('#explanation').text('Pick a category. Everyone names something in that category.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===50){
      $('#card').html('JACK &#x2660');
      $('#rule').text('Never have I ever');
      $('#explanation').text('Everyone raises 3 fingers. Play never have I ever.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===51){
      $('#card').html('QUEEN &#x2660');
      $('#rule').text('Question');
      $('#explanation').text('Only speak in questions for the turn.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
    }
    if(card===52){
      $('#card').html('KINGS &#x2660');
      $('#rule').text('Kings Cup');
      $('#explanation').text('Make up a rule. Pour some drink into center cup.');
      $('#card').css('color','#0057e7');
      $('#rule').css('color','#0057e7');
      $('#explanation').css('color','#0057e7');
      array1.splice(array1.indexOf(card),1);
      $('.remaining').text(array1.length);
      kings--;
      $('.kingsleft').text(kings);
      if(kings===0){
        alert('Bottoms up!')
      }
    }
  })
})