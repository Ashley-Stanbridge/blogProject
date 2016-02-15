var express = require('express')
var app = express()
var path = require('path')
var fs = require('fs')


app.get('/', function (req, response) {
  console.log('at least I got here')
  var data
  fs.readFile(path.join(__dirname, '../data/db.json'), 'utf8', function (err, res) {
  if (err) { console.log('shit'); return }
  console.log('sucessfully read file')
  data = res
  response.send(data)
  })
})

app.set('port', 3000)

var server = app.listen(app.get('port'), function() {
var port = process.env.PORT || 3000
 // var port = server.address().port
  console.log('Port 3000 is now live' + port)
})