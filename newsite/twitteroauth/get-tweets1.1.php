<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "dajy";
$notweets = 30;
$consumerkey = "eJy7FjibeEuVVQx7MsYwRA";
$consumersecret = "5e68A6WbHT64X6zqnxPx1JkiVJBBFva1aXQKBdTgrE";
$accesstoken = "81159920-9Gk9ZKdXCvRui6BLedt8hNTxpgMnnncX5tu0gyY4f";
$accesstokensecret = "r95IkPTG3EVn6l853RWLMcvvoAsS5WPafmXMmUdxs";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
  
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>