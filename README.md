
# Node Scraping Server


## !!주의!!
실 사이트에서 스크래핑하고 있어  사용에 유의해주시기 바랍니다.

## How to run?
### #1. git clone

    git clone https://github.com/abfhs/Node_scraping.git

### 2. config.js setting
세움터 홈페이지에서 회원 가입 후 계정정보를 입력하세요.
node mailer에 사용될 보내는 구글 메일주소와 비밀번호, 받는 메일 주소를 입력하세요.

    // config.js
    
    module.exports  = {
    
	    //세움터 ID, PWD를 입력하세요. 요소를 여러개 추가하면 해당 계정이 돌아가면서 로그인합니다.
    
	    IDList: ["exampleID"],
    
	    PWDList: ["examplePwd"],
    
	    email: {
    
	    service:  'gmail',
    
	    auth: {
    
		    user:  'example@gmail.com',
    
		    pass:  'example Password'
    
		},
    
	    from:  'example@gmail.com',
    
	    to:  'example@gmail.com'
    
	    }
    
    };

### 3. npm install
	


    git clone https://github.com/abfhs/Node_scraping.git
    npm install
    npm install axios cors express nodemailer
    npm start
    

#  API 설명

API는 총 4개로 이루어져 있으며 실 사이트에서의 사용자 행동을 재연한 것입니다.

```mermaid
graph LR
A[로그인, 주소검색] --> B((주소 선택)) --> C((동 선택)) --> D((호 선택)) --> E[PDF 발급]
```

##  요청 예시
모든 API는 POST요청으로 아래와 같이 주시면 됩니다. 예시로 getLogin API 요청 샘플을 가져왔습니다.

    const url = 'http://127.0.0.1/getLogin';
    
    const requestBody = {
        "cookieString": "",
        "address": "예술대학로 105"// <- 원하는 주소를 입력
    };
    
    fetch(url, {
        method: 'POST', // POST 요청으로 설정
        headers: {
            'Content-Type': 'application/json' // JSON 형식의 바디 데이터
        },
        body: JSON.stringify(requestBody) // 바디에 JSON 데이터 포함
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // 서버 응답 데이터 처리
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // 오류 처리
    });




### 1. getLogin

 - 세움터 홈페이지에 로그인 후 주소를 검색하는 API입니다. response로 검색된 주소와 세션 쿠키스트링이 내려옵니다.
 - Response Data 의 cookieString 값은 세션을 유지하는데 필요하므로 다른 API를 호출할 때 필수적으로 동일하게 세팅해주셔야합니다.

#### url: http://localhost:6600/getLogin
#### Body JSON

    {
	"cookieString": "",
	"address": 예술대학로 105
	}

#### Response Data

    {
    	"success": true,
    	"data": {
    		"took": 2,
    		"timed_out": false,
    		"_shards": {
    			"total": 1,
    			"successful": 1,
    			"skipped": 0,
    			"failed": 0
    		},
    		"hits": {
    			"total": {
    				"value": 2,
    				"relation": "eq"
    			},
    			"max_score": 83.705826,
    			"hits": [{
    				"_index": "bldrgstmst",
    				"_type": "_doc",
    				"_id": "11011218597",
    				"_score": 83.705826,
    				"_source": {
    					"mgmUpperBldrgstPk": "1101199155",
    					"regstrKindCd": "4",
    					"jibunAddr": "경기도 안산시 단원구 고잔동 676-2 주공아파트",
    					"roadAddr": "경기도 안산시 단원구 예술대학로 105(고잔동,주공아파트)",
    					"splotNm": null,
    					"block": null,
    					"lot": null,
    					"untClsfCd": "1103"
    				}
    			}, {
    				"_index": "bldrgstmst",
    				"_type": "_doc",
    				"_id": "11011156513",
    				"_score": 83.705826,
    				"_source": {
    					"mgmUpperBldrgstPk": "1101199155",
    					"regstrKindCd": "4",
    					"jibunAddr": "경기도 안산시 단원구 고잔동 676-2 주공아파트",
    					"roadAddr": "경기도 안산시 단원구 예술대학로 105(고잔동,주공아파트)",
    					"splotNm": null,
    					"block": null,
    					"lot": null,
    					"untClsfCd": "1103"
    				}
    			}]
    		}
    	},
    	"cookieString": "TMOSHCooKie=nQrX0kmMSBlfzfp1SJEzV+Ey2qDyCFNnY3N3v4kq7BMsfZtjvkLcWEsK2s7JpBI1QlJkPX0HtdA3f2kfdae8Y/QJXaDUQqZoAAAAAQ==; clientid=070082895610; SESSION=NTYxZjk2ZDAtMTI1Ni00YmMzLTllMWEtYjZlM2MxMWJmOGUx"
    }


