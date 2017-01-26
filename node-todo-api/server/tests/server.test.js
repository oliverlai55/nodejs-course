const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todo) => {
          expect(todo.length).toBe(1);
          expect(todo[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    // make Post request, send 'empty object'
    //expect 400, length of todo is 0
    var text2 = {};

    request(app)
      .post('/todos')
      .send({text2})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todo) => {
          expect(todo.length).toBe(0);
          done()
        }).catch((e) => done(e));
      });
  });
});
