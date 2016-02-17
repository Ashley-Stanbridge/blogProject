var superagent = require('superagent')

function postBlog (text) {

  superagent
    .post('http://localhost:3000/create-blog')
    .send({ content: text })
    .set('Accept', 'application/json')
    .end(function(err, res){
      console.log(res)

    });
}


module.exports = postBlog