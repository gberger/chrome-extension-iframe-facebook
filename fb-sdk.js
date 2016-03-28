(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  // Had to change the '//' below to 'https://', otherwise it would try to load on 'chrome-extension://'
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=260037780834354";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));