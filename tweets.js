$(function(){

	$.ajax({
		url: 'get_tweets.php',
		type: 'GET',
		success: function(response) {
			console.log(response);
			var resultNumber = response[0].trends.length;
			var i = 0;
			console.log(resultNumber);

			while( i <= resultNumber ) {
				$('#trends-container').append('<li>' + response[0].trends[i].name + '</li>');
				i++;
			}


		},
		error: function(errors) {
			$('.tweets-container p:first').text('Request error');
			console.log(errors);
		}
	});
});