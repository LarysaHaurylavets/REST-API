# REST-API

1. A test to verify an http status code: 
    
    - status code of the obtained response is 200 OK
  
2. A test to verify an http response header: 


    - the content-type header exists in the obtained response
    - the value of the content-type header is "application/json; charset=utf-8"

3. A test to verify an http response body: 
    
    - the content of the response body is the array of 10 users

for running test in cmd types npm test
