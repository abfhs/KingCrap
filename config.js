// config.js
module.exports = {
    //세움터 ID, PWD를 입력하세요. 요소를 여러개 추가하면 해당 계정이 돌아가면서 로그인합니다.
    IDList: ["exampleID"], 
    PWDList: ["examplePwd"],
    email: {
        service: 'gmail',
        auth: {
            user: 'example@gmail.com',
            pass: 'example Password'
        },
        from: 'example@gmail.com',
        to: 'example@gmail.com'
    }
};