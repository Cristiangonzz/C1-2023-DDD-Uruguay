import { IsNumber } from "./is-number.validation";

describe('IsNumber', () => {
  test('should return true for a valid number', () => {
    // Arrange
    const validNumber: number = 10;
    const expected = true;

    // Act
  
    const result = IsNumber(validNumber);

    // Assert
    expect(result).toBe(expected);
  });

});