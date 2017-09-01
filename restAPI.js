'use strict';

const request = require('request');
const base_url = 'https://jsonplaceholder.typicode.com/users';
//const should = require('chai').should();
var date;

describe('testing rest web-service', function (){
	
//we have to add is a done callback. Since Node.js is asynchronous, 
//the it function will finish before our expect function does.
 	it('should returns status code 200', function(done){
 		request.get(base_url, function(error,response,body){
 			expect(response.statusCode).toBe(200);
 			done();
 		});
 	});

//the content-type header exists in the obtained response
 	it('should the content-type header exists', function(done){
 		request.get(base_url, function(error,response,body){
 			//console.log('Content-Type: '+ JSON.stringify(response.headers));
 			expect(JSON.stringify(response.headers)).not.toBe(null);
 			done();
 		});
 		
 	});

//the value of the content-type header is application/json
	it('should the value of the content-type header is application/json', function(done){
 		request.get(base_url, function(error,response,body){
 			expect(JSON.stringify(response.headers)).toContain('application/json');
 			done();
 		});
 		
 	});

//the content of the response body is the array of 10 users
 	it('should the content-type header exists in the obtained response', function(done){
 		request.get(base_url, function(error,response,body){ 
 			if(response.statusCode==200){
 				date=JSON.parse(body);
 				let countUsers=date.length;
 				expect(countUsers).toEqual(10);
 			};
 			done();
 		});
 		
 	});

 	
  });

//for running test in cmd types npm test

