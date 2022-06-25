describe('expectations', () => {
    test('Math Test', () => {
        // Use .toBe for simple comparisons
        expect('Some String').toBe('Some String')
        expect(13).toBe(13)
        expect(1 + 2).toBe(3)

        expect(2 + 2).not.toBe(5)

        // Use .toEqual when comparing complex types
        expect({ type: 'array' }).toEqual({ type: 'array' })
        expect([13]).toEqual([13])
        expect([...[1, 2, 3]]).toEqual([1, 2, 3])

        // Use property Matchers if the final value is unknown
        const result = {
            value: Date.now() // A random Number
        }

        expect(result).toEqual({
            value: expect.any(Number)
        })
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);
    })
    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3);           This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
    });
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });
})