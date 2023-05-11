import caesarCipher from "./caesarCipher"

test('Reverse String', () => {
    expect(caesarCipher('BVAUHDSBFGHSBDFILGBISJBGFSÇOJGSDFG DDD')).toMatch('swfjvnbsrtvbsnrqatsqbistrbundefinedzitbnrt*nnn')
  })

  