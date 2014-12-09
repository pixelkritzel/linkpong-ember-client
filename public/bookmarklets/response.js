(function() {
  var title = document.title;
  var url = document.location.href;
  var storeId = window.__LINKPONG.storeId;

  var data = {
      "link":{
        "title":title,
        "url": url,
        "store_id": storeId
    }
  };

  var request = new XMLHttpRequest();
  request.open('POST', 'http://locahost:8080/links', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(data));

  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        alert('Link saved');
      } else if(request.status >= 400) {
        alert('There was an error');
      }
    }
  };
})();