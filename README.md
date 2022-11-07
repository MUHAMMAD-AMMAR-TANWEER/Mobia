
# How We get feed from Janus TO Webpage?

This project is about getting feed from janus server and make a website for monitoring the cameras on map.
We are using leaflet library for the open street maps (OSM)


We are performing all these steps in our project now lets break it down.
First of all we have a button on the start of the page th


## Documentation

When using Janus features we do the following things:

    1. include the Janus JavaScript library in your web page
    2. initialize the Janus JavaScript library and (optionally) passing its dependencies
    3. connect to the server and create a session
    4. create one or more handles to attach to a plugin (e.g., echo test and/or streaming)
    5. interact with the plugin (sending/receiving messages, negotiating a PeerConnection)
    6. eventually, close all the handles and shutdown the related PeerConnections; 
    7. destroy the session

We are performing all these steps in our project now lets break it down.

    1. First of all we have a button on the start of the page when we click it the server gets 
       intialize and ready to send us feed.
    2. After intialization of server the session is also created
    3. Now we need to provide a username (any id ) to join the session where we can see feed
    4. Once we enter the user id we can see the feed on buttom right of the page
    5. If we want to stop the feed we can stop by the button.
One thing to note is when we will be working with multiple feeds we initilize server and get all feeds from janus but we will show the 
user only those camera feeds which they select and hide rest of the feed because we access all feeds with single session. But this will be implemented in future


Now come to mapping part of the project we are using leaflet libray from where we can easily interact with OSM maps and place mark on selected area.
[leaflet](https://leafletjs.com/)

[For Further details](https://janus.conf.meetecho.com/docs/JS.html)


## Deployment

To deploy this project run

```bash
  cp -r /var/www/html/
  sudo systemctl restart nginx
  
```

