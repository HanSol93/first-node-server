// 서버를 만드는 모듈을 불러옴 
const http = require('http');
const url = require('url');
const fs = require('fs');

// 서버 만드는 메서드 
http.createServer((request, response) => {

    // url에서 path 추출
    const path = url.parse(request.url, true).pathname;

    // GET요청이면
    if (request.method === 'GET') {
        switch (path) {
            case '/about':
                // header 설정
                response.writeHead(200, { 'Content-Type': 'text/html' })
                    // 파일 읽는 메서드 
                fs.readFile(__dirname + '/about.html', (err, data) => {
                    if (err) {
                        // 에러 발생시 에러 기록 후 종료 
                        return console.error(err);
                    }
                    // 브라우저로 전송
                    response.end(data, 'utf-8');
                });
                break;

            case '/':
                // header 설정
                response.writeHead(200, { 'Content-Type': 'text/html' })
                    // 파일 읽는 메서드 
                fs.readFile(__dirname + '/index.html', (err, data) => {
                    if (err) {
                        // 에러 발생시 에러 기록 후 종료 
                        return console.error(err);
                    }
                    // 브라우저로 전송
                    response.end(data, 'utf-8');
                });
                break;
            default:
                response.statusCode = 404;
                response.end('주소가 없습니다');
        }
    }
}).listen(8080);