import { EmpleadoDomainEntity } from "./EmpleadoDomainEntity";

describe('EmpleadoDomainEntity', () => {
    let entity: EmpleadoDomainEntity;
  
    beforeEach(() => {
      entity = new EmpleadoDomainEntity();
    });
  
    it('should be defined', () => {
      expect(entity).toBeDefined();
    });
  
    it('should have a usuarioId property', () => {
      // Arrange
      const empleadoId = '9297be3f-e833-404d-be67-8a125918f802';
  
      // Act
      entity.empleadoId = empleadoId;
  
      // Assert
      expect(entity.empleadoId).toBeDefined();
    });
  
    it('should have a nombre property', () => {
      // Arrange
      const nombre = 'Cristian';
  
      // Act
      entity.nombre = nombre;
  
      // Assert
      expect(entity.nombre).toBeDefined();
    });

    it('should have a tipoEmpleado property', () => {
        // Arrange
        const tipoEmpleado = 'Jugador';
    
        // Act
        entity.tipoEmpleado = tipoEmpleado;
    
        // Assert
        expect(entity.tipoEmpleado).toBeDefined();
      });

      it('should have a nacionalidad property', () => {
        // Arrange
        const nacionalidad = 'Uruguay';
    
        // Act
        entity.nacionalidad = nacionalidad;
    
        // Assert
        expect(entity.nacionalidad).toBeDefined();
      });

      
      it('should have a edad property', () => {
        // Arrange
        const edad = 20;
    
        // Act
        entity.edad = edad;
    
        // Assert
        expect(entity.edad).toBeDefined();
      });

      it('should have a salario property', () => {
        // Arrange
        const salario = 100000;
    
        // Act
        entity.salario = salario;
    
        // Assert
        expect(entity.salario).toBeDefined();
      });
  


    it('should have a documento property', () => {
      // Arrange
      const documento = '55975866';
  
      // Act
      entity.documento = documento;
  
      // Assert
      expect(entity.documento).toBeDefined();
    });
  
  });
  