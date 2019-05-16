const db = require('./dbConfig');
const dbApi = require('./dbApi');

describe('Bullion Model', () => {
    beforeEach(async () => {
        await db('bullion').truncate();
    });

    describe('insert()', () => {
        it('should insert provided metal', async () => {
            await dbApi.insert({
                type: 'silver',
                ounces: 10
            });
            const bullion = await db('bullion');
            expect(bullion).toHaveLength(1);
        });
    });

    describe('update()', () => {
        it('should update provided metal', async () => {
            const response = await dbApi.insert({
                type: 'silver',
                ounces: 10
            });

            await dbApi.update(response[0].id, {type: 'gold'})
            
            const bullion = await db('bullion');
            expect(bullion[0].type).toBe('gold');
        });
    });
});