import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useCounter } from './index.mjs';

describe('index.mjs', () => {
  describe('count', () => {
    it('count is zero', function() {
      const { result } = renderHook(useCounter);
      expect(result.current.count).toBe(0);
    });
    it('can set initial value', function() {
      const { result } = renderHook(() => useCounter(100));
      expect(result.current.count).toBe(100);
    });
  });
  describe('increment', function() {
    it.each([
      [1, 1],
      [3, 3]
    ])('can increment', function(len, expected) {
      const { result, rerender } = renderHook(useCounter);
      expect(result.current.count).toBe(0);
      for (let i = 0; i < len; i += 1) {
        result.current.increment();
      }
      rerender();
      expect(result.current.count).toBe(expected);
    });
  });
  describe('decrement', function() {
    it.each([
      [1, -1],
      [3, -3]
    ])('can decrement', function(len, expected) {
      const { result, rerender } = renderHook(useCounter);
      expect(result.current.count).toBe(0);
      for (let i = 0; i < len; i += 1) {
        result.current.decrement();
      }
      rerender();
      expect(result.current.count).toBe(expected);
    });
  });
});
