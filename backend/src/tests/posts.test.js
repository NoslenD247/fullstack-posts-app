import request from 'supertest';
import app from '../app.js';

describe('Posts API', () => {

    test('GET /posts', async () => {
        const response = await request(app).get('/posts');
        expect(response.status).toBe(200);
    })

    test('GET /posts devuelve un array', async () => {
        const response = await request(app).get('/posts');
        expect(Array.isArray(response.body)).toBe(true);
    })

    test('Cada item tiene name y postCount', async () => {
        const response = await request(app).get('/posts');
        const firstItem = response.body[0];
        expect(firstItem).toHaveProperty('name');
        expect(firstItem).toHaveProperty('postCount');
    })

})