### 2. findDong

 - 원하는 주소의 mgmUpperBldrgstPk값을 cookieStiring 값과 함께 BodyJson에 세팅해서 요청하면 해당 주소지의 "동"값을 할수 있습니다.

#### url: http://localhost:6600/findDong
#### Body JSON

    {
    	"cookieString": "TMOSHCooKie=fzSqQ0DQVfmEk6F1SJEzV+Ey2qDyCNTxQJf8/D7cP5v/8b0B5G0c++qhH+woQeoTHrdfM3ga1WwunlrtUiAUAyaZbS3GkaZbL0H8AAAAAQ==; clientid=070029114224; SESSION=MWQ1NzRkYzgtZmZmNS00ZmFjLWEyNGUtMWM4MjBkZWE1NDYy",
    	"addrCode": "11011103841"
    }

#### Response Data

    {
    	"success": true,
    	"data": {
    		"took": 0,
    		"timed_out": false,
    		"_shards": {
    			"total": 1,
    			"successful": 1,
    			"skipped": 0,
    			"failed": 0
    		},
    		"hits": {
    			"total": {
    				"value": 17,
    				"relation": "eq"
    			},
    			"max_score": null,
    			"hits": [{
    				"_index": "bldrgsttitle",
    				"_type": "_doc",
    				"_id": "11011103834",
    				"_score": null,
    				"_source": {
    					"mgmUpperBldrgstPk": "1101199155",
    					"regstrKindCd": "4",
    					"dongNm": "601동",
    					"untClsfCd": "1103"
    				},
    				"sort": ["601동"]
    			}, {
    				"_index": "bldrgsttitle",
    				"_type": "_doc",
    				"_id": "11011103849",
    				"_score": null,
    				"_source": {
    					"mgmUpperBldrgstPk": "1101199155",
    					"regstrKindCd": "4",
    					"dongNm": "602동",
    					"untClsfCd": "1103"
    				},
    				"sort": ["602동"]
    			}, 
    			
    						.
    						.
    						.
    						.
    
    			{
    				"_index": "bldrgsttitle",
    				"_type": "_doc",
    				"_id": "11011103841",
    				"_score": null,
    				"_source": {
    					"mgmUpperBldrgstPk": "1101199155",
    					"regstrKindCd": "4",
    					"dongNm": "612동",
    					"untClsfCd": "1103"
    				},
    				"sort": ["612동"]
    			}]
    		}
    	},
    	"cookieString": "TMOSHCooKie=fzSqQ0DQVfmEk6F1SJEzV+Ey2qDyCNTxQJf8/D7cP5v/8b0B5G0c++qhH+woQeoTHrdfM3ga1WwunlrtUiAUAyaZbS3GkaZbL0H8AAAAAQ==; clientid=070029114224; SESSION=MWQ1NzRkYzgtZmZmNS00ZmFjLWEyNGUtMWM4MjBkZWE1NDYy"
    }

### 3. findHo

 - 원하는 "동"의 _id값을 cookieStiring 값과 함께 BodyJson에 세팅해서 요청하면 해당 주소지의 "호"값을 할수 있습니다.

#### url: http://localhost:6600/findHo
#### Body JSON

    {
	"cookieString": "TMOSHCooKie=fzSqQ0DQVfmEk6F1SJEzV+Ey2qDyCNTxQJf8/D7cP5v/8b0B5G0c++qhH+woQeoTHrdfM3ga1WwunlrtUiAUAyaZbS3GkaZbL0H8AAAAAQ==; clientid=070029114224; SESSION=MWQ1NzRkYzgtZmZmNS00ZmFjLWEyNGUtMWM4MjBkZWE1NDYy",
	"dongCode": "11011103841"
	}

