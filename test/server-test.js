const request = require('supertest');

const app = require('../');
const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

const chai = require('chai');
const chaiExpect = chai.expect;

describe('GET and POST requests are working', () => {

  it('GET responds with 200, done status and text/html content type', done => {
    request(HOST)
      .get('/')
      .expect('content-type', /text\/html/)
      .expect(200, done);
  });

  it('POST responds with 200 status and application/json content type', done => {
    request(HOST)
      .post('/dunno')
      // .set('content-type', /application\/json/)
      // .send(JSON.stringify({ 'I dunno': 'success' }))
      .expect('content-type', /application\/json/)
      .expect(200, done);
  });
  
});