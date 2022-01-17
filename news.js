var http = require('http');
var express = require('express');

var app = express();

app.get('/programinfo', (req, res) => {
    console.log('요청을 받음')
    
    return res.json({id:'1234', title:'어서와'})
})
//wefwefwefwefwe
//app.use('/programinfo', function(req, res, next) {wfwefwe
//    console.log('요청을 처리함.')
//    wefwefwef
//    var x = req.query.x;
//    var about = req.query.about;
 //   var customHeader = req.get('steven-header');
//    var ua = req.get('user-agent');
    
  //  console.log('x = ' + x + ', about = ' + about);
////    console.log(req.headers);
//    console.log(ua);
    wfwef
//    let buff = new Buffer(customHeader, 'base64');
//    let text = buff.toString('UTF-8');fwefwefwfwefwe
    wfwefwfwe
//    console.log(text); wfewfwfwewfwefwefw
    
//    res.send(
//        { id: '코로나!', title: 'http://nyt.~~~'}
//    );
//})



http.createServer(app).listen(8888, function() {
    console.log('익스프레스 서버를 시작합니다.')
})