#### Response Data

    {
    	"success": true,
    	"data": {
    		"took": 1,
    		"timed_out": false,
    		"_shards": {
    			"total": 1,
    			"successful": 1,
    			"skipped": 0,
    			"failed": 0
    		},
    		"hits": {
    			"total": {
    				"value": 30,
    				"relation": "eq"
    			},
    			"max_score": null,
    			"hits": [{
    				"_index": "bldrgstexpos",
    				"_type": "_doc",
    				"_id": "11011218568",
    				"_score": null,
    				"_source": {
    					"mgmUpperBldrgstPk": "11011103841",
    					"recapTitlePk": "1101199155",
    					"regstrKindCd": "4",
    					"dongNm": "612동",
    					"hoNm": "101호",
    					"untClsfCd": "1103"
    				},
    				"sort": ["101호"]
    			}, {
    				"_index": "bldrgstexpos",
    				"_type": "_doc",
    				"_id": "11011218590",
    				"_score": null,
    				"_source": {
    					"mgmUpperBldrgstPk": "11011103841",
    					"recapTitlePk": "1101199155",
    					"regstrKindCd": "4",
    					"dongNm": "612동",
    					"hoNm": "102호",
    					"untClsfCd": "1103"
    				},
    				"sort": ["102호"]
    			},
    			
    						.
    						.
    						.
    						.
    			
    			{
    				"_index": "bldrgstexpos",
    				"_type": "_doc",
    				"_id": "11011218592",
    				"_score": null,
    				"_source": {
    					"mgmUpperBldrgstPk": "11011103841",
    					"recapTitlePk": "1101199155",
    					"regstrKindCd": "4",
    					"dongNm": "612동",
    					"hoNm": "304호",
    					"untClsfCd": "1103"
    				},
    				"sort": ["304호"]
    			}, {
    				"_index": "bldrgstexpos",
    				"_type": "_doc",
    				"_id": "11011218580",
    				"_score": null,
    				"_source": {
    					"mgmUpperBldrgstPk": "11011103841",
    					"recapTitlePk": "1101199155",
    					"regstrKindCd": "4",
    					"dongNm": "612동",
    					"hoNm": "305호",
    					"untClsfCd": "1103"
    				},
    				"sort": ["305호"]
    			}]
    		}
    	},
    	"cookieString": "TMOSHCooKie=fzSqQ0DQVfmEk6F1SJEzV+Ey2qDyCNTxQJf8/D7cP5v/8b0B5G0c++qhH+woQeoTHrdfM3ga1WwunlrtUiAUAyaZbS3GkaZbL0H8AAAAAQ==; clientid=070029114224; SESSION=MWQ1NzRkYzgtZmZmNS00ZmFjLWEyNGUtMWM4MjBkZWE1NDYy"
    }


### 4. getPdf

 - 원하는 "호"의 JSON값 전부를 hits 리스트에서 가져와 jusoJson에 세팅합니다. cookieStiring 값과 함께 BodyJson에 세팅해서 요청하면 해당 주소지의 건축물대장 전유부를 hexCode로 받을 수 있습니다.
응답으로 받은 hexCode를 pdf로 변환해서 사용하시면 됩니다.
#### url: http://localhost:6600/getPdf
#### Body JSON

   {
	"cookieString": "TMOSHCooKie=fzSqQ0DQVfmEk6F1SJEzV+Ey2qDyCNTxQJf8/D7cP5v/8b0B5G0c++qhH+woQeoTHrdfM3ga1WwunlrtUiAUAyaZbS3GkaZbL0H8AAAAAQ==; clientid=070029114224; SESSION=MWQ1NzRkYzgtZmZmNS00ZmFjLWEyNGUtMWM4MjBkZWE1NDYy",
	"jusoJson": "{\"_index\":\"bldrgstexpos\",\"_type\":\"_doc\",\"_id\":\"11011218592\",\"_score\":null,\"_source\":{\"mgmUpperBldrgstPk\":\"11011103841\",\"recapTitlePk\":\"1101199155\",\"regstrKindCd\":\"4\",\"dongNm\":\"612동\",\"hoNm\":\"304호\",\"untClsfCd\":\"1103\"},\"sort\":[\"304호\"]}"
}

#### Response Data

    {
    	"success":true,
    	"data": 발급된 전유부 pdf가 HEXString으로 출력됩니다,
	    "cookieString":"TMOSHCooKie=fzSqQ0DQVfmEk6F1SJEzV+Ey2qDyCNTxQJf8/D7cP5v/8b0B5G0c++qhH+woQeoTHrdfM3ga1WwunlrtUiAUAyaZbS3GkaZbL0H8AAAAAQ==; clientid=070029114224; 
    }



