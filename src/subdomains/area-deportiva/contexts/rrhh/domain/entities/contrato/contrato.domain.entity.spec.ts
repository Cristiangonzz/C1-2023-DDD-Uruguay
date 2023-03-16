import { ContratoDomainEntity } from "./contrato.domain-entity";

describe('ContratoDomainEntity', () => {
    let entity: ContratoDomainEntity;
  
    beforeEach(() => {
      entity = new ContratoDomainEntity();
    });
  
    it('should be defined', () => {
      expect(entity).toBeDefined();
    });
  
    it('should have a contratoId property', () => {
      // Arrange
      const contratoId = '9897be3f-e833-404d-be67-8a125918f802';
  
      // Act
      entity.contratoId = contratoId;
  
      // Assert
      expect(entity.contratoId).toBeDefined();
    });
  
    it('should have a empleadoId property', () => {
      // Arrange
      const empleadoId = '9898be3f-e833-404d-be67-8a125918f802';
  
      // Act
      entity.empleadoId = empleadoId;
  
      // Assert
      expect(entity.empleadoId).toBeDefined();
    });

    it('should have a fechaFinalizacion property', () => {
        // Arrange
        const fechaFinalizacion = '16/09/2025';
    
        // Act
        entity.fechaFinalizacion = fechaFinalizacion;
    
        // Assert
        expect(entity.fechaFinalizacion).toBeDefined();
      });



      
      it('should have a costo property', () => {
        // Arrange
        const costo = 20000;
    
        // Act
        entity.costo = costo;
    
        // Assert
        expect(entity.costo).toBeDefined();
      });



    it('should have a state property', () => {
      // Arrange
      const state = true;
  
      // Act
      entity.state = state;
  
      // Assert
      expect(entity.state).toBeDefined();
    });
  
  });
  