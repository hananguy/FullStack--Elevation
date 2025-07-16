const Exercises = require('./code')

test('isEven method suppose to return true if the number is ever and false if the number is odd', function()
{
    const exercise = new Exercises()
    expect(exercise.isEven(2)).not.toBeFalsy();
})
test('//should remove at least one element from the array `arr`', function()
{
    const exercise = new Exercises()
    const arr = ["Computer", "TV", "Tennis"];
    const arrLength = arr.length;
    const newArrLength = exercise.removeAtLeastOne(arr).length;
    expect(arrLength).toBeGreaterThan(newArrLength);
})

test('should return a clean string without these symbols: \' ! # . , "', function()
{
    const exercise = new Exercises();
    const str = "I love you! thanks for the gift! # #"
    const newString = exercise.simplify(str);
    expect(newString).toBe("I love you thanks for the gift  ")
})