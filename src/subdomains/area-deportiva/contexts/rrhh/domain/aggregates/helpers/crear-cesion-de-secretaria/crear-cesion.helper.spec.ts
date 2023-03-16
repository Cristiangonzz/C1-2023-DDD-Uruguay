import { CrearCesionHelper } from "./crear-cesion.helper";
import { CesionDomainEntity } from '../../../entities/cesion/cesion.domain-entity';
import { CesionNegociadoEventPublisher } from '../../../events/publishers/secretaria/cesion-negociado.event-publisher';
import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { ICesionDomainService } from "../../../services/secretaria/cesion.domain-service";

describe('CrearCesionHelper', () => {
    let service: ICesionDomainService;
    let event: CesionNegociadoEventPublisher;
    let entity: CesionDomainEntity;
    let helper: typeof CrearCesionHelper;
  
    beforeEach(() => {
      // Arrange
      service = {
        crearCesion: jest.fn(),
      } as unknown as ICesionDomainService;
      event = {
        publish: jest.fn(),
        response: undefined,
      } as unknown as CesionNegociadoEventPublisher;
      entity = new CesionDomainEntity({
        cesionId: '19b48c31-1c27-4ccd-b461-2d9c29f4ef10',
        empleadoId: '29b48c31-1c27-4ccd-b461-2d9c29f4ef10',
        equipoNuevoId: '39b48c31-1c27-4ccd-b461-2d9c29f4ef10',
        fechaSalida: '16/03/2024',
        costo: 100,
        state: true,
      });
  
      // Act
      helper = CrearCesionHelper;
    });
  
    it('should be defined', () => {
      // Assert
      expect(helper).toBeDefined();
    });
  
    it('should throw AggregateRootException if service is undefined', async () => {
      // Arrange
      service = undefined as unknown as ICesionDomainService;
      const expectedMessage =
        'CesionService no se encuentra definido';
  
      // Act
      const result = () => helper(entity, service, event);
  
      // Assert
      await expect(result).rejects.toThrow(AggregateRootException);
      await expect(result).rejects.toThrow(expectedMessage);
    });
  
    it('should throw AggregateRootException if event is undefined', async () => {
      // Arrange
      event = undefined as unknown as CesionNegociadoEventPublisher;
      const expectedMessage =
        'CesionNegociadoEventPublisher no se encuentra definido';
  
      // Act
      const result = () => helper(entity, service, event);
  
      // Assert
      await expect(result).rejects.toThrow(AggregateRootException);
      await expect(result).rejects.toThrow(expectedMessage);
    });
  
    it('should return entity', async () => {
      // Arrange
      service.NegociarCesion = jest.fn().mockResolvedValue(entity);
  
      // Act
      const result = await helper(entity, service, event);
  
      // Assert
      expect(result).toEqual(entity);
    });
  
    it('should set event.response', async () => {
      // Arrange
      service.NegociarCesion = jest.fn().mockResolvedValue(entity);
  
      // Act
      await helper(entity, service, event);
  
      // Assert
      expect(event.response).toEqual(entity);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    afterAll(() => {
      jest.restoreAllMocks();
    });
  });
  