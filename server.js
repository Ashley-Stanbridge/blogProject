var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
var PORT = process.env.PORT || 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')));

app.post('/create-blog', function (req, res) {
  var inputDATA = JSON.stringify(req.body)
  res.send()
   fs.writeFile('data/db.json', inputDATA, function (err) {
    if(err) throw err
      console.log('Success')
  })
})


app.listen(PORT, function () {
  console.log('Now live at port ' + PORT)
})
 