
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  const url = tabs[0].url;
  var regex = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/; 
  // get the video id from the url
  var video_id = url.split('v=')[1];
  if(url.match(regex)){
    const p = document.getElementById('yo');
    p.innerHTML = video_id;
  }
  
  // use `url` here inside the callback because it's asynchronous!
});
