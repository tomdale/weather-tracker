module.exports = function(app) {
  const cities = {
    10014: "New York, NY",
    94016: "San Francisco, CA"
  }
  app.get('/weather/:zip.json', function (req, res) {
    const { zip } = req.params
    let high, low;

    if (zip === '10014') {
      low = 65;
      high = 72;
    } else {
      low = 48;
      high = 55;
    }

    let temp = Math.floor(Math.random() * (high - low)) + low;
    const city = cities[zip]

    res.send(`{"temperature": "${temp}","city": "${city}"}`);
  })
};