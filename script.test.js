import { describe, it, expect } from "vitest";
import {
  addition,
  subtraction,
  multiplication,
  division,
  operate,
} from "./script";

describe("Calculator Functions", () => {
  // Addition function tests
  describe("addition", () => {
    it("adds two positive numbers correctly", () => {
      expect(addition(2, 3)).toBe(5);
      expect(addition(100, 50)).toBe(150);
    });

    it("adds a positive and a negative number correctly", () => {
      expect(addition(5, -3)).toBe(2);
      expect(addition(-5, 10)).toBe(5);
    });

    it("adds two negative numbers correctly", () => {
      expect(addition(-2, -3)).toBe(-5);
      expect(addition(-10, -5)).toBe(-15);
    });

    it("handles zero correctly", () => {
      expect(addition(0, 5)).toBe(5);
      expect(addition(10, 0)).toBe(10);
      expect(addition(0, 0)).toBe(0);
    });

    it("handles decimal numbers correctly", () => {
      expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
      expect(addition(1.5, 2.5)).toBe(4);
    });

    it("handles large numbers correctly", () => {
      expect(addition(1000000, 2000000)).toBe(3000000);
    });
  });

  // Subtraction function tests
  describe("subtraction", () => {
    it("subtracts two positive numbers correctly", () => {
      expect(subtraction(5, 3)).toBe(2);
      expect(subtraction(10, 5)).toBe(5);
    });

    it("subtracts a larger number from a smaller number correctly", () => {
      expect(subtraction(3, 5)).toBe(-2);
      expect(subtraction(1, 10)).toBe(-9);
    });

    it("subtracts a negative number correctly", () => {
      expect(subtraction(5, -3)).toBe(8);
      expect(subtraction(-5, -3)).toBe(-2);
    });

    it("handles zero correctly", () => {
      expect(subtraction(5, 0)).toBe(5);
      expect(subtraction(0, 5)).toBe(-5);
      expect(subtraction(0, 0)).toBe(0);
    });

    it("handles decimal numbers correctly", () => {
      expect(subtraction(0.5, 0.2)).toBeCloseTo(0.3);
      expect(subtraction(2.5, 1)).toBe(1.5);
    });
  });

  // Multiplication function tests
  describe("multiplication", () => {
    it("multiplies two positive numbers correctly", () => {
      expect(multiplication(2, 3)).toBe(6);
      expect(multiplication(4, 5)).toBe(20);
    });

    it("multiplies a positive and a negative number correctly", () => {
      expect(multiplication(3, -4)).toBe(-12);
      expect(multiplication(-5, 6)).toBe(-30);
    });

    it("multiplies two negative numbers correctly", () => {
      expect(multiplication(-2, -3)).toBe(6);
      expect(multiplication(-4, -5)).toBe(20);
    });

    it("handles zero correctly", () => {
      expect(multiplication(5, 0)).toBe(0);
      expect(multiplication(0, 5)).toBe(0);
      expect(multiplication(0, 0)).toBe(0);
    });

    it("handles decimal numbers correctly", () => {
      expect(multiplication(0.5, 0.5)).toBe(0.25);
      expect(multiplication(2.5, 2)).toBe(5);
    });

    it("handles large numbers correctly", () => {
      expect(multiplication(1000, 1000)).toBe(1000000);
    });
  });

  // Division function tests
  describe("division", () => {
    it("divides two positive numbers correctly", () => {
      expect(division(6, 3)).toBe(2);
      expect(division(10, 2)).toBe(5);
    });

    it("divides a positive by a negative number correctly", () => {
      expect(division(6, -3)).toBe(-2);
      expect(division(10, -2)).toBe(-5);
    });

    it("divides a negative by a negative number correctly", () => {
      expect(division(-6, -3)).toBe(2);
      expect(division(-10, -2)).toBe(5);
    });

    it("handles division by zero correctly", () => {
      expect(division(5, 0)).toBe("Silly");
    });

    it("handles zero in the numerator correctly", () => {
      expect(division(0, 5)).toBe(0);
    });

    it("handles decimal numbers correctly", () => {
      expect(division(1, 2)).toBe(0.5);
      expect(division(2.5, 0.5)).toBe(5);
    });
  });

  // Operate function tests
  describe("operate", () => {
    it("performs addition correctly", () => {
      expect(operate(2, 3, "plus")).toBe(5);
    });

    it("performs subtraction correctly", () => {
      expect(operate(5, 3, "minus")).toBe(2);
    });

    it("performs multiplication correctly", () => {
      expect(operate(2, 3, "multiply")).toBe(6);
    });

    it("performs division correctly", () => {
      expect(operate(6, 3, "divide")).toBe(2);
    });

    it("handles division by zero correctly", () => {
      expect(operate(5, 0, "divide")).toBe("Silly");
    });

    it("handles invalid operators correctly", () => {
      expect(operate(2, 3, "invalid")).toBeUndefined();
    });
  });
});
