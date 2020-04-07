# get-weather
This is a demo code for Invisible

# download
1. Run ```git clone https://github.com/fahmidme/get-weather.git``` in your terminal
2. Navigate to project using ```cd get-weather```
3. Demo using ```node index.js -i "New York" "10005" "Tokyo" "São Paulo" "Pluto"``` where ```i``` is the flag for inputs followed by series of quoted city name or zips

# results
You should get something like

```node index.js -i "New York" "10005" "Tokyo" "São Paulo" "Pluto"

    Weather in Tokyo is broken clouds. Time is 02:12am 07/04/2020.
  

    Could not find São Paulo data.
  

    Weather in 10005 is broken clouds. Time is 02:12am 07/04/2020.
  

    Weather in Pluto is clear sky. Time is 02:12am 07/04/2020.
  

    Weather in New York is broken clouds. Time is 02:12am 07/04/2020.
```

# disclaimer
Yes, I am aware the time is broken. Also, yes I could've done it with just one JS file and much less hassle. However, initiating a Node project with libraries and package file allows for easy scalability.
