describe('Predicate function', function() {

    it('toBe is using strict equal, ===', function() {
        expect(true).toBe(true);
        expect(false).not.toBe(true);
    });

    it('toEqual can compare literally and between objects', function() {
        var a = 1 + 2,
            b = {
                name: 'jarvis'
            },
            c = {
                name: 'jarvis'
            };

        expect(a).toEqual(3);
        expect(b).toEqual(c);
    });

    it('toMatch is using reqular expressions', function() {
        var a = 'abcd';

        expect(a).toMatch(/cd$/);
    });

    it('toBeDefined compares against undefined', function() {
        var a = {
            name: 'jarvis'
        };

        expect(a.name).toBeDefined();
        expect(a.age).not.toBeDefined();
    });

    it('toBeUndefined compares against undefined', function() {
        var a = {
            name: 'jarvis'
        };

        expect(a.name).not.toBeUndefined();
        expect(a.age).toBeUndefined();
    });

    it('toBeNull compares against null', function() {
        var a = null;

        expect(a).toBeNull();
    });

    it('toBeTruthy is for boolean casting testing', function() {
        var a, b = 'foo';

        expect(a).not.toBeTruthy();
        expect(b).toBeTruthy();
    });

    it('toBeFalsy is for boolean casting testing', function() {
        var a, b = 'foo';

        expect(a).toBeFalsy();
        expect(b).not.toBeFalsy();
    });

    it('toContain is for finding an item in an array', function() {
        var a = ['a', 'b', 'c'];

        expect(a).toContain('a');
        expect(a).not.toContain('d');
    });

    it('toBeLessThan is for mathematical comparisons', function() {
        var a = 1.12, b = 1.13;

        expect(a).toBeLessThan(b);
    });

    it('toBeGreaterThan is for mathematical comparisons', function() {
        var a = 1.12, b = 1.13;

        expect(b).toBeGreaterThan(a);
    });

    it('toBeCloseTo is for precision math comparisons', function() {
        var a = 1.12, b = 1.13;

        expect(a).toBeCloseTo(b, 1);
    });

    it('toThrow is for testing if a function throws an exeption', function() {
        var a = function(b) {
            return b;
        };

        expect(a.bind(null, 1)).not.toThrow();
    });
});