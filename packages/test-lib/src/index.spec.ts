import { expect, test } from 'vitest'
import { testLib } from '@/index'

test('Value with no arguments passed should be string', () => {
  expect(testLib()).toBe('test-lib')
})
