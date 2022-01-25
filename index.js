const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()

const url = 'https://www.theguardian.com/uk'

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    $('.fc-item__title', html).each(function)
  })

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))