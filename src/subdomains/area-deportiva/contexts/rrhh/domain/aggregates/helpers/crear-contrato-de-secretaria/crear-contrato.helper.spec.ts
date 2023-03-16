import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { ContratoDomainEntity } from "../../../entities/contrato/contrato.domain-entity";
import { CesionNegociadoEventPublisher } from "../../../events/publishers/secretaria/cesion-negociado.event-publisher";
import { ContratoNegociadoEventPublisher } from "../../../events/publishers/secretaria/contrato-negociado.event-publisher";
import { IContratoDomainService } from "../../../services/secretaria/contrato.domain-service";
import { CrearContratoHelper } from "./crear-contrato.helper";

describe('CrearContratoHelper', () => {
    let service: IContratoDomainService;
    let event: ContratoNegociadoEventPublisher;
    let entity: ContratoDomainEntity;
    let helper: typeof CrearContratoHelper;
  
    beforeEach(() => {
      // Arrange
      service = {
        crearCesion: jest.fn(),
      } as unknown as IContratoDomainService;
      event = {
        publish: jest.fn(),
        response: undefined,
      } as unknown as CesionNegociadoEventPublisher;
      entity = new ContratoDomainEntity({
        contratoId: '19a48c31-1c27-4ccd-b461-2d9c29f4ef10',
        empleadoId: '29c48c31-1c27-4ccd-b461-2d9c29f4ef10',
        fechaFinalizacion: '16/03/2030',
        state: true,
      });

      // Act
      helper = CrearContratoHelper;
    });
  
    it('should be defined', () => {
      // Assert
      expect(helper).toBeDefined();
    });
  
    it('should throw AggregateRootException if service is undefined', async () => {
      // Arrange
      service = undefined as unknown as IContratoDomainService;
      const expectedMessage =
        'ContratoService no se encuentra definido';
  
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
        'ContratoNegociadoEventPublisher no se encuentra definido';
  
      // Act
      const result = () => helper(entity, service, event);
  
      // Assert
      await expect(result).rejects.toThrow(AggregateRootException);
      await expect(result).rejects.toThrow(expectedMessage);
    });
  
    it('should return entity', async () => {
      // Arrange
      service.NegociarContrato = jest.fn().mockResolvedValue(entity);
  
      // Act
      const result = await helper(entity, service, event);
  
      // Assert
      expect(result).toEqual(entity);
    });
  
    it('should set event.response', async () => {
      // Arrange
      service.NegociarContrato = jest.fn().mockResolvedValue(entity);
  
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
  