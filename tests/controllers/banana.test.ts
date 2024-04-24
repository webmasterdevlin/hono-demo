import {describe, test, expect} from 'bun:test';
import app from '../../src'

const baseUrl = "http://localhost:8080"

describe('Users Controller', () => {
    test('GET users Should return 200 Response', async () => {
        const req = new Request(`${baseUrl}/api/users`);
        const res = await app.fetch(req)
        expect(res.status).toBe(200)
    });
    test('POST users Should return 201 Response', async () => {
        const req = new Request(`${baseUrl}/api/users`, {
            method: 'POST',
            body: JSON.stringify({name: 'John Doe', email: 'jd@gmail.com'}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await app.fetch(req);
        console.log(res)
        expect(res.status).toBe(201);
    })
})
