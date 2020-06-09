// 서버를 만드는 모듈을 불러옴 
const http = require('http');

// 서버 만드는 메서드 
http.createServer((request, response) => {
    return request
        // 요청에 에러가 있으면 
        .on('error', err => {
            console.error(err);
        })
        // 요청에 데이터가 있으면
        .on('data', data => {
            console.log(data)
        })
        // 요청에 데이터가 모두 받아졌으면
        .on('end', () => {

            // 응답에 에러가 있으면
            response.on('error', err => {
                console.error(err);
            })

            // 성공 상태 코드 
            response.statusCode = 200;

            // header 설정
            response.setHeader('Content-Type', 'text/plain');

            // body에 정보 탑재
            response.write('hi\n');

            // 정보 탑재 후 브라우저로 전송 
            response.end('the end!');
        })
}).listen(8080);