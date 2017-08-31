'use strict';

let request = require('request');
let base_url = 'https://jsonplaceholder.typicode.com/users';
let should = require('chai').should();

describe('testing rest web-service', function (){
	
//we have to add is a done callback. Since Node.js is asynchronous, 
//the it function will finish before our expect function does.
//  	it('should returns status code 200', function(done){
//  		request.get(base_url, function(error,response,body){
//  			expect(response.statusCode).toBe(200);
//  			done();
//  		});
//  	});

// //the content-type header exists in the obtained response
//  	it('should the content-type header exists', function(done){
//  		request.get(base_url, function(error,response,body){
//  			//console.log('Content-Type: '+ JSON.stringify(response.headers));
//  			expect(JSON.stringify(response.headers)).not.toBe(null);
//  			done();
//  		});
 		
//  	});

// //the value of the content-type header is application/json
// 	it('should the value of the content-type header is application/json', function(done){
//  		request.get(base_url, function(error,response,body){
//  			expect(JSON.stringify(response.headers)).toContain('application/json');
//  			done();
//  		});
 		
//  	});

//the content of the response body is the array of 10 users
 	it('should the content-type header exists in the obtained response', function(){
 		request.get(base_url, function(error,response,body){ 			
 			body.should.have.property('id').with.lengthOf(11);
 			//done();
 		});
 		
 	});

 	
  });

//in cmd types jasmine restAPI.js

