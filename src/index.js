 var $ = require('jquery')
var postBlogToServer = require('./postBlog.js')

$(document).ready(function () {
  $('#newBlog').submit(function (e) {
    e.preventDefault()
    postBlogToServer($('#blogInput').val())
  })
})



