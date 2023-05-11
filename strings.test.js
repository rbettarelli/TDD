import * as functions from './strings';


  test('Captalize first letter', () => {
    expect(functions.captalize('ricardo')).toMatch('Ricardo')
    
  })

  test('Reverse String', () => {
    expect(functions.reverse('ricardo')).toMatch('odraciR')
  })