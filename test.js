import expect from 'expect'
import { permutations } from './index'

function factorial(n) {
  let product = 1
  for (let i = n; i > 1; i--) {
    product *= i
  }

  return product
}

describe('permutations', () => {
  it('generates N factorial leaves', () => {
    expect(permutations('a', 'c', 'd').length).toEqual(factorial(3))
  })

  it('generates unique paths', () => {
    const leaves = permutations('a', 'b', 'c', 'c', 'd', 'd', 'd')
    const expectedCount = factorial(7) / (factorial(2) * factorial(3))
    expect(leaves.length).toEqual(expectedCount)
  })
})
