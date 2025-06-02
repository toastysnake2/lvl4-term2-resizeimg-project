import request from 'supertest';
import express from 'express';
import resizeimgroute from '../routes/api/resizeimg';

const app = express();

app.use(express.json());
app.use('/', resizeimgroute);

request(app)
  .get('/resize')
  .query({ name: 'bonjour.jpg', width: 150, height: 150 })
  .end((error, res) => {
    if (error) throw error;
    console.log(`test results ${res.status} ${res.headers['content-type']}`);

    if (res.status === 200) {
      console.log('resize test passed');
    } else {
      console.log('resize test failed');
    }
  });
