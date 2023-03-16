import { v4 as uuidv4 } from 'uuid';
import { EmpleadoAgregadoEventPublisher, EmpleadoBuscadoEventPublisher, NombreModificadoEventPublisher, DocumentoModificadoEventPublisher, TipoEmpleadoModificadoEventPublisher, SalarioModificadoEventPublisher, StaffDeportivoCreadoEventPublisher, FechaTramiteModificadaEventPublisher, StateModificadoEventPublisher, TramiteAgregadoEventPublisher, TramiteBuscadoEventPublisher } from "../../events/publishers";
import { IEmpleadoDomainService } from "../../services/staff-Deportivo/empleado.domain-service";
import { IStaffDeportivoDomainService } from "../../services/staff-Deportivo/staff-deportivo.domain-service";
import { ITramiteDomainService } from "../../services/staff-Deportivo/tramite.domain-service";
import { StaffDeportivoAggregate } from "./staff-deportivo.aggregate";
import { EmpleadoDomainEntity } from "../../entities/empleado/EmpleadoDomainEntity";
import { TramiteDomainEntity } from '../../entities/tramite/tramite.entity.interface';

import * as crearTramite from '../helpers/crear-tramite-de-staff-deportivo/crear-tramite.helper';
import * as buscarTramite from '../helpers/buscar-tramite-de-staff-deportivo/buscar-tramite.helper';
import * as crearStaffDeportivo from '../helpers/crear-staff-deportivo-de-staff-deportivo/crear-staff-deportivo.helper';

import * as crearEmpleado from '../helpers/crear-empleado-de-staff-deportivo/crear-empleado.helper';
import * as buscarEmpleado from '../helpers/buscar-empleado-de-staff-deportivo/buscar-empleado.helper';
import * as modificarNombre from '../helpers/modificar-nombre-empleado-de-staff-deportivo/modificar-nombre-empleado.helper';
import * as modificarDocumento from '../helpers/modificar-documento-empleado-de-staff-deportivo/modificar-documento-empleado.helper';
import * as modificarSalario from '../helpers/modificar-salario-empleado-de-staff-deportivo/modificar-salario-empleado.helper';
import * as modificarTipo from '../helpers/modificar-tipo-empleado-de-staff-deportivo/modificar-tipo-empleado.helper';
import { StaffDeportivoDomainEntity } from '../../entities/staff-deportivo/staff-deportivo.entity';



describe('StaffDeportivoAggregate', () => {
  let aggregate: StaffDeportivoAggregate;
  let staffDeportivoService: IStaffDeportivoDomainService;
  let staffDeportivoCreadoEvent: StaffDeportivoCreadoEventPublisher;
  let empleadoService: IEmpleadoDomainService;
  let tramiteService: ITramiteDomainService;
//empleado

  let empleadoAgregadoEvent: EmpleadoAgregadoEventPublisher;
  let empleadoBuscadoEvent: EmpleadoBuscadoEventPublisher;
  let nombreModificadoEvent: NombreModificadoEventPublisher;
  let documentoModificadoEvent: DocumentoModificadoEventPublisher;
  let tipoEmpleadoModificadoEvent: TipoEmpleadoModificadoEventPublisher;
  let salarioEmpleadoModificadoEvent: SalarioModificadoEventPublisher;
//tramite
  let tamiteAgregadoEvent: TramiteAgregadoEventPublisher;
  let tramiteBuscadoEvent: TramiteBuscadoEventPublisher;


  beforeEach(() => {
    staffDeportivoService = {} as IStaffDeportivoDomainService;
    empleadoService = {} as  IEmpleadoDomainService;
    tramiteService =  {} as ITramiteDomainService;

    staffDeportivoCreadoEvent = {} as StaffDeportivoCreadoEventPublisher;

    empleadoAgregadoEvent = {} as  EmpleadoAgregadoEventPublisher;
    empleadoBuscadoEvent = {} as  EmpleadoBuscadoEventPublisher;
    nombreModificadoEvent = {} as  NombreModificadoEventPublisher;
    documentoModificadoEvent = {} as  DocumentoModificadoEventPublisher;
    tipoEmpleadoModificadoEvent = {} as  TipoEmpleadoModificadoEventPublisher;
    salarioEmpleadoModificadoEvent = {} as  SalarioModificadoEventPublisher;

    tamiteAgregadoEvent = {} as TramiteAgregadoEventPublisher;
    tramiteBuscadoEvent = {} as TramiteBuscadoEventPublisher;



    
    aggregate = new StaffDeportivoAggregate({
        staffDeportivoService,
        empleadoService,
        tramiteService,
        staffDeportivoCreadoEvent,
        empleadoAgregadoEvent,
        
        empleadoBuscadoEvent,
        salarioEmpleadoModificadoEvent,
        nombreModificadoEvent,
        documentoModificadoEvent,
        tipoEmpleadoModificadoEvent,
    
        tamiteAgregadoEvent,  
        tramiteBuscadoEvent ,
    });
  });

  it('should be defined', () => {
    expect(aggregate).toBeDefined();
  });


  describe('BuscarTramite', () => {
    it('execute BuscarTramiteHelper with params', () => {
      // Arrange
      const tramiteId = uuidv4();
      const entity = new TramiteDomainEntity();
      
      jest
        .spyOn(
          buscarTramite,
          'BuscarTramiteHelper',
        )
        .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
          tramiteService,
          tramiteBuscadoEvent,
      });
      const result =
        aggregate.BuscarTramite(
          tramiteId,
        );

      // Assert
      expect(result).resolves.toEqual(entity);
      expect(
        buscarTramite.BuscarTramiteHelper,
      ).toHaveBeenCalledWith(
        tramiteId,
        tramiteService,
        tramiteBuscadoEvent,
      );
    });
  });


  describe('BuscarTramite', () => {
    it('execute BuscarTramiteHelper with params', () => {
      // Arrange
      const tramiteId = uuidv4();
      const entity = new TramiteDomainEntity();
      
      jest
        .spyOn(
          buscarTramite,
          'BuscarTramiteHelper',
        )
        .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
          tramiteService,
          tramiteBuscadoEvent,
      });
      const result =
        aggregate.BuscarTramite(
          tramiteId,
        );

      // Assert
      expect(result).resolves.toEqual(entity);
      expect(
        buscarTramite.BuscarTramiteHelper,
      ).toHaveBeenCalledWith(
        tramiteId,
        tramiteService,
        tramiteBuscadoEvent,
      );
    });
  });


  describe('BuscarEmpleado', () => {
    it('execute BuscarEmpleadoHelper with params', () => {
      // Arrange
      const empleadoId = uuidv4();
      const entity = new EmpleadoDomainEntity();
      
      jest
        .spyOn(
          buscarEmpleado,
          'BuscarEmpleadoHelper',
        )
        .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
          empleadoService,
          empleadoBuscadoEvent,
      });
      const result =
        aggregate.BuscarEmpleado(
          empleadoId,
        );

      // Assert
      expect(result).resolves.toEqual(entity);
      expect(
        buscarEmpleado.BuscarEmpleadoHelper,
      ).toHaveBeenCalledWith(
        empleadoId,
        empleadoService,
        empleadoBuscadoEvent,
      );
    });
  });


  describe('AgregarEmpleado', () => {
    it('execute CrearEmpleadoHelper with params', () => {
      // Arrange
        const entity = new EmpleadoDomainEntity();
        const expected = entity;
     
        jest
         .spyOn(crearEmpleado, 'CrearEmpleadoHelper')
         .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
        empleadoService,
        empleadoAgregadoEvent,
      });
      const result = aggregate.AgregarEmpleado(entity);

      // Assert
      expect(result).resolves.toEqual(expected);
      expect(crearEmpleado.CrearEmpleadoHelper).toHaveBeenCalledWith(
        entity,
        empleadoService,
        empleadoAgregadoEvent,
      );
    });
  });

  describe('modificarNombre', () => {
    it('execute ModificarNombreEmpleadoHelper with params', () => {
      // Arrange
      const empleadoId = uuidv4();
      const entity = new EmpleadoDomainEntity();
      
      jest
        .spyOn(modificarNombre, 'ModificarNombreEmpleadoHelper')
        .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
          empleadoService,
          nombreModificadoEvent,
      });
      const result = aggregate.modificarNombre(
        empleadoId,
        entity,
      );

      // Assert
      expect(result).resolves.toEqual(entity);
      expect(
        modificarNombre.ModificarNombreEmpleadoHelper,
      ).toHaveBeenCalledWith(
        empleadoId,
        entity,
        empleadoService,
        nombreModificadoEvent,
      );
    });
  });

  describe('modificarSalario', () => {
    it('execute ModificarSalarioEmpleadoHelper with params', () => {
      // Arrange
      const empleadoId = uuidv4();
      const entity = new EmpleadoDomainEntity();
      
      jest
        .spyOn(modificarSalario, 'ModificarSalarioEmpleadoHelper')
        .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
          empleadoService,
          salarioEmpleadoModificadoEvent,
      });
      const result = aggregate.modificarSalario(
        empleadoId,
        entity,
      );

      // Assert
      expect(result).resolves.toEqual(entity);
      expect(
        modificarSalario.ModificarSalarioEmpleadoHelper,
      ).toHaveBeenCalledWith(
        empleadoId,
        entity,
        empleadoService,
        salarioEmpleadoModificadoEvent,
      );
    });
  });

  describe('modificarDocumento', () => {
    it('execute ModificarDocumentoEmpleadoHelper with params', () => {
      // Arrange
      const empleadoId = uuidv4();
      const entity = new EmpleadoDomainEntity();
      
      jest
        .spyOn(modificarDocumento, 'ModificarDocumentoEmpleadoHelper')
        .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
          empleadoService,
          documentoModificadoEvent,
      });
      const result = aggregate.modificarDocumento(
        empleadoId,
        entity,
      );

      // Assert
      expect(result).resolves.toEqual(entity);
      expect(
        modificarDocumento.ModificarDocumentoEmpleadoHelper,
      ).toHaveBeenCalledWith(
        empleadoId,
        entity,
        empleadoService,
        documentoModificadoEvent,
      );
    });
  });

  describe('modificarTipoEmpleado', () => {
    it('execute ModificarTipoEmpleadoHelper with params', () => {
      // Arrange
      const empleadoId = uuidv4();
      const entity = new EmpleadoDomainEntity();
      
      jest
        .spyOn(modificarTipo, 'ModificarTipoEmpleadoHelper')
        .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
          empleadoService,
          tipoEmpleadoModificadoEvent,
      });
      const result = aggregate.modificarTipoEmpleado(
        empleadoId,
        entity,
      );

      // Assert
      expect(result).resolves.toEqual(entity);
      expect(
        modificarTipo.ModificarTipoEmpleadoHelper,
      ).toHaveBeenCalledWith(
        empleadoId,
        entity,
        empleadoService,
        tipoEmpleadoModificadoEvent,
      );
    });
  });


  
  
