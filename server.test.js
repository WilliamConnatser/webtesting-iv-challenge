const request = require('supertest');
const server = require('./server');

describe('server', () => {
    it('Set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    it('GET /', () => {
        return request(server).get('/').expect(200);
    });

    it('Use async/await', async () => {
        const res = await request(server).get('/')

        expect(res.status).toBe(200);
    });

    it('Should return JSON use callback', done => {
        request(server)
            .get('/')
            .then(res => {
                expect(res.type).toBe('application/json'); // Content-Type
                done();
            });
    });

    it('Should return { api: "up" }', () => {
        const expected = {
            api: "up"
        };
        return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual(expected);
            });
    });
});