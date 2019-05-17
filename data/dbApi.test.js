const db = require('./dbConfig');
const dbApi = require('./dbApi');

describe('Bullion Model', () => {
    beforeEach(async () => {
        await db('bullion').truncate();
    });

    describe('insert()', () => {
        it('should insert bullion', async () => {
            await dbApi.insert({
                type: 'silver',
                ounces: 10
            });
            const bullion = await db('bullion');
            expect(bullion).toHaveLength(1);
        });
    });

    describe('update()', () => {
        it('should update provided bullion type', async () => {
            const response = await dbApi.insert({
                type: 'silver',
                ounces: 10
            });

            await dbApi.update(response[0], {type: 'gold'})
            
            const bullion = await db('bullion');
            expect(bullion[0].type).toBe('gold');
        });
    });

    describe('remove()', () => {
        it('should remove provided bullion type', async () => {
            const response = await dbApi.insert({
                type: 'silver',
                ounces: 10
            });

            await dbApi.remove(response[0]);
            
            const bullion = await db('bullion');
            expect(bullion).toHaveLength(0);
        });
    });

    describe('getall()', () => {
        it('should get all bullion ', async () => {
            await dbApi.insert({
                type: 'silver',
                ounces: 10
            });
            await dbApi.insert({
                type: 'gold',
                ounces: 1
            });
            
            const bullion = await dbApi.getAll();
            expect(bullion).toHaveLength(2);
        });
    });

    describe('findById()', () => {
        it('should find bullion by id', async () => {
            const response = await dbApi.insert({
                type: 'silver',
                ounces: 10
            });

            const insertedItem = await dbApi.findById(response[0])

            expect(insertedItem.type).toBe('silver');
        });
    });
});