var http = require('http');
var express = require('express');
var sleep = require('sleep');

var app = express();

app.get('/api/programinfo', (req, res) => {
    console.log('program info api 요청을 받음 json을 바디에 넣어서 리턴한다.')
    return res.json({id:'1234', title:'어서와'})
})

app.get('/api/bad', (req, res) => {
    console.log('bad api 요청을 받음. 401를 리턴한다.')
    return res.status(401).json({err: 'Not Authorized'})
})

app.get('/api/timeout', (req, res) => {
    console.log('timeout api 요청을 받음. 응답을 1분 뒤에 한다.')
    sleep.sleep(60)
    console.log('sleep 끝남. 200을 리턴')
    return res.json({id:'1234', title:'어서와'})
})

app.get('/api/episode', (req, res) => {
    console.log('episode api 요청을 받음.')
    var jsonObj = {
        episodeList: [
            { title: '어서와 한국은 처음이지 1화', thumbnailUrl: 'https://xxxx', like: 2147483648 },
            { title: '어서와 한국은 처음이지 2화', thumbnailUrl: 'https://xxxx' }
        ]
//        hasMore: false
    }
    return res.json(jsonObj)
})

http.createServer(app).listen(8888, function() {
    console.log('익스프레스 서버를 시작합니다. 요청을 받는 중 ...')
})








//
//app.use('/programinfo', function(req, res, next) {
//    console.log('요청을 처리함.')
//    
//    var x = req.query.x;
//    var about = req.query.about;
 //   var customHeader = req.get('steven-header');
//    var ua = req.get('user-agent');
    
  //  console.log('x = ' + x + ', about = ' + about);
////    console.log(req.headers);
//    console.log(ua);
    
//    let buff = new Buffer(customHeader, 'base64');
//    let text = buff.toString('UTF-8');
    
//    console.log(text);
    
//    res.send(
//        { id: '코로나!', title: 'http://nyt.~~~'}
//    );
//})
