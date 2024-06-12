const http = require('http');
const axios = require('axios');
const util = require('util');
const nodemailer = require('nodemailer');
const Cobweb_string = require("./String.js")
const config = require('./config');


// 이메일 전송 설정
const transporter = nodemailer.createTransport(config.email);

// 이메일 보내는 함수
function sendEmail(subject, text) {
    const mailOptions = {
        from: config.email.from,
        to: config.email.to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// 서버 생성 및 요청 처리
const server = http.createServer(async (req, res) => {
    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // OPTIONS 요청에 대한 빠른 응답 처리
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url == '/getLogin' && req.method == 'POST' ) {

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // 청크를 문자열로 변환
        });

        req.on('end', () => {
            // 여기서 body는 완전한 요청 본문
            try {
                let parsedData = JSON.parse(body); // JSON으로 파싱
                getLogin(parsedData, res); // getData 함수 수정 필요
            } catch (error) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    } else if(req.url == '/findDong' && req.method == 'POST' ){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // 청크를 문자열로 변환
        });

        req.on('end', () => {
            // 여기서 body는 완전한 요청 본문
            try {
                let parsedData = JSON.parse(body); // JSON으로 파싱
                findDong(parsedData, res); // getData 함수 수정 필요
            } catch (error) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    } else if(req.url == '/findHo' && req.method == 'POST' ){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // 청크를 문자열로 변환
        });

        req.on('end', () => {
            // 여기서 body는 완전한 요청 본문
            try {
                let parsedData = JSON.parse(body); // JSON으로 파싱
                findHo(parsedData, res); // getData 함수 수정 필요
            } catch (error) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    } else if(req.url == '/getPdf' && req.method == 'POST' ){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // 청크를 문자열로 변환
        });

        req.on('end', () => {
            // 여기서 body는 완전한 요청 본문
            try {
                let parsedData = JSON.parse(body); // JSON으로 파싱
                getPdf(parsedData, res); // getData 함수 수정 필요
            } catch (error) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    }else if(req.url == '/verify-password' && req.method == 'POST' ){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // 청크를 문자열로 변환
        });

        req.on('end', () => {
            // 여기서 body는 완전한 요청 본문
            try {
                let parsedData = JSON.parse(body); // JSON으로 파싱
                let password = parsedData.password;
                if (password.toLowerCase().replace(/\s+/g, '') == "helloworld") {
                    sendJsonResponse(res, 200, { success: true });
                }else{
                    sendJsonResponse(res, 200, { success: false});
                }
                
            } catch (error) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    }else {
        sendJsonResponse(res, 404, { success: false, message: 'Not Found' });
    }
});

async function getLogin(req, res) {
    try {
        //config에 들어있는 계정 개수만큼 랜덤으로 계정 하나 선택
        let randomNumber = Math.floor(Math.random() * config.IDList.length); 
        let account = [config.IDList[randomNumber], config.PWDList[randomNumber]];

        let httpRequest = {};
        httpRequest.method = "GET";
        httpRequest.headers = {
            "Host": "www.eais.go.kr",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1"
        };
        httpRequest.url = "https://cloud.eais.go.kr/moct/awp/abb01/AWPABB01F01?returnUrl=%2F";
        httpRequest.data = "";

        let resultData = await AxiosConnect(httpRequest); // API 요청 처리

        httpRequest.method = "POST";
        httpRequest.headers = {
            "Host": "www.eais.go.kr",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
            "Accept": "application/json, text/plain, */*",
            "Referer": "https://cloud.eais.go.kr/moct/awp/abb01/AWPABB01F01?returnUrl=%2F",
            "Access-Control-Allow-Origin": "*",
            "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
            "content-type": "application/json",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "Untclsfcd": "1000", /*이게 핵심!! */
            "cookie": resultData.cookieString
        };
        httpRequest.url = "https://cloud.eais.go.kr/awp/AWPABB01R01";
        httpRequest.data  = {
                        "loginId": account[0],
                        "loginPwd": account[1] 
                    };

        resultData = await AxiosConnect(httpRequest); // API 요청 처리

        //주소 검색
        httpRequest.headers.cookie = resultData.cookieString;
        httpRequest.url = "https://search.eais.go.kr/bldrgstmst/_search";
        httpRequest.data  = {
            "query": {
                "multi_match": {
                    "query": req.address,
                    "type": "cross_fields",
                    "operator": "and",
                    "fields": [
                        "jibunAddr",
                        "roadAddr^3"
                    ],
                    "tie_breaker": 0.3
                }
            },
            "size": 20
        }

        resultData = await AxiosConnect(httpRequest); // API 요청 처리
        sendJsonResponse(res, 200, resultData); // 결과를 JSON 형태로 응답

    } catch (error) {
        console.error(error);
        sendJsonResponse(res, 500, { success: false, error: error.message }); // 에러 처리
    }
}

async function findDong(req,res) {
    try {
        let httpRequest = {};
        httpRequest.method = "POST";
        httpRequest.headers = {
            "Host": "www.eais.go.kr",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
            "Accept": "application/json, text/plain, */*",
            "Referer": "https://cloud.eais.go.kr/moct/awp/abb01/AWPABB01F01?returnUrl=%2F",
            "Access-Control-Allow-Origin": "*",
            "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
            "content-type": "application/json",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "Untclsfcd": "1000", /*이게 핵심!! */
            "cookie": req.cookieString
        };
        httpRequest.url = "https://search.eais.go.kr/bldrgsttitle/_search";
        httpRequest.data  = {
            "sort": [
                {
                    "dongNm": "asc"
                }
            ],
            "query": {
                "bool": {
                    "filter": [
                        {
                            "term": {
                                "mgmUpperBldrgstPk": req.addrCode
                            }
                        }
                    ]
                }
            },
            "size": 100
        }

        resultData = await AxiosConnect(httpRequest); // API 요청 처리
        sendJsonResponse(res, 200, resultData); // 결과를 JSON 형태로 응답
    } catch (error) {
        console.error(error);
        sendJsonResponse(res, 500, { success: false, error: error.message }); // 에러 처리
    }
}

async function findHo(req,res) {

    try {
        let httpRequest = {};
        httpRequest.method = "POST";
        httpRequest.headers = {
            "Host": "www.eais.go.kr",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
            "Accept": "application/json, text/plain, */*",
            "Access-Control-Allow-Origin": "*",
            "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
            "content-type": "application/json",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "Untclsfcd": "1000", /*이게 핵심!! */
            "cookie": req.cookieString
        };
        httpRequest.url = "https://search.eais.go.kr/bldrgstexpos/_search";
        
        httpRequest.data = {
            "sort": [{
                "hoNm": "asc"
            }],
            "query": {
                "bool": {
                    "filter": [{
                        "term": {
                            "mgmUpperBldrgstPk": req.dongCode
                        }
                    }]
                }
            },
            "size": 200
        }

        resultData = await AxiosConnect(httpRequest); // API 요청 처리
        sendJsonResponse(res, 200, resultData); // 결과를 JSON 형태로 응답

    } catch (error) {
        console.error(error);
        sendJsonResponse(res, 500, { success: false, error: error.message }); // 에러 처리
    }
}

//pdf 발급까지 한번에 가보자
async function getPdf(req,res) {
    //재시도 로직 추가
    for(let rty=0; rty<= 1; rty++){
        try {
            let hoJson = JSON.parse(req.jusoJson);
            let jusoKey = hoJson._id;
            let untClsfCd = hoJson._source.untClsfCd

            let httpRequest = {};
            httpRequest.method = "POST";
            httpRequest.headers = {
                "Host": "www.eais.go.kr",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "application/json, text/plain, */*",
                "Access-Control-Allow-Origin": "*",
                "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
                "content-type": "application/json",
                "Connection": "keep-alive",
                "Upgrade-Insecure-Requests": "1",
                "Untclsfcd": "1000", /*이게 핵심!! */
                "cookie": req.cookieString
            };

            httpRequest.url = "https://www.eais.go.kr/bci/BCIAAA02R04";

            httpRequest.data = {
                "inqireGbCd": "1",
                "bldrgstCurdiGbCd": "0",
                "upperBldrgstSeqno": "",
                "bldrgstSeqno": jusoKey ,
                "untClsfCd": untClsfCd
            }

            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            let jusoJson = resultData.data.findExposList[0]

            httpRequest = {};
            httpRequest.method = "POST";
            httpRequest.headers = {
                "Host": "www.eais.go.kr",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "application/json, text/plain, */*",
                "Access-Control-Allow-Origin": "*",
                "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
                "content-type": "application/json",
                "Connection": "keep-alive",
                "Upgrade-Insecure-Requests": "1",
                "Untclsfcd": "1000", /*이게 핵심!! */
                "cookie": req.cookieString
            };
            httpRequest.url = "https://www.eais.go.kr/bci/BCIAAA02C01";
            httpRequest.data = {
                "bldrgstSeqno": jusoJson.bldrgstSeqno,
                "regstrGbCd": jusoJson.regstrGbCd,
                "regstrKindCd": jusoJson.regstrKindCd,
                "mjrfmlyIssueYn": "N",
                "locSigunguCd": jusoJson.sigunguCd,
                "locPlatGbCd": jusoJson.platGbCd,
                "locDetlAddr": "",
                "locMnnm": jusoJson.mnnm,
                "locSlno": jusoJson.slno,
                "locDongNm": "",
                "locHoNm": jusoJson.hoNm,
                "ownrYn": "N",
                "multiUseBildYn": "N",
                "bldrgstCurdiGbCd": "0"
            }
        
            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/bci/BCIAAA02R05";
            httpRequest.data = ""
        
            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            var lastUpdusrId = resultData.data.findPbsvcResveDtls[0].lastUpdusrId
            

            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/bci/BCIAAA02R05";

            httpRequest.data = {"lastUpdusrId": lastUpdusrId}
        
            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            var resultJson = resultData.data;
            var findPbsvcResveDtls = resultJson.findPbsvcResveDtls[0];  //신청한 주소 Obj

            /**
             * 추가
             * 이름, 생년월일 등 확인용 통신
             */
            httpRequest.method = "GET";
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/cba/CBAAZA02R01";
            httpRequest.data = ''
            resultData = await AxiosConnect(httpRequest);

            let userNm = resultData.data.ds_SessionRep.sessionUserNm;


            httpRequest.method = "POST";
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/bci/BCIAZA02S01";
            httpRequest.data = {
                "pbsvcResveDtls": [findPbsvcResveDtls],
                "ownrExprsYn": "N",
                "bldrgstGbCd": "1",
                "pbsvcRecpInfo": {
                    "pbsvcGbCd": "01",
                    "issueReadGbCd": "0",
                    "certDn": null,
                    "pbsvcResveDtlsCnt": 1
                },
                "appntInfo": {
                    "appntGbCd": "01",
                    "appntJmno1": "",
                    "appntJmno2": "",
                    "appntJmno": "",
                    "appntBizno": "",
                    "appntNm": userNm,
                    "appntMtelno": "",
                    "appntSigunguCd": "",
                    "naAppntBjdongCd": "",
                    "naAppntRoadCd": "",
                    "naAppntMnnm": "",
                    "naAppntSlno": "",
                    "naAppntGrndUgrndGbCd": "0",
                    "naAppntDetlAddr": "",
                    "appntCorpno": "",
                    "appntCoprNm": ""
                },
                "indvGbCd": null
            }

            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/bci/BCIAAA02D02";
            httpRequest.data = {"lastUpdusrId": lastUpdusrId};

            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            // 오늘 날짜를 yyyy-mm-dd형태로 만들어주는 함수
            var today = new Date();
            var year = today.getFullYear();

            var month = String(today.getMonth() + 1)
            if(month.length == 1){
                month = "0" + month;
            }

            var day = String(today.getDate())
            if(day.length == 1){
                day = "0" + day;
            }
            today = year + "-" + month + "-" + day;

            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/bci/BCIAAA06R01";
            httpRequest.data = {
                "membNo": "",
                "pbsvcGbCd": "",
                "progStateFlagArr": [
                    "01"
                ],
                "pbsvcProcessGbCd": "",
                "firstSaveStartDate": today,
                "firstSaveEndDate": today,
                "pageNo": 0,
                "recordSize": 10,
                "pageYn": "N"
            };

            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            resultJson = resultData.data;
            var IssueReadHistObj = resultJson.IssueReadHistList[0];
            var mgmNo = IssueReadHistObj.mgmNo;
        
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/cba/CBAAZD04R01";
            httpRequest.data = {
                "sysLocGbCd": "3",
                "reptNm": "djrBldexpos",
                "recpDay": IssueReadHistObj.realProcessDateStr,
                "jobGbCd": "BC"
            };

            resultData = await AxiosConnect(httpRequest); // API 요청 처리




            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/report/BCIAAA06R03";
            httpRequest.data = {
                "issueReadAppDate": IssueReadHistObj.realProcessDateStr,
                "pbsvcRecpNo": IssueReadHistObj.pbsvcRecpNo
            }
            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            var fileJson = resultData.data;


            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/bci/BCIAAA06R03";
            httpRequest.data = {
                "issueReadAppDate": IssueReadHistObj.realProcessDateStr,
                "pbsvcRecpNo": IssueReadHistObj.pbsvcRecpNo
            }
            resultData = await AxiosConnect(httpRequest); // API 요청 처리


            httpRequest.method = "GET";
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/report/RPTCAA02R06?_=1677214423897";
            httpRequest.data = ""
            resultData = await AxiosConnect(httpRequest); // API 요청 처리


            var ipJson = resultData.data;
           


            var bodyText = "isEncoding=false&isBigData=false&isMemoryDump=false&ClipID=R01&oof=";
                var oof = "<?xml version='1.0' encoding='utf-8'?>"
                +"<oof version='3.0'>"
                    +"<document title='' enable-thread='0'>"
                        +"<file-list>"
                            +"<file type='crf.root' path='%root%/crf/bci/djrBldexpos_20210712.crf'></file>"
                        +"</file-list>"
                        +"<connection-list>"
                            +"<connection type='file' namespace='XML1'>"
                                +"<config-param-list>"
                                    +"<config-param name='path'>"
                                        +"/cais_data/issue/" + today.replace(/-/g, "/") + "/" + IssueReadHistObj.pbsvcRecpNo + "/" + IssueReadHistObj.pbsvcRecpNo + ".xml" + "</config-param>"
                                +"</config-param-list>"
                                +"<content content-type='xml' namespace='*'>"
                                    +"<content-param name='encoding'>euc-kr</content-param>"
                                    +"<content-param name='root'>{%dataset.xml.root%}</content-param>"
                                +"</content>"
                            +"</connection>"
                        +"</connection-list>"
                        +'<field-list type="name">'
                            +"<field name='ISSUE_READ_GB_CD' trim='true'>0</field>"
                            +"<field name='BLDRGST_GB_CD' trim='true'>1</field>"
                            +"<field name='FILE_ID' trim='true'>" + fileJson.count.FILE_ID + "</field>"
                            +"<field name='CHANG_MATR_COUNT' trim='true'>" + fileJson.count.CHANG_MATR_COUNT + "</field>"
                            +"<field name='EXPOS_PART_COUNT' trim='true'>" + fileJson.count.EXPOS_PART_COUNT + "</field>"
                            +"<field name='COPERTN_HSPRC_COUNT' trim='true'>" + fileJson.count.COPERTN_HSPRC_COUNT + "</field>"
                            +"<field name='PUBUSE_PART_COUNT' trim='true'>" + fileJson.count.PUBUSE_PART_COUNT + "</field>"
                            +"<field name='OWNR_CURST_INFO_COUNT' trim='true'>" + fileJson.count.OWNR_CURST_INFO_COUNT + "</field>"
                            +"<field name='ETC_RCD_MATR_COUNT' trim='true'>" + fileJson.count.ETC_RCD_MATR_COUNT + "</field>"
                            +"<field name='SVR_GB' trim='true'>" + ipJson.key + "</field>"
                            +"<field name='SVR_HOST' trim='true'>" + ipJson.host + "</field>"
                            +"<field name='FILE_PATH' trim='true'>"
                                +"/cais_data/issue/" +today.replace(/-/g, "/") + "/" + IssueReadHistObj.pbsvcRecpNo + "/" + IssueReadHistObj.pbsvcRecpNo + ".png" + "</field>"
                        +"</field-list>"
                    +"</document>"
                +"</oof>";

            bodyText = bodyText + encodeURIComponent(oof);


            httpRequest.method = "POST";
            
            httpRequest.headers = {
                "Host": "www.eais.go.kr",
                "Origin": "https://www.eais.go.kr",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "application/json, text/plain, */*",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
                "Connection": "keep-alive",
                "Upgrade-Insecure-Requests": "1",
                "Untclsfcd": "1000", /*이게 핵심!! */
            }
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/report/RPTCAA02R02";
            httpRequest.data = bodyText
            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            var uid = resultData.data.grap("uid':'","'");
            if(!uid){
                console.log("error");
            }

            //전체 몇페이지인지 가져오는 통신
            milliSecond = new Date().getTime();

            bodyText = "";
            bodyText += "ClipID=R03";
            bodyText += "&uid=" + uid;
            bodyText += "&clipUID=" + uid;
            bodyText += "&s_time=" + milliSecond;

            httpRequest.method = "POST";
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/report/RPTCAA02R02";
            httpRequest.data = bodyText
            resultData = await AxiosConnect(httpRequest); // API 요청 처리

            var lastPage = resultData.data.grap("count':",",");


            //viewData 통신
            var clipData = {"reportkey": uid,"isMakeDocument": true,"pageMethod": 0}
            
            bodyText = "";
            bodyText += "uid=" + uid;
            bodyText += "&clipUID=" + uid;
            bodyText += "&ClipType=DocumentPageView";
            bodyText += "&ClipData=" + encodeURIComponent(JSON.stringify(clipData));

            httpRequest.method = "POST";
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/report/RPTCAA02R02";
            httpRequest.data = bodyText
            resultData = await AxiosConnect(httpRequest); // API 요청 처리


            
            bodyText = "";
            bodyText += "ClipID=R16";
            bodyText += "&aliveReport=true";
            bodyText += "&uid=" + uid;
            bodyText += "&clipUID=" + uid;
            bodyText += "&s_time=" + milliSecond;

            httpRequest.method = "POST";
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/report/RPTCAA02R02";
            httpRequest.data = bodyText
            resultData = await AxiosConnect(httpRequest); // API 요청 처리
            


            //발급 전송 통신??
            // postData = {
            //     "mgmNo": mgmNo,
            //     "bldrgstCurdiGbCd": "0"
            // };

            // httpRequest.method = "POST";
            // httpRequest.headers.cookie = resultData.cookieString;
            // httpRequest.url = "https://www.eais.go.kr/bci/BCIAZA01S01";
            // httpRequest.data = postData
            // resultData = await AxiosConnect(httpRequest); // API 요청 처리


            //pdf다운로드 통신
            var pageJson = {"drawDashedLineDirectly": true,"startNum": 1,"endNum": Number(lastPage)};
            bodyText = "";
            bodyText += "ClipID=R08";
            bodyText += "&uid=" + uid;
            bodyText += "&clipUID=" + uid;
            bodyText += "&print=print";
            bodyText += "&isPDFPrintImage=false";
            bodyText += "&path=%2Freport";
            bodyText += "&optionValue=" + encodeURIComponent(JSON.stringify(pageJson));
            bodyText += "&isChromePrintFitToPage=false";
            bodyText += "&s_time=" + milliSecond;


            httpRequest.method = "POST";
            httpRequest.headers.cookie = resultData.cookieString;
            httpRequest.url = "https://www.eais.go.kr/report/RPTCAA02R02";
            httpRequest.data = bodyText
            resultData = await AxiosPdfConnect(httpRequest); // API 요청 처리

            sendJsonResponse(res, 200, resultData); // 결과를 JSON 형태로 응답
            break;

        } catch (error) {
            if(rty < 1) continue;
            console.error(error);
            sendJsonResponse(res, 500, { success: false, error: error.message }); // 에러 처리
            break;
        }
    }
}

// 외부 API 요청을 처리하는 함수
async function AxiosConnect({ method, headers, url, data }) {
    let response, redirectCount = 0;
    let cookies = headers.cookie ? headers.cookie.split('; ') : [];

    try{
        do {
            response = await axios({
                method,
                url,
                headers: {...headers, cookie: cookies.join('; ')},
                data,
                maxRedirects: 0,
                validateStatus: status => (status >= 200 && status < 300) || status === 302 || 307
            });
    
            // 리다이렉트 처리
            if ([302, 307].includes(response.status) && response.headers.location) {
                url = response.headers.location;
                redirectCount++;
            }
    
            // 쿠키 업데이트
            if (response.headers['set-cookie']) {
                const newCookies = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]);
                cookies.push(...newCookies);
            }
        } while ([302, 307].includes(response.status) && redirectCount < 5);
    }catch(e){
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        console.log("Error Message:", util.inspect(e, { showHidden: false, depth: null, colors: true }));
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        return false;
    }

    
    console.log("\n\n================================================================================================================================================================================================");
    console.log("Response Status:", util.inspect(response.status, { showHidden: false, depth: null, colors: true }));
    console.log("Response Url:", util.inspect(url, { showHidden: false, depth: null, colors: true }));
    console.log("Request Headers:", util.inspect(headers, { showHidden: false, depth: null, colors: true }));
    console.log("Request Body:", util.inspect(data, { showHidden: false, depth: null, colors: true }));
    console.log("Response Headers:", util.inspect(response.headers, { showHidden: false, depth: null, colors: true }));
    console.log("Response Data:", util.inspect(response.data, { showHidden: false, depth: null, colors: true }));
    console.log("================================================================================================================================================================================================\n\n");

    // 응답 데이터 포맷팅 및 반환
    return {
        success: true,
        data: response.data,
        cookieString: cookies.join('; ').replace(/\n/g,'')
    };
}

