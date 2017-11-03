<img src="https://raw.githubusercontent.com/tobychui/IMUS-WSR/master/wsr_preview.png">
# IMUS-WSR
IMUS WebSocket Reflector(TM), this simple websocket script reflect all your websocket input to all connected client so you can catch the message with JavaScript.

## What is this
This is a simple Node.js script that reflect all your incoming websocket message outward to all connected client.
And it will also log the message on the console too, amazing huh?

## Instllation
1. Download the whole repo as zip, and make sure you have installed Node.js
2. Unzip the nodews.js to C:/ (i.e. The file is now located at C:/nodews.js)
3. Put the bat file in your "startup" folder, so everytime your server bootup, the server will run automatically.
4. Port forward the port 1010 to your server.
5. Create JavaScript in website that catch the incoming message.

## Example Project
For example project, please take a look on my another repo <a href="https://github.com/tobychui/Q-9-Online">HERE</a>
In the remote.php and minput.php, you can see the standard websocket code working with the IMUS Websocket Reflector(TM)

P.S. It is not trademarked. The (TM) is just a part of the project's name. :))
