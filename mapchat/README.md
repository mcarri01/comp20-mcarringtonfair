README for Assignment 2, Mapchat
Total hours - 12 hours

Resources -
Examples

https://github.com/tuftsdev/WebProgramming/tree/gh-pages/examples/google_maps

https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map

Example on changing marker color -
http://chrisltd.com/blog/2013/08/google-map-random-color-pins/

Help on using multiple markers -
http://wrightshq.com/playground/placing-multiple-markers-on-a-google-map-using-api-3/

Using the Haversine formula -
http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript

This project uses the Google Maps API to pinpoint various locations of individuals on a map. It contains index.html, which includes the various javascript functions to initialize the map, send data to the server, and to add everyone's information on markers on the map. The most difficult part was handling the response data and the use of multiple markers, as the previous way in which I placed the marker for myself with my information wasn't the best for doing the same with everyone. Ultimately this final product takes my information (login, location, and message) and sends it to a remote server which in response returns the same information of others in my class. This information is then put into markers and placed at everyone's geolocation on the map.
