const  vastBaseUrl = "http://localhost:8080";

const getAPIBackend = function(){
    if (window.location.href.indexOf("localhost") > -1) {
        return "https://jsonplaceholder.typicode.com";
    }
    return "/api/v1.0";
}

const getAuthToken = function(){
    var token =  window.localStorage.getItem('ngStorage-token');
    if (!token) {
        // Temporary token for development
        return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjExMCwiZ3JvdXBzIjpbM10sImlzcyI6Imh0dHA6XC9cL3d3dy5zdHJlYW1hdGUuY29tIiwiaWF0IjoxNjE0ODMyNjg2LCJleHAiOjE2MTQ5MTkwODZ9.fBdYkN0YolLwX4DhzTwvIs7iY9wYy1sFmhU7qJWjxtc";
    }
    token = token.replace(/["]+/g, '');
    return token;
}

const isUrl = function(str){
  var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)){
    return true;
  }else{
    return false;
  }
}


export {vastBaseUrl, getAuthToken, getAPIBackend, isUrl};