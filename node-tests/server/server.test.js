const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return hello world response', done => {
	request(app)
		.get('/')
		.expect(200)
		.expect(res => {
			expect(res.body).toInclude({
				name: 'Todo App v1.0',
			});
		})
		.end(done);
});
