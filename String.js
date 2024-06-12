/** 
 * String.prototype.js
 * String.prototype.js
 *
 * @author 	: htjulia
 * @date 	: 2015-04-14 17:30:11.864
 * @version : 1.0.0
 */
 
/**
 * String replaceAll function
 *__
 * @param 	{string} express
 * @param 	{string} repalce string
 * @param 	{string} initial data
 * @returns {string} replaced data
 */
String.prototype.replaceAll = function (expr, rep, initData) {
	if (this == undefined) return initData;
	return this.replace(expr, rep);
}


String.prototype.replaceEntities = function () {
	var str = this;

	str = str.replace(/&nbsp;|&#160;/g, " ");
	str = str.replace(/&lt;|&#60;|&#060;/g, "<");
	str = str.replace(/&gt;|&#62;|&#062;/g, ">");
	str = str.replace(/&amp;|&#38;|&#038;/g, "&");
	str = str.replace(/&quot;|&#34;|&#034;/g, '"');
	str = str.replace(/&apos;|&#39;|&#039;/g, "'");
	str = str.replace(/&lpar;|&#40;|&#040;/g, "(");
	str = str.replace(/&rpar;|&#41;|&#041;/g, ")");
	str = str.replace(/&ast;|&#42;|&#042;/g, "*");
	str = str.replace(/&#45;|&#045;/g, "-");	//hyphen-minus
	str = str.replace(/&lowbar;|&#95;|&#095;/g, "_");
	
	return str;
}


String.prototype.getEntityName = function () {
	var str = this;
	
	str = str.replace(/&/g, "&amp;");
	str = str.replace(/</g, "&lt;");
	str = str.replace(/>/g, "&gt;");
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/'/g, "&apos;");
	
	return str;
}

//https://www.w3schools.com/charsets/ref_html_8859.asp
//ISO-8859-1 Characters
String.prototype.replaceLatin1 = function () {
	var str = this;

	str = str.replace(/&Agrave;|&#192;/g, "À");
	str = str.replace(/&Aacute;|&#193;/g, "Á");
	str = str.replace(/&Acirc;|&#194;/g, "Â");
	str = str.replace(/&Atilde;|&#195;/g, "Ã");
	str = str.replace(/&Auml;|&#196;/g, "Ä");
	str = str.replace(/&Aring;|&#197;/g, "Å");
	str = str.replace(/&AElig;|&#198;/g, "Æ");
	str = str.replace(/&Ccedil;|&#199;/g, "Ç");
	str = str.replace(/&Egrave;|&#200;/g, "È");
	str = str.replace(/&Eacute;|&#201;/g, "É");
	str = str.replace(/&Ecirc;|&#202;/g, "Ê");
	str = str.replace(/&Euml;|&#203;/g, "Ë");
	str = str.replace(/&Igrave;|&#204;/g, "Ì");
	str = str.replace(/&Iacute;|&#205;/g, "Í");
	str = str.replace(/&Icirc;|&#206;/g, "Î");
	str = str.replace(/&Iuml;|&#207;/g, "Ï");
	str = str.replace(/&ETH;|&#208;/g, "Ð");
	str = str.replace(/&Ntilde;|&#209;/g, "Ñ");
	str = str.replace(/&Ograve;|&#210;/g, "Ò");
	str = str.replace(/&Oacute;|&#211;/g, "Ó");
	str = str.replace(/&Ocirc;|&#212;/g, "Ô");
	str = str.replace(/&Otilde;|&#213;/g, "Õ");
	str = str.replace(/&Ouml;|&#214;/g, "Ö");
	str = str.replace(/&times;|&#215;/g, "×");
	str = str.replace(/&Oslash;|&#216;/g, "Ø");
	str = str.replace(/&Ugrave;|&#217;/g, "Ù");
	str = str.replace(/&Uacute;|&#218;/g, "Ú");
	str = str.replace(/&Ucirc;|&#219;/g, "Û");
	str = str.replace(/&Uuml;|&#220;/g, "Ü");
	str = str.replace(/&Yacute;|&#221;/g, "Ý");
	str = str.replace(/&THORN;|&#222;/g, "Þ");
	str = str.replace(/&szlig;|&#223;/g, "ß");
	str = str.replace(/&agrave;|&#224;/g, "à");
	str = str.replace(/&aacute;|&#225;/g, "á");
	str = str.replace(/&acirc;|&#226;/g, "â");
	str = str.replace(/&atilde;|&#227;/g, "ã");
	str = str.replace(/&auml;|&#228;/g, "ä");
	str = str.replace(/&aring;|&#229;/g, "å");
	str = str.replace(/&aelig;|&#230;/g, "æ");
	str = str.replace(/&ccedil;|&#231;/g, "ç");
	str = str.replace(/&egrave;|&#232;/g, "è");
	str = str.replace(/&eacute;|&#233;/g, "é");
	str = str.replace(/&ecirc;|&#234;/g, "ê");
	str = str.replace(/&euml;|&#235;/g, "ë");
	str = str.replace(/&igrave;|&#236;/g, "ì");
	str = str.replace(/&iacute;|&#237;/g, "í");
	str = str.replace(/&icirc;|&#238;/g, "î");
	str = str.replace(/&iuml;|&#239;/g, "ï");
	str = str.replace(/&eth;|&#240;/g, "ð");
	str = str.replace(/&ntilde;|&#241;/g, "ñ");
	str = str.replace(/&ograve;|&#242;/g, "ò");
	str = str.replace(/&oacute;|&#243;/g, "ó");
	str = str.replace(/&ocirc;|&#244;/g, "ô");
	str = str.replace(/&otilde;|&#245;/g, "õ");
	str = str.replace(/&ouml;|&#246;/g, "ö");
	str = str.replace(/&divide;|&#247;/g, "÷");
	str = str.replace(/&oslash;|&#248;/g, "ø");
	str = str.replace(/&ugrave;|&#249;/g, "ù");
	str = str.replace(/&uacute;|&#250;/g, "ú");
	str = str.replace(/&ucirc;|&#251;/g, "û");
	str = str.replace(/&uuml;|&#252;/g, "ü");
	str = str.replace(/&yacute;|&#253;/g, "ý");
	str = str.replace(/&thorn;|&#254;/g, "þ");
	str = str.replace(/&yuml;|&#255;/g, "ÿ");
	
	return str;
}

/**
 * String removeHtmlTagAll function
 *
 * @returns {string} removed html tag
 */
String.prototype.removeHtmlTagAll = function () {
	return this.replace(/(<([^>]+)>)/gi, "");
}


/**
 * String removeDash function
 *
 * @returns {string} removed '-' 
 */
String.prototype.removeDash = function () {
	return this.replace(/-/g, "");
}


/**
 * String removeDot function
 *
 * @returns {string} removed '.' 
 */
String.prototype.removeDot = function () {
	return this.replace(/\./g, "");
}


/**
 * String removeComma function
 *
 * @returns {string} removed ',' 
 */
String.prototype.removeComma = function () {
	return this.replace(/,/g, "");
}


/**
 * String removeColon function
 *
 * @returns {string} removed ';' 
 */
String.prototype.removeColon = function () {
	return this.replace(/:/g, "");
}


/**
 * String removeSpace function
 *
 * @returns {string} removed ' ' 
 */
String.prototype.removeSpace = function () {
	return this.replace(/ /g, "");
}


/**
 * String removeSignedData function
 *
 * @returns {string} removed carriage return
 */
String.prototype.removeSignedData = function () {
	return this.replace(/(?:\\[rn]|[\r\n]+)+/g, "");
}


/**
 * String removeReturn function
 *
 * @returns {string} removed carriage return
 */
String.prototype.removeReturn = function () {
	return this.replace(/(?:\\[rn]|[\r\n]+)+/g, "");
}


/**
 * String removePEMHeader function
 *
 * @returns {string} removed PEM header
 */
String.prototype.removePEMHeader = function () {
	var str = this;
	str = str.removeReturn();
	
	str = str.replace(/-----BEGIN RSA PRIVATE KEY-----/g, "");
	str = str.replace(/-----END RSA PRIVATE KEY-----/g, "");
	str = str.replace(/-----BEGIN PUBLIC KEY-----/g, "");
	str = str.replace(/-----END PUBLIC KEY-----/g, "");
	str = str.replace(/-----BEGIN CERTIFICATE-----/g, "");
	str = str.replace(/-----END CERTIFICATE-----/g, "");
	
	return str;
}

/**
 * String removeRSAPEMHeader function
 *
 * @returns {string} removed RSA PEM header
 */
String.prototype.removeRSAPEMHeader = function () {
	var str = this;
	str = str.removeReturn();
	
	var endPEMIdx = str.indexOf("-----END");

	if (endPEMIdx > -1) {
    	str = str.substring(0,endPEMIdx);
	}
	
	str = str.replace(/-----BEGIN RSA PRIVATE KEY-----/g, "");
	str = str.replace(/-----BEGIN PUBLIC KEY-----/g, "");
	
	return str;
}



/**
 * String parseHexString function
 *
 * @returns {ARRAY} hex string to arra. HexString을 Byte로 변경하는 구문.
 */
String.prototype.parseHexString = function() { 
    var result = [];
    var str = this;
    while (str.length >= 2) { 
        result.push(parseInt(str.substring(0, 2), 16));
        str = str.substring(2, str.length);
    }

    return result;
}


/**
 * String parseHexStringToString function
 *
 * @returns {ARRAY} hex string to string
 */
String.prototype.parseHexStringToString = function() { 
    var result = "";
    var str = this;
    while (str.length >= 2) { 
        result += String.fromCharCode(parseInt(str.substring(0, 2), 16));
        str = str.substring(2, str.length);
    }

    return result;
}



/**
 * String parseHexStringToUrlCovert function
 *
 * @returns {ARRAY} hex string to string
 */
String.prototype.parseHexStringToUrlCovert = function() { 
    var result = "";
    var str = this;
    while (str.length >= 2) { 
        result += "%" + str.substring(0, 2);
        str = str.substring(2, str.length);
    }

    return decodeURIComponent(result);
}



/**
 * String parseToHexArray function
 *
 * @returns {ARRAY} string to byte array
 */
String.prototype.parseToHexArray = function() {
    var result = [];
    var str = this;

   	for (i=0; i<str.length; i++) { 
        result.push(str.charCodeAt(i));
    }

    return result;
}


/**
 * String parseToHexString function
 *
 * @returns {STRING} string to hex string
 */
String.prototype.parseToHexString = function() { 
	var arr = this.parseToHexArray();
	return this.parseByteToHexString(arr);
}


/**
 * String parseToHexString function
 *
 * @param arr {ARRAY} m RSA KEY
 * @returns {STRING} byte arr to hex string
 */
String.prototype.parseByteToHexString = function(arr) { 
    var result = "";
    for (i in arr) {
        var str = arr[i].toString(16).toUpperCase(); //Number(arr[i].charCodeAt(0)).toString(16);
		
        str = str.length == 0 ? "00" :
              str.length == 1 ? "0" + str : 
              str.length == 2 ? str :
              str.substring(str.length-2, str.length);
        result += str;
    }
    return result;
}

/**
 * String left function
 *
 * @param	{int} size 
 * @return  {string} left substring from first
 */
String.prototype.left = function(size) {
    if (size <= 0)
      	return "";
    else if (size > String(this).length)
      	return String(this);
    else
      	return this.substring(0, size);
}


/**
 * String Right function
 *
 * @param	{int} size 
 * @return  {string} right substring from end  
 */
String.prototype.right = function (size) {
    if (size <= 0)
		return "";
    else if (size > this.length) 
		return String(this);
    else
    	return this.substring(this.length, this.length - size);
}


/**
 * String _grap function
 *
 * @param	{string} prifix start string
 * @param	{string} subfux end string
 * @param	{int} idx prifix index
 * @return  {bool} caseSensitive 
 */
String.prototype._grap = function (prifix, subfix, idx, idx2, caseSensitive) {
	var temp = "";

	if (caseSensitive) {
		temp = this;
	} else {
		temp = this.toLowerCase();
		           
	}
	
	var prefixIdx = 0;
	if (prifix.length >0) {
		for (var i=0; i<idx+1; i++) {
			if (!caseSensitive)
				prefixIdx = temp.indexOf(prifix.toLowerCase(), prefixIdx);
			else 
				prefixIdx = temp.indexOf(prifix, prefixIdx);

			if (prefixIdx < 0) return "";
			
			prefixIdx += prifix.length;
		}
	} else {
		 return "";
	}
	
	var subfixIdx = prefixIdx;
	if (subfix.length >0) {
		for (var i=0; i<idx2+1; i++) {
	    	if (!caseSensitive)
    			subfixIdx = temp.indexOf(subfix.toLowerCase(), subfixIdx);
	    	else 
    			subfixIdx = temp.indexOf(subfix, subfixIdx);

    		if (subfixIdx < 0) return "";
    		subfixIdx += subfix.length; 
		}
	} else {
		return "";
	}
	subfixIdx -= subfix.length; 
	
	if (subfixIdx > prefixIdx) {
		return this.substring(prefixIdx, subfixIdx);
	}
	return "";
}


/**
 * String _grap function
 *
 * @param	{string} prifix start string
 * @param	{string} subfux end string
 * @param	{int} idx prifix index
 * @return  {object} startPos, endPos
 */
String.prototype._grapIndexs = function (prifix, subfix, idx, idx2, caseSensitive) {
	var returnIndex = {};
	returnIndex.startPos = -1;
	returnIndex.endPos = -1;

	var temp = "";

	if (caseSensitive) {
		temp = this;
	} else {
		temp = this.toLowerCase();
		           
	}
	
	
	var prefixIdx = 0;
	if (prifix.length >0) {
		for (var i=0; i<idx+1; i++) {
			if (!caseSensitive)
				prefixIdx = temp.indexOf(prifix.toLowerCase(), prefixIdx);
			else 
				prefixIdx = temp.indexOf(prifix, prefixIdx);

			if (prefixIdx < 0) return returnIndex;
			
			prefixIdx += prifix.length;
		}
	} else {
		 return returnIndex;
	}
	
	var subfixIdx = prefixIdx;
	if (subfix.length >0) {
		for (var i=0; i<idx2+1; i++) {
	    	if (!caseSensitive)
    			subfixIdx = temp.indexOf(subfix.toLowerCase(), subfixIdx);
	    	else 
    			subfixIdx = temp.indexOf(subfix, subfixIdx);

    		if (subfixIdx < 0) return returnIndex;
    		subfixIdx += subfix.length; 
		}
	} else {
		return returnIndex;
	}
	subfixIdx -= subfix.length; 
	
	if (subfixIdx > prefixIdx) {
		returnIndex.startPos = prefixIdx;
		returnIndex.endPos = subfixIdx;
	}
	return returnIndex;
}



/*
example)
		var resData11 = "<a><a><b>가나</b>다라<b>마바</b><b>사아</b></a></a>"
		
		console.log("==============================================================================");
		console.log("grap start :: ");
		console.assert((resData11.grap("<a>", "</a>") === "<a><b>가나</b>다라<b>마바</b><b>사아</b>"), "faile grap :: ", resData11.grap("<a>", "</a>"));
		console.assert((resData11.grap("<a>", "</a>",1) === "<b>가나</b>다라<b>마바</b><b>사아</b>"), "faile grap :: ", resData11.grap("<a>", "</a>",1));
		console.assert((resData11.grapAdd("<a>", "</a>") === "<a><a><b>가나</b>다라<b>마바</b><b>사아</b></a>"), "faile grap :: ", resData11.grapAdd("<a>", "</a>"));
		console.assert((resData11.grapAdd("<a>", "</a>",1) === "<a><b>가나</b>다라<b>마바</b><b>사아</b></a>"), "faile grap :: ", resData11.grapAdd("<a>", "</a>",1));
		console.assert((resData11.grap("<A>", "</A>",0 , false) === "<a><b>가나</b>다라<b>마바</b><b>사아</b>"), "faile grap :: ", resData11.grap("<A>", "</A>",0 , false));
		console.assert((resData11.grap("<A>", "</A>",1, false) === "<b>가나</b>다라<b>마바</b><b>사아</b>"), "faile grap :: ", resData11.grap("<A>", "</A>",1, false));
*/

/**
 * String grap function
 *
 * @param	{string} prifix start string
 * @param	{string} subfux end string
 * @param	{int} idx prifix index
 * @return  {bool} caseSensitive 
 */
String.prototype.grap = function (prifix, subfix, idx=0, caseSensitive=true) {
	return this._grap(prifix, subfix, idx, 0, caseSensitive);
}


/**
 * String grapSub function
 *
 * @param	{string} prifix start string
 * @param	{string} subfux end string
 * @param	{int} idx prifix index
 * @param	{int} idx2 subfix index
 * @param   {bool} caseSensitive 
 * @return  {string} grap data 
 */
String.prototype.grapSub = function (prifix, subfix, idx=0, idx2=0, caseSensitive=true) {
	return this._grap(prifix, subfix, idx, idx2, caseSensitive);
}


/**
 * String grap function
 *
 * @param	{string} prifix start string
 * @param	{string} subfux end string
 * @param	{int} idx prifix index
 * @param	{int} idx2 subfix index
 * @param   {bool} caseSensitive 
 * @return  {string} prifix + grap + subfix data 
 */
String.prototype.grapAdd = function (prifix, subfix, idx=0, idx2=0, caseSensitive=true) {
	var temp = this._grap(prifix, subfix, idx, idx2, caseSensitive);

	if (temp.length>0)	
		return prifix+temp+subfix;
	
	return "";
}


/**
 * String grapRemove function
 *
 * @param	{string} prifix start string
 * @param	{string} subfux end string
 * @param	{int} idx prifix index
 * @param	{int} idx2 subfix index
 * @param   {bool} caseSensitive 
 * @return  {string} grap data
 */
String.prototype.grapRemove = function (prifix, subfix, idx=0, idx2=0, caseSensitive=true) {
	var indexs = this._grapIndexs(prifix, subfix, idx, idx2, caseSensitive);
	var temp = "";
	
	result = {};
	result.data = "";
	result.origin = this;
	
	if (indexs.startPos < 0  || indexs.endPos < 0 ) return result;
	
	temp = this.substring(indexs.startPos, indexs.endPos);
	
	result.data = temp; 
	if (indexs.endPos + subfix.length < this.length) {
//		console.log(indexs.endPos + subfix.length, "::",  this.length)
		result.origin = this.substring(indexs.endPos + subfix.length, this.length);
	} else {
		result.origin = "";
	}
	
	return result;
}



/**
 * String randomString function
 *
 * @param	{string} length random length
 * @param	{string} chars using char a is lowercase, A is uppercase, # is number, ! is Special Characters
 * @return  {string} random string
 * @example aa.randomString(5, 'Aa#!'); all charater 
 */
String.prototype.randomString = function(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}


String.prototype.randomHexString = function(byte) {
    var mask = 'ABCDEF0123456789';
    var result = '';

    for (var i = byte*2; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}


/**
 * String xmlAddCDATA function
 * add '<![CDATA[]]>'
 *
 * @return  {string} xml CDATA
 */
String.prototype.xmlAddCDATA = function () {
	var str = "";
	str = "<![CDATA[" + this + "]]>";
	
    return str;
}


/**
 * String paddingLeft function
 *
 * @param	{string} length padding length
 * @param	{string} padding char default 0
 * @return  {string} left pad string
 */
String.prototype.paddingLeft = function(len, padChar="0") {
	var paddingData = "";
	for (var i=this.length; i<len; i++) {
		paddingData += padChar;
	}
	return paddingData + this;
}


/**
 * String reverse function
 *
 * @param	{string} length padding length
 * @param	{string} padding char default 0
 * @return  {string} left pad string
 */
String.prototype.reverse = function() {
    var s = "";
    var i = this.length;
    while (i>0) {
        s += this.substring(i-1,i);
        i--;
    }
    return s;
}


/**
 * String paddingRight function
 *
 * @param	{string} length padding length
 * @param	{string} padding char default 0
 * @return  {string} right pad string
 */
String.prototype.paddingRight = function(len) {
	var paddingData = "";
	for (var i=this.length; i<len; i++) {
		paddingData += "0";
	}
	return this + paddingData;
}


/**
 * String bigEndian function
 *
 * @return  {string} big endian string
 */
String.prototype.bigEndian = function () {
	var str = this;
	var temp = "";
	
	for (var i=str.length/2; i>0; i--) {
		temp += str.substr((i-1)*2, 2);
	}
	
	return temp;
}


/**
 * String encode function
 *
 * @param   {string} charset
 * @returns {string} encoded string
 */
String.prototype.encode = function(to) {
	return textEncode(this, to);
}


/**
 * String encodeUnicodeHtml function
 *
 * @param   {string} delimeter charater
 * @returns {string} 문자열 --> HTML 정식 유니코드 문자열
 */
String.prototype.encodeUnicodeHtml = function(delimeter) {
    var str = this || '';

    var ret = [];
    var strs = str.split('');

    for (var i = 0, length = strs.length; i < length; i++) {
    	if (delimeter) {
	        ret.push('&#' + strs[i].charCodeAt(0) + delimeter);
    	} else {
	        ret.push('&#' + strs[i].charCodeAt(0));
    	}
    }

    return ret.join('');
}


/**
 * String encodeUnicodeHtml function
 *
 * @param   {string} delimeter charater
 * @returns {string} HTML 정식 유니코드 문자열 --> 문자열
 */
String.prototype.decodeUnicodeHtml = function(delimeter) {
    var unicodes = this.split(delimeter);

    var ret = [];
    for (var i = 0, length = unicodes.length; i < length; i++) {
		if (unicodes[i])
	    	ret.push(String.fromCharCode(parseInt(unicodes[i].replace('&#', ''), 10)));
    }

    return ret.join('');
}


/*
// 문자열 --> 유니코드 문자열
String.prototype.encodeUnicode = function() {
    var str = this || '';

    var ret = [];
    var strs = str.split('');

    for (var i = 0, length = strs.length; i < length; i++) {
        ret.push(escape(strs[i]).replace('%', '\\'));
    }

    return ret.join('');
}

// 유니코드 문자열 -- 문자열
// ToDo : 테스트 중.
String.prototype.decodeUnicode = function() {
	var aa = this.textEncode('UCHAR');
	
	var unicodes = this.split("\\u");
    
    
    
    var ret = [];

    for (var i = 0, length = unicodes.length; i < length; i++) {
		if (unicodes[i])
	        ret.push(unescape(unicodes[i]));
    }

    return ret.join('');
}
*/

/**
 * String makeDERRSAKey function
 *
 * @param 	{string} RSA KEY
 * @param 	{string} RSA type
 * @returns {string} der encoded RSAKEY string
 */
String.prototype.makeDERRSAKey = function(m, n) {
	var b2byte = (m.length > 256);
	var pkeyData = "";
	var sizeString = ((m.length/2) + 1).toString(16);
	if (b2byte) {
		pkeyData = "0282" + sizeString.paddingLeft(4)+"00" + m + "0203";
	} else {
		pkeyData = "0281" + sizeString.paddingLeft(2)+"00" + m + "0203";
	}
	pkeyData += n.paddingLeft(6);
	
	sizeString = (pkeyData.length/2).toString(16);
	if (b2byte) {
		pkeyData = "3082" + sizeString.paddingLeft(4) + pkeyData;
	} else {
		pkeyData = "3081" + sizeString.paddingLeft(2) + pkeyData;
	}
	
	//bitstring asn
	sizeString = ((pkeyData.length/2) +1).toString(16);
	if (b2byte) {
		pkeyData = "0382" + sizeString.paddingLeft(4) + "00" + pkeyData;
	} else {
		pkeyData = "0381" + sizeString.paddingLeft(2) + "00" + pkeyData;
	}


	//RSA OID ADD OID iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-1(1) rsaEncryption(1) and null
	pkeyData = "300D06092A864886F70D010101" + "0500" + pkeyData;
	
	sizeString = (pkeyData.length/2).toString(16);
	if (b2byte) {
		pkeyData = "3082" + sizeString.paddingLeft(4) + pkeyData;
	} else {
		pkeyData = "3081" + sizeString.paddingLeft(2) + pkeyData;
	}
	
	return pkeyData;
}


/**
 * makeDERRSAKey
 * 인자 데이터가 유효한 데이터인지 확인하는 함수 remove function
 *
 * @param data
 * @returns {Boolean}
 */
this.isValidData = function(initData) {
	if (typeof initData == "undefined")
		return false;
	
	if (initData == null)
		return false;
			
	initData = initData.trim();
	
	if (initData != null && initData != "" && initData != "undefined") {
		return true;
	} else {
		return false;
	}	 
}


/**
 * Chekc ImageType by Masic number 
 * @param datagetImageType
 * @returns {String}
 */
String.prototype.getImageType = function(){
	var type = "img/jpeg";
		console.log(this);
	if(this.startsWith("424D")) {							// Bitmap format(.bmp)
		consolthise.log("img/bmp");
	} else if(this.startsWith("53494D504C45")) {			// FITS format(.fits)
		console.log("img/fits");
	} else if(this.startsWith("47494638")) {				// GIF format(.gif)
		console.log("img/gif");
	} else if(this.startsWith("474B534D")) {				// Graphics Kernel System(.gks)
		console.log("img/gks");
	} else if(this.startsWith("01DA")) {					// IRIS rgb format(.rgb)
		console.log("img/rgb");
	} else if(this.startsWith("F10040BB")) {				// ITC (CMU WM) format(.itc)
		console.log("img/itc");
	} else if(this.startsWith("FFD8FFE0")) {				// JPEG File Interchange Format(.jpg)
		console.log("img/jpeg");
	} else if(this.startsWith("49494E31")) {				// NIFF (Navy TIFF)(.nif)
		console.log("img/nif");
	} else if(this.startsWith("56494557")) {				// PM format(.pm)
		console.log("img/pm");
	} else if(this.startsWith("89504E47")) {				// PNG format(.png)
		console.log("img/png");
	} else if(this.startsWith("2521")) {					// Postscript format(.[e]ps)
		console.log("img/[e]ps");
	} else if(this.startsWith("59A66A95")) {				// Sun Rasterfile(.ras)
		console.log("img/ras");
	} else if(this.startsWith("xxxxxx")) {					// Targa format(.tga)
		console.log("img/tga");
	} else if(this.startsWith("4D4D002A")) {				// TIFF format (Motorola - big endian)(.tif)
		console.log("img/tif");
	} else if(this.startsWith("49492A00")) {				// TIFF format (Intel - little endian)(.tif)
		console.log("img/tif");
	} else if(this.startsWith("xxxx")) {					// X11 Bitmap format(.xbm)
		console.log("img/xbm");
	} else if(this.startsWith("67696D70207863662076")) {	// XCF Gimp file structure(.xcf)
		console.log("img/xcf");
	} else if(this.startsWith("23464947")) {				// Xfig format(.fig)
		console.log("img/fig");
	} else if(this.startsWith("2F2A2058504D202A2F")) {		// XPM format(.xpm)
		console.log("img/xpm");
	}
      
	return type;
}

/**
 * Check Identity number 
 * @param string
 * @returns {Boolean}
 *
 * 주민등록번호의 규칙 ==============================================================================
 * -앞의 6자리는 생년월일을 나타낸다
 * -뒤의 7자리중 첫 번 째 자리는 성별을 나타낸다(1900년대 생이면 남자는 1, 여자는 2, 2000년대 생이면 남자는 3, 여자는 4)
 * - 맨 마지막 한 자리를 제외하고 각 자릿수의 숫자들에 각각 지정된 숫자들을 곱해서, 그값을 모두 더한다.
 *
 * 예)
 *   1    2    3    4    5    6  -  1    2    3    4    5    6    7(주민등록번호)
 *   x    x    x    x    x    x     x    x    x    x    x    x
 *   2    3    4    5    6    7     8    9    2    3    4    5      (곱할 수) 
 *  --------------------------------------------------    
 *   n1 +n2 +n3 +n4 +n5 +n6  +n7 +n8 +n9 +n10 +n11+n12  =N  
 *
 * 각 자릿수에 지정된 수의 곱을  더한 값을 N이라고 하면,
 *
 * N을 11로 나눈 나머지를 11에서 뺀 수가 주민등록번호 마지막 자릿수와 일치하면 정상적인 주민등록번호이다.
 *
 * 즉  "11 - (N % 11) = 마지막 자릿수" 가 된다
 *
 * 하지만 N의 값이 11로 나누어 떨어지거나 나머지가 1이라면 위 식의 값은 10 또는 11이 된다. 
 * 마지막 자릿수는 1자리이기 때문에 이런 경우에는 비교할 때 같지 않은 것으로 처리되기 때문에 
 * 위 식을 다시 한번 10으로 나누어 그 나머지를 취하여 마지막 자릿수와 비교해야 한다. 
 * 따라서, 위 식을 다음과 같이 수정해야 한다.
 *
 * (11 - (N % 11)) % 10 = 마지막 자릿수
 */
String.prototype.check_identity = function() {
	
	var	identityNo = this;
	//주민등록 번호 13자리를 검사한다.
    var fmt = /^\d{7}\d{6}$/;  //포멧 설정
    if (!fmt.test(identityNo)) {
        return false;
    }
    
    // 생년월일 검사
    var birthYear = "";
    var genderNum = identityNo.charAt(6);
	if (genderNum == "1" || genderNum == "2" || genderNum == "5" || genderNum == "6") {
		birthYear = "19";
	} else if (genderNum == "3" || genderNum == "4" || genderNum == "7" || genderNum == "8") {
		birthYear = "20";
	}
	birthYear += identityNo.substr(0, 2);
	
	var birthMonth = identityNo.substr(2, 2) - 1; //Set the month (0-11)
    var birthDate = identityNo.substr(4, 2);
    var birth = new Date(birthYear, birthMonth, birthDate);
    
    if (birth.getYear() % 100 != identityNo.substr(0, 2) ||
        birth.getMonth() != birthMonth ||
        birth.getDate() != birthDate) {
        return false;
    }
	
	var buf = new Array(13);
    for (var i = 0; i < 13; i++) {
        buf[i] = parseInt(identityNo.charAt(i));
    }
	
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
    for (var sum = 0, i = 0; i < 12; i++) {
        sum += (buf[i] *= multipliers[i]);
    }
	
	if (Number(genderNum) > 4) {
		//주민등록번호 7번째 자리수가 5,6,7,8 일경우 외국인
    	if ((13 - (sum % 11)) % 10 != buf[12]) {
        	return false;
        }    
	} else {
		//내국인
        if ((11 - (sum % 11)) % 10 != buf[12]) {
            return false;
        }
	}
    return true;
}

/**
 * Check date string  
 * 날짜 유효성 검증
 * @param {int} 0 ~ 3, default=3
 * @returns {Boolean}
 */
String.prototype.checkDateString = function(date_type) {
	// date_type
    // 		0	: yyyy 
    // 		1	: mm   
    // 		2	: yyyymm
    //      3   : yyyymmdd  (default)
    
    var len_check = 0;
    var reg_check;
    
    
    switch (date_type) {
        case 0:
            len_check = 4;
            reg_check = /^([0-9]{4})$/;
            break;
        
        case 1:
            len_check = 2;
            reg_check = /^(0[1-9]|1[0-2])$/;
            break;
        
        case 2:
            len_check = 6;
            reg_check = /^([0-9]{4})(0[1-9]|1[0-2])$/;
            break;
        
        case 3:
        default:
            len_check = 8;
            reg_check = (/^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(?:0[13578]|1[02])31)|(?:(?:0[1,3-9]|1[0-2])(?:29|30)))$|^(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))0229)$|^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:0?[1-9])|(?:1[0-2]))(?:0?[1-9]|1\d|2[0-8])$/);
			break;
    }
	
	return  (this.match(reg_check) != null && this.length == len_check);
}

