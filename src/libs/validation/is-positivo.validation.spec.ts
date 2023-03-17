import { IsFullName } from "./is-nombre.validation";
import { IsPositivo } from "./is-positivo.validation";

describe('IsPositivo', () => {
  test('should return true for a valid number positivo', () => {
    // Arrange
    const valuePositivo = 10;

    const expected = true;

    // Act
  
    const result = IsPositivo(valuePositivo);

    // Assert
    expect(result).toBe(expected);
  });

  test('should return false for an invalid number positivo', () => {
    // Arrange
    const valuePositivo = -1;

    const expected = false;

    // Act
    const result = IsPositivo(valuePositivo);

    // Assert
    expect(result).toBe(expected);
  });
});