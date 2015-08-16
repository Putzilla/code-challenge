//var d = new Date();
//var seconds = d.getTime() / 1000;
//
//oauth_signature =
//oauth_signature_method = HMAC-SHA1;
//oauth_timestamp = seconds;
//oauth_tokenoken = "12615282-GcGhBBLfuZrS4NA3DeFMJ1DMbRskpgfmIlDyqWsy1";
//oauth_version = "1.0";
//


// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
    // All HTML5 Rocks properties support CORS.
    var url = 'https://api.twitter.com/1.1/trends/place.json';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }
    xhr.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="ehQz7k2MqSsQsyqVvozrAFfhI", oauth_nonce="b8668cf81774410e6c5e9ed68c070e28", oauth_signature="n73THgjKBWGstyN3EOL29UxtAWs%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1439767892", oauth_token="12615282-GcGhBBLfuZrS4NA3DeFMJ1DMbRskpgfmIlDyqWsy1", oauth_version="1.0"');

    // Response handlers.
    xhr.onload = function() {
        var text = xhr.responseText;
        var title = getTitle(text);
        alert('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    xhr.send();

    console.log(xhr.status);
}
makeCorsRequest();



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