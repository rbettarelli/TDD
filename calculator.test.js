import * as calculator from './calculator'


test('sum', () => {
    expect(calculator.sum(5,6)).toBe(11)

})
test('minus', () => {
    expect(calculator.minus(10,6)).toBe(4)

})
test('times', () => {
    expect(calculator.times(5,6)).toBe(30)

})
test('divided', () => {
    expect(calculator.divided(10,2)).toBe(5)

})