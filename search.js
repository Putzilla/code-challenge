//var d = new Date();
//var seconds = d.getTime() / 1000;
//
//oauth_signature =
//oauth_signature_method = HMAC-SHA1;
//oauth_timestamp = seconds;
//oauth_tokenoken = "12615282-GcGhBBLfuZrS4NA3DeFMJ1DMbRskpgfmIlDyqWsy1";
//oauth_version = "1.0";
//

$.ajax({
    url: 'https://api.twitter.com/1.1/trends/place.json',
    type: 'GET',
    dataType: 'json',
    contentType: "application/json",
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="ehQz7k2MqSsQsyqVvozrAFfhI", oauth_nonce="b8668cf81774410e6c5e9ed68c070e28", oauth_signature="n73THgjKBWGstyN3EOL29UxtAWs%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1439767892", oauth_token="12615282-GcGhBBLfuZrS4NA3DeFMJ1DMbRskpgfmIlDyqWsy1", oauth_version="1.0"')
    }, success: function(data){
        alert(data);
        //process the JSON data etc
    }
});



function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCNjSr69Fj7brrcuVP6xzrslpYnSw4MA-8');

    search();
}

// Search for a specified string.
function search() {
    var request = gapi.client.youtube.search.list({
        q: 'deadpool trailer',
        part: 'snippet',
        maxResults: 10
    });

    request.execute(function(response) {
        //var str = JSON.stringify(response.result);
        //$('#list-container').html('<pre>' + str + '</pre>');
        console.log(response);
        var resultNumber = response.items.length;
        var i = 0;

        while( i <= resultNumber) {
            $('#list-container').append('<li><a href="https://youtube.com//watch?v=' + response.items[i].id.videoId + '" target="_blank">' + response.items[i].snippet.title + '</a></li>');
            //console.log(response.items[i].snippet.title);
            i++;
        }
    });


}