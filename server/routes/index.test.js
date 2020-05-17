<<<<<<< HEAD
import express from 'express';
import request from 'supertest';
import routes from '.';

describe('The Server', () => {
  const app = express();
  app.use('/', routes);
=======
import express from 'express'
import request from 'supertest'
import routes from '.'

describe('The Server', () => {
  const app = express()
  app.use('/', routes)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  test('serves as an example endpoint', done => {
    request(app)
      .get('/api/tags')
      .expect(200)
<<<<<<< HEAD
      .expect(response => expect(response.body).toEqual(expect.arrayContaining(['Node'])))
      .then(() => done());
  });
=======
      .expect(response =>
        expect(response.body).toEqual(expect.arrayContaining(['Node']))
      )
      .then(() => done())
  })
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  test('returns HTML on an unknown endpoint', done => {
    request(app)
      .get('/*')
<<<<<<< HEAD
      .expect(response => expect(response.header['content-type']).toContain('text/html'))
      .then(() => done());
  });
});
=======
      .expect(response =>
        expect(response.header['content-type']).toContain('text/html')
      )
      .then(() => done())
  })
})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
