const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1010 });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
	  console.log("[" + timeConverter(Date.now()) + "]" + data);
    }
  });
};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
		console.log("[" + timeConverter(Date.now()) + "]" + data);
      }
    });
  });
});

	function timeConverter(UNIX_timestamp){
		if (UNIX_timestamp == 0){
			return "N/A";
		}
	  var a = new Date(UNIX_timestamp);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = pad(date,2) + ' ' + pad(month,2) + ' ' + year + ' ' + pad(hour,2) + ':' + pad(min,2);
	  return time;
	}
	
	function pad(num, size) {
		var s = num+"";
		while (s.length < size) s = "0" + s;
		return s;
	}