const AddNumber = require('./myCode')

test('Add numbers up',()=>{
  expect(AddNumber(1,2)).toBe(3)
})