'use strict';

const request = require('request');
const base_url = 'https://jsonplaceholder.typicode.com/users';


describe('testing rest web-service', function (){
	
//we have to add is a done callback. Since Node.js is asynchronous, 
//the it function will finish before our expect function does.
 	it('should returns status code 200', function(done){
 		request.get(base_url, function(error,response,body){
 			expect(response.statusCode).toBe(200);
 			done();
 		});
 	});

 	it('should the content-type header exists in the obtained response', function(done){
 		request.get(base_url, function(error,response,body){
 			console.log('Content-Type: '+ response.headers['Content-Type']);
 			done();
 		});

 		//
 	});

});

//in cmd types jasmine restAPI.js

