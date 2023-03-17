import { IsFullName } from "./is-nombre.validation";

describe('IsFullName', () => {
  test('should return true for a valid ame', () => {
    // Arrange
    const validCristian = 'Cristian';
    const max = 20;
    const expected = false;

    // Act
  
    const result = IsFullName(validCristian,max);

    // Assert
    expect(result).toBe(expected);
  });

  test('should return false for an invalid nombre', () => {
    // Arrange
    const validCristian = 'asdasdasdasdasdasdasdasdasdasd';
    const max = 20;
    const expected = true;

    // Act
    const result = IsFullName(validCristian,max);

    // Assert
    expect(result).toBe(expected);
  });
});