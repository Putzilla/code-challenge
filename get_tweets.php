<?php

require_once('twitter_proxy.php');

// Twitter OAuth Config options
$oauth_access_token = '12615282-GcGhBBLfuZrS4NA3DeFMJ1DMbRskpgfmIlDyqWsy1';
$oauth_access_token_secret = 'AVimQu3ZCZNcRTS6IYtoMdFm7zJi6jeeDJk7ywweifRWj';
$consumer_key = 'ehQz7k2MqSsQsyqVvozrAFfhI';
$consumer_secret = 'bjOSasehoPuFf6jVpVorodyFhqmjPJ3tCnp81ba1ZcdS7BfQHU';

$twitter_url = 'trends/place.json';

// Create a Twitter Proxy object from our twitter_proxy.php class
$twitter_proxy = new TwitterProxy(
	$oauth_access_token,			// 'Access token' on https://apps.twitter.com
	$oauth_access_token_secret,		// 'Access token secret' on https://apps.twitter.com
	$consumer_key,					// 'API key' on https://apps.twitter.com
	$consumer_secret				// 'API secret' on https://apps.twitter.com
);

// Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);

echo $tweets;

?>