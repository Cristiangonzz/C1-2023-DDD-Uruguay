import { AggregateRootException } from "../../../../../../../../libs/sofka/exceptions/aggregate-root.exception";
import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";
import { EmpleadoAgregadoEventPublisher } from "../../../events/publishers/staff-deporitvo/empleado-agregado.event-publisher";
import { IEmpleadoDomainService } from "../../../services/staff-Deportivo/empleado.domain-service";
import { CrearEmpleadoHelper } from "./crear-empleado.helper";

describe('CrearEmpleadoHelper', () => {
    
    let service: IEmpleadoDomainService;
    let event: EmpleadoAgregadoEventPublisher;
    let entity: EmpleadoDomainEntity;
    let helper: typeof CrearEmpleadoHelper;
  
    beforeEach(() => {
      // Arrange
      service = {
        crearCesion: jest.fn(),
      } as unknown as IEmpleadoDomainService;
      event = {
        publish: jest.fn(),
        response: undefined,
      } as unknown as EmpleadoAgregadoEventPublisher;
      entity = new EmpleadoDomainEntity({
        empleadoId: '11r48c31-1c27-4ccd-b461-2d9c29f4ef10',
        nombre: 'Cristian Gonzalez',
        documento: '55975866',
        tipoEmpleado: 'Jugador',
        nacionalidad: 'Uruguay',
        edad: 24,
        salario: 100,
      });

      // Act
      helper = CrearEmpleadoHelper;
    });
  
    it('should be defined', () => {
      // Assert
      expect(helper).toBeDefined();
    });
  
    it('should throw AggregateRootException if service is undefined', async () => {
      // Arrange
      service = undefined as unknown as IEmpleadoDomainService;
      const expectedMessage =
        'EmpleadoService no se encuentra definido';
  
      // Act
      const result = () => helper(entity, service, event);
  
      // Assert
      await expect(result).rejects.toThrow(AggregateRootException);
      await expect(result).rejects.toThrow(expectedMessage);
    });
  
    it('should throw AggregateRootException if event is undefined', async () => {
      // Arrange
      event = undefined as unknown as EmpleadoAgregadoEventPublisher;
      const expectedMessage =
        'EmpleadoAgregadoEventPublisher no se encuentra definido';
  
      // Act
      const result = () => helper(entity, service, event);
  
      // Assert
      await expect(result).rejects.toThrow(AggregateRootException);
      await expect(result).rejects.toThrow(expectedMessage);
    });
  
    it('should return entity', async () => {
      // Arrange
      service.AgregarEmpleado = jest.fn().mockResolvedValue(entity);
  
      // Act
      const result = await helper(entity, service, event);
  
      // Assert
      expect(result).toEqual(entity);
    });
  
    it('should set event.response', async () => {
      // Arrange
      service.AgregarEmpleado = jest.fn().mockResolvedValue(entity);
  
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
  