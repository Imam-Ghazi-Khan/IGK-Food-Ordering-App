import sum from "../sum";

test('should return a + b', () => { 
    const a = 2, b = 3;
    const c = sum(a,b);
    expect(c).toBe(5);
 })