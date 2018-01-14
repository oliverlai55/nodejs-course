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

// Make a new test
// assert 200
// Assert that you exist in users array
it('should return my user object', done => {
	request(app)
		.get('/users')
		.expect(200)
		.expect(res => {
			expect(res.body).toInclude({
				name: 'Oliver Lai',
				age: 28,
			});
		})
		.end(done);
});