describe('CrearTramite', () => {
    it('execute CrearTramiteHelper with params', () => {
      // Arrange
        const entity = new TramiteDomainEntity();
        const expected = entity;
     
        jest
         .spyOn(crearTramite, 'CrearTramiteHelper')
         .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
        tramiteService,
        tamiteAgregadoEvent,
      });
      const result = aggregate.CrearTramite(entity);

      // Assert
      expect(result).resolves.toEqual(expected);
      expect(crearTramite.CrearTramiteHelper).toHaveBeenCalledWith(
        entity,
        tramiteService,
        tamiteAgregadoEvent,
      );
    });
  });

  describe('CrearStaffDeportivo', () => {
    it('execute CrearStaffDeportivoHelper with params', () => {
      // Arrange
        const entity = new StaffDeportivoDomainEntity();
        const expected = entity;
     
        jest
         .spyOn(crearStaffDeportivo, 'CrearStaffDeportivoHelper')
         .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
        staffDeportivoService,
        staffDeportivoCreadoEvent,
      });
      const result = aggregate.CrearStaffDeportivo(entity);

      // Assert
      expect(result).resolves.toEqual(expected);
      expect(crearStaffDeportivo.CrearStaffDeportivoHelper).toHaveBeenCalledWith(
        entity,
        staffDeportivoService,
        staffDeportivoCreadoEvent,
      );
    });
  });













})
