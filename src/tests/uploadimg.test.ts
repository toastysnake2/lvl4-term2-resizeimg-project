import request from 'supertest';
import express from 'express';
import uploadimgroute from '../routes/api/uploadimgroute';

const app = express();

app.use(express.json());
app.use('/', uploadimgroute);

const fakefile = Buffer.from('valid jpg image');

request(app)
  .post('/upload')
  .attach('file', fakefile, { filename: 'fake.jpg', contentType: 'image/jpeg' })
  .end((error, res) => {
    if (error) throw error;
    console.log(`test results ${res.status} ${res.body.message}`);

    if (res.status === 200) {
      console.log('upload test passed');
    } else {
      console.log('upload test failed');
    }
  });