// Pdf 다운로드 전용 함수
async function AxiosPdfConnect({ method, headers, url, data }) {
    let response, redirectCount = 0;
    let cookies = headers.cookie ? headers.cookie.split('; ') : [];

    try{
        do {
            response = await axios({
                method,
                url,
                headers: {...headers, cookie: cookies.join('; ')},
                data,
                maxRedirects: 0,
                responseType: 'arraybuffer',  // 응답 타입을 arraybuffer로 설정
                maxRedirects: 0,
                validateStatus: status => (status >= 200 && status < 300) || status === 302 || 307
            });
    
            // 리다이렉트 처리
            if ([302, 307].includes(response.status) && response.headers.location) {
                url = response.headers.location;
                redirectCount++;
            }
    
            // 쿠키 업데이트
            if (response.headers['set-cookie']) {
                const newCookies = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]);
                cookies.push(...newCookies);
            }
        } while ([302, 307].includes(response.status) && redirectCount < 5);
    }catch(e){
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        console.log("Response Status:", util.inspect(response.status, { showHidden: false, depth: null, colors: true }));
        console.log("Response Url:", util.inspect(url, { showHidden: false, depth: null, colors: true }));
        console.log("Request Headers:", util.inspect(headers, { showHidden: false, depth: null, colors: true }));
        console.log("Response Data:", util.inspect(response.data, { showHidden: false, depth: null, colors: true }));
        console.log("Error Message:", util.inspect(e, { showHidden: false, depth: null, colors: true }));
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        return false;
    }

     // 응답 데이터를 Buffer로 변환 후 헥사 문자열로 변환
     const hexData = Buffer.from(response.data).toString('hex');

     // 로깅 및 결과 반환 부분...
     console.log("Response Data (Hex):", hexData);

    
    console.log("\n\n================================================================================================================================================================================================");
    console.log("Response Status:", util.inspect(response.status, { showHidden: false, depth: null, colors: true }));
    console.log("Response Url:", util.inspect(url, { showHidden: false, depth: null, colors: true }));
    console.log("Request Headers:", util.inspect(headers, { showHidden: false, depth: null, colors: true }));
    console.log("Request Body:", util.inspect(data, { showHidden: false, depth: null, colors: true }));
    console.log("Response Headers:", util.inspect(response.headers, { showHidden: false, depth: null, colors: true }));
    console.log("Response Data:", util.inspect(response.data, { showHidden: false, depth: null, colors: true }));
    console.log("================================================================================================================================================================================================\n\n");

    // 응답 데이터 포맷팅 및 반환
    return {
        success: true,
        data: hexData,  // 헥사 데이터 반환
        cookieString: cookies.join('; ').replace(/\n/g,'')
    };
}

const PORT = 6600;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

// JSON 형태의 응답을 보내는 함수
function sendJsonResponse(res, statusCode, data) {
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));

    if (statusCode !== 200) {
        const logMessage = `
        Response Status: ${statusCode}
        Response Data: ${JSON.stringify(data, null, 2)}
        `;
        sendEmail(`Error: ${statusCode} Response`, logMessage);
    }
}
