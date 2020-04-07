require('dotenv').config()
const fetch = require('node-fetch');
const moment = require('moment');
const argv = require('yargs').array('i').argv

const isLocationZip = location => !isNaN(location)
const getURL = location => `${process.env.OPENWEATHER_BASE_URL}?${isLocationZip(location) ? `zip` : `q`}=${location}&appid=${process.env.OPENWEATHER_API_KEY}`

const getTimeAndWeather = async location => {
  const URL = getURL(location)
  const data = await fetch(URL).then(res => res.json())

  if (data.cod === 200) console.log(`
    Weather in ${location} is ${data.weather[0].description}. Time is ${moment().utc(data.timezone).format('hh:mma DD/MM/YYYY')}.
  `)
  else console.log(`
    Could not find ${location} data.
  `)
}

if (argv.i) argv.i.map(location => getTimeAndWeather(location))
else console.error('Please enter locations using -i flag.')
