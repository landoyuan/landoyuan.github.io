$(document).ready(function(){
	var seconds = 30;
	var numberPlayers = 4;
	var player1;
	var player2;
	var player3;
	var player4;
	var player5;
	var player6;
	var player7;
	var player8;
	var playerArray=[];
	var playerArray2=[];
	var sound1 = new Audio("cheers.wav");

	$('#plus').click(function(){
		if(numberPlayers<8){
			numberPlayers++;
			$('#numberPlayers').text(numberPlayers);
		}

	})
	$('#minus').click(function(){
		if(numberPlayers>1){
			numberPlayers--;
			$('#numberPlayers').text(numberPlayers);
		}
	})

	$('#next1').click(function(){
		$('.choosenumber').css('display','none');
    	$('.playerNames').css('display','block');
    	$('.playerList').html('');
    	for(i=1;i<numberPlayers+1;i++){
    		$('.playerList').append('Player ' + i+':<input type="text" id="player'+i+'"><br>')
    	}
	})

	$('#playerSubmit').click(function(){
		player1 = $('#player1').val();
		player2 = $('#player2').val();
		player3 = $('#player3').val();
		player4 = $('#player4').val();
		player5 = $('#player5').val();
		player6 = $('#player6').val();
		player7 = $('#player7').val();
		player8 = $('#player8').val();
		playerArray.push(player1);
		playerArray.push(player2);
		playerArray.push(player3);
		playerArray.push(player4);
		playerArray.push(player5);
		playerArray.push(player6);
		playerArray.push(player7);
		playerArray.push(player8);
		playerArray2 = playerArray.filter(Boolean);
		$('.playerNames').css('display','none');
		$('.clock').css('display','block');
		counting = setInterval(countdown, 1000);
	})

	function countdown(){
		if(seconds === 0){
			var random = Math.floor(Math.random()*numberPlayers + 1);
			$('#theChosen').text(playerArray2[random]);
			$('#theChosen').fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
			sound1.play();
			seconds = 30;
			$('#countdown').html("00:" + seconds);
		}
		else if(seconds === 30){
			seconds--;
			$('#countdown').html("00:" + seconds);
		}
		else if(seconds <= 10){
			seconds--;
			$('#countdown').html("00:0" + seconds);
   		}
   		else {
   			seconds--;
   			$('#countdown').html("00:" + seconds);
   		}
	}
})