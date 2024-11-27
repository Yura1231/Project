import request from 'supertest';
import app from '../server'; 

describe('POST /posts', () => {
  it('should create a new post', async () => {
    const response = await request(app)
      .post('/posts')
      .send({
        title: 'New Post',
        text: 'This is a new post.',
        tags: ['tag1', 'tag2'],
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'New Post');
  });
});
