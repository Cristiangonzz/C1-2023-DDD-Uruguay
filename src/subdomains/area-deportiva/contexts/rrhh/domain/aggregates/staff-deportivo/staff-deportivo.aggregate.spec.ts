
import { EventPublisherBase } from "../../../../../../../libs/sofka/bases/event-publisher.base";
import { EmpleadoAgregadoEventPublisher, EmpleadoBuscadoEventPublisher, NombreModificadoEventPublisher, DocumentoModificadoEventPublisher, TipoEmpleadoModificadoEventPublisher, SalarioModificadoEventPublisher, StaffDeportivoCreadoEventPublisher, FechaTramiteModificadaEventPublisher, StateModificadoEventPublisher, TramiteAgregadoEventPublisher, TramiteBuscadoEventPublisher } from "../../events/publishers";
import { IEmpleadoDomainService } from "../../services/staff-Deportivo/empleado.domain-service";
import { INegociacionDomainService } from "../../services/staff-Deportivo/negociacion.domain-service";
import { IStaffDeportivoDomainService } from "../../services/staff-Deportivo/staff-deportivo.domain-service";
import { ITramiteDomainService } from "../../services/staff-Deportivo/tramite.domain-service";
import { StaffDeportivoAggregate } from "./staff-deportivo.aggregate";
import { EquipoNuevoNegociacionModificadoEventPublisher, EquipoSalidaNegociacionModificadoEventPublisher, TipoDeNegociacionModificadoEventPublisher } from "../../events/publishers/negociacion";
import { EmpleadoDomainEntity } from "../../entities/empleado/EmpleadoDomainEntity";

import * as crearEmpleado from '../helpers/crear-empleado-de-staff-deportivo/crear-empleado.helper';


describe('StaffDeportivoAggregate', () => {
  let aggregate: StaffDeportivoAggregate;
  let staffDeportivoService: IStaffDeportivoDomainService;
  let staffDeportivoCreadoEvent: StaffDeportivoCreadoEventPublisher;
  let empleadoService: IEmpleadoDomainService;
  let negociacionService: INegociacionDomainService;
  let tramiteService: ITramiteDomainService;
//empleado

  let empleadoAgregadoEvent: EmpleadoAgregadoEventPublisher;
  let empleadoBuscadoEvent: EmpleadoBuscadoEventPublisher;
  let nombremodificadoEvent: NombreModificadoEventPublisher;
  let documentoModificadoEvent: DocumentoModificadoEventPublisher;
  let tipoEmpleadoModificadoEvent: TipoEmpleadoModificadoEventPublisher;
  let salarioModificadoEvent: SalarioModificadoEventPublisher;
//tramite
  let tamiteAgregadoEvent: TramiteAgregadoEventPublisher;
  let fechaTamiteModificadoEvent: FechaTramiteModificadaEventPublisher;
  let tramiteBuscadoEvent: TramiteBuscadoEventPublisher;

//negociacion
  let negociacionEquipoNuevoModificadoEvent: EquipoNuevoNegociacionModificadoEventPublisher;
  let negociacionEquipoSalidaModificadoEvent: EquipoSalidaNegociacionModificadoEventPublisher;
  let negociacionStateModificadoEvent: StateModificadoEventPublisher;
  let negociacionTipoNegociacionModificadoEvent: TipoDeNegociacionModificadoEventPublisher;


  beforeEach(() => {
    staffDeportivoService = {} as IStaffDeportivoDomainService;
    empleadoService = {} as  IEmpleadoDomainService;
    negociacionService = {} as  INegociacionDomainService;
    tramiteService =  {} as ITramiteDomainService;

    staffDeportivoCreadoEvent = {} as StaffDeportivoCreadoEventPublisher;

    empleadoAgregadoEvent = {} as  EmpleadoAgregadoEventPublisher;
    empleadoBuscadoEvent = {} as  EmpleadoBuscadoEventPublisher;
    nombremodificadoEvent = {} as  NombreModificadoEventPublisher;
    documentoModificadoEvent = {} as  DocumentoModificadoEventPublisher;
    tipoEmpleadoModificadoEvent = {} as  TipoEmpleadoModificadoEventPublisher;
    salarioModificadoEvent = {} as  SalarioModificadoEventPublisher;

    tamiteAgregadoEvent = {} as TramiteAgregadoEventPublisher;
    fechaTamiteModificadoEvent = {} as FechaTramiteModificadaEventPublisher;
    tramiteBuscadoEvent = {} as TramiteBuscadoEventPublisher;

//negociacion
    negociacionEquipoNuevoModificadoEvent = {} as EquipoNuevoNegociacionModificadoEventPublisher;
    negociacionEquipoSalidaModificadoEvent = {} as EquipoSalidaNegociacionModificadoEventPublisher;
    negociacionStateModificadoEvent = {} as StateModificadoEventPublisher;
    negociacionTipoNegociacionModificadoEvent = {} as TipoDeNegociacionModificadoEventPublisher;



    
    aggregate = new StaffDeportivoAggregate({
        staffDeportivoService,
        empleadoService,
        negociacionService,
        tramiteService,
        staffDeportivoCreadoEvent,
        empleadoAgregadoEvent,
        empleadoBuscadoEvent,
        
        documentoModificadoEvent,
        tipoEmpleadoModificadoEvent,
     

        tamiteAgregadoEvent, 
        fechaTamiteModificadoEvent, 
        tramiteBuscadoEvent ,

        negociacionEquipoNuevoModificadoEvent ,
        negociacionEquipoSalidaModificadoEvent ,
        negociacionStateModificadoEvent ,
        negociacionTipoNegociacionModificadoEvent
    });
  });

  it('should be defined', () => {
    expect(aggregate).toBeDefined();
  });

  describe('AgregarEmpleado', () => {
    it('execute CrearEmpleadoHelper with params', () => {
      // Arrange
        const entity = new EmpleadoDomainEntity();
        const expected = new EmpleadoDomainEntity();
        entity.empleadoId = "145"
        entity.nombre = "Alvaro Correa",
        entity.documento = "12345678",
        entity.tipoEmpleado = "Negociador",
        entity.nacionalidad = "Uruguay",
        entity.edad = 65,
        entity.salario = 130000


    
        expected.empleadoId = "145"
        expected.nombre = "Alvaro Correa",
        expected.documento = "12345678",
        expected.tipoEmpleado = "Negociador",
        expected.nacionalidad = "Uruguay",
        expected.edad = 65,
        expected.salario = 130000

     
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


describe('CrearTramite', () => {
    it('execute CrearEmpleadoHelper with params', () => {
      // Arrange
        const entity = new EmpleadoDomainEntity();
        const expected = new EmpleadoDomainEntity();
        entity.empleadoId = "145"
        entity.nombre = "Alvaro Correa",
        entity.documento = "12345678",
        entity.tipoEmpleado = "Negociador",
        entity.nacionalidad = "Uruguay",
        entity.edad = 65,
        entity.salario = 130000


    
        expected.empleadoId = "145"
        expected.nombre = "Alvaro Correa",
        expected.documento = "12345678",
        expected.tipoEmpleado = "Negociador",
        expected.nacionalidad = "Uruguay",
        expected.edad = 65,
        expected.salario = 130000

     
        jest
         .spyOn(crearEmpleado, 'CrearEmpleadoHelper')
         .mockResolvedValue(entity);

      // Act
      aggregate = new StaffDeportivoAggregate({
        empleadoService,
        empleadoAgregadoEvent,
      });
      const result = aggregate.CrearTramite(entity);

      // Assert
      expect(result).resolves.toEqual(expected);
      expect(crearEmpleado.CrearEmpleadoHelper).toHaveBeenCalledWith(
        entity,
        empleadoService,
        empleadoAgregadoEvent,
      );
    });
  });
})


//   describe('actualizarNombreDeInformacionPersonal', () => {
//     it('execute ActualizarNombreDeInformacionPersonalHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.NombreDeInformacionPersonalActualizado,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarNombreDeInformacionPersonalHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.actualizarNombreDeInformacionPersonal(
//         informacionPersonalId,
//         entity,
//       );

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.ActualizarNombreDeInformacionPersonalHelper,
//       ).toHaveBeenCalledWith(
//         informacionPersonalId,
//         entity,
//         informacionPersonalService,
//         events.get(Topic.NombreDeInformacionPersonalActualizado),
//       );
//     });
//   });

//   describe('actualizarApellidoDeInformacionPersonal', () => {
//     it('execute ActualizarApellidoDeInformacionPersonalHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.ApellidoDeInformacionPersonalActualizado,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarApellidoDeInformacionPersonalHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.actualizarApellidoDeInformacionPersonal(
//         informacionPersonalId,
//         entity,
//       );

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.ActualizarApellidoDeInformacionPersonalHelper,
//       ).toHaveBeenCalledWith(
//         informacionPersonalId,
//         entity,
//         informacionPersonalService,
//         events.get(Topic.ApellidoDeInformacionPersonalActualizado),
//       );
//     });
//   });

//   describe('borrarInformacionPersonal', () => {
//     it('execute BorrarInformacionPersonalHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       events.set(
//         Topic.InformacionPersonalBorrada,
//         {} as EventPublisherBase<boolean>,
//       );
//       jest
//         .spyOn(helpers, 'BorrarInformacionPersonalHelper')
//         .mockResolvedValue(true);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.borrarInformacionPersonal(informacionPersonalId);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.BorrarInformacionPersonalHelper).toHaveBeenCalledWith(
//         informacionPersonalId,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalBorrada),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorInformacionPersonalID', () => {
//     it('execute BuscarInformacionPersonalPorInformacionPersonalIDHelper with params', () => {
//       // Arrange
//       const informacionPersonalId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorInformacionPersonalId,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(
//           helpers,
//           'BuscarInformacionPersonalPorInformacionPersonalIDHelper',
//         )
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         informacionPersonalService,
//       });
//       const result =
//         aggregate.buscarInformacionPersonalPorInformacionPersonalID(
//           informacionPersonalId,
//         );

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorInformacionPersonalIDHelper,
//       ).toHaveBeenCalledWith(
//         informacionPersonalId,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorInformacionPersonalId),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorUsuarioID', () => {
//     it('execute BuscarInformacionPersonalPorUsuarioIDHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorUsuarioId,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarInformacionPersonalPorUsuarioIDHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.buscarInformacionPersonalPorUsuarioID(usuarioId);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorUsuarioIDHelper,
//       ).toHaveBeenCalledWith(
//         usuarioId,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorUsuarioId),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorNombre', () => {
//     it('execute BuscarInformacionPersonalPorNombreHelper with params', () => {
//       // Arrange
//       const nombre = 'Julian Andres';
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorNombre,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarInformacionPersonalPorNombreHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.buscarInformacionPersonalPorNombre(nombre);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorNombreHelper,
//       ).toHaveBeenCalledWith(
//         nombre,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorNombre),
//       );
//     });
//   });

//   describe('buscarInformacionPersonalPorApellido', () => {
//     it('execute BuscarInformacionPersonalPorApellidoHelper with params', () => {
//       // Arrange
//       const apellido = 'Lasso Figueroa';
//       const entity = new InformacionPersonalDomainEntityBase();
//       events.set(
//         Topic.InformacionPersonalEncontradaPorApellido,
//         {} as EventPublisherBase<InformacionPersonalDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarInformacionPersonalPorApellidoHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         informacionPersonalService,
//       });
//       const result = aggregate.buscarInformacionPersonalPorApellido(apellido);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(
//         helpers.BuscarInformacionPersonalPorApellidoHelper,
//       ).toHaveBeenCalledWith(
//         apellido,
//         informacionPersonalService,
//         events.get(Topic.InformacionPersonalEncontradaPorApellido),
//       );
//     });
//   });

//   describe('crearUsuario', () => {
//     it('execute CrearUsuarioHelper with params', () => {
//       // Arrange
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioCreado,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest.spyOn(helpers, 'CrearUsuarioHelper').mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.crearUsuario(entity);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.CrearUsuarioHelper).toHaveBeenCalledWith(
//         entity,
//         usuarioService,
//         events.get(Topic.UsuarioCreado),
//       );
//     });
//   });

//   describe('actualizarEmailDeUsuario', () => {
//     it('execute ActualizarEmailDeUsuarioHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new UsuarioDomainEntityBase({
//         email: 'julian.lasso@sofka.com.co',
//       });
//       events.set(
//         Topic.EmailDeUsuarioActualizado,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarEmailDeUsuarioHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.actualizarEmailDeUsuario(usuarioId, entity);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.ActualizarEmailDeUsuarioHelper).toHaveBeenCalledWith(
//         usuarioId,
//         entity,
//         usuarioService,
//         events.get(Topic.EmailDeUsuarioActualizado),
//       );
//     });
//   });

//   describe('actualizarPasswordDeUsuario', () => {
//     it('execute ActualizarPasswordDeUsuarioHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new UsuarioDomainEntityBase({
//         password: 'Contraseña123*Segura',
//       });
//       events.set(
//         Topic.PasswordDeUsuarioActualizado,
//         {} as EventPublisherBase<boolean>,
//       );
//       jest
//         .spyOn(helpers, 'ActualizarPasswordDeUsuarioHelper')
//         .mockResolvedValue(true);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.actualizarPasswordDeUsuario(usuarioId, entity);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.ActualizarPasswordDeUsuarioHelper).toHaveBeenCalledWith(
//         usuarioId,
//         entity,
//         usuarioService,
//         events.get(Topic.PasswordDeUsuarioActualizado),
//       );
//     });
//   });

//   describe('borrarUsuario', () => {
//     it('execute BorrarUsuarioHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       events.set(Topic.UsuarioBorrado, {} as EventPublisherBase<boolean>);
//       jest.spyOn(helpers, 'BorrarUsuarioHelper').mockResolvedValue(true);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.borrarUsuario(usuarioId);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.BorrarUsuarioHelper).toHaveBeenCalledWith(
//         usuarioId,
//         usuarioService,
//         events.get(Topic.UsuarioBorrado),
//       );
//     });
//   });

//   describe('buscarUsuarioPorEmail', () => {
//     it('execute BuscarUsuarioPorEmailHelper with params', () => {
//       // Arrange
//       const email = 'julian.lasso@sofka.com.co';
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioEncontradoPorEmail,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarUsuarioPorEmailHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.buscarUsuarioPorEmail(email);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.BuscarUsuarioPorEmailHelper).toHaveBeenCalledWith(
//         email,
//         usuarioService,
//         events.get(Topic.UsuarioEncontradoPorEmail),
//       );
//     });
//   });

//   describe('buscarUsuarioPorUsuarioID', () => {
//     it('execute BuscarUsuarioPorUsuarioIDHelper with params', () => {
//       // Arrange
//       const usuarioId = uuidv4();
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioEncontradoPorUsuarioId,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarUsuarioPorUsuarioIDHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.buscarUsuarioPorUsuarioID(usuarioId);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.BuscarUsuarioPorUsuarioIDHelper).toHaveBeenCalledWith(
//         usuarioId,
//         usuarioService,
//         events.get(Topic.UsuarioEncontradoPorUsuarioId),
//       );
//     });
//   });

//   describe('buscarUsuarioPorEmailYPassword', () => {
//     it('execute BuscarUsuarioPorEmailYPasswordHelper with params', () => {
//       // Arrange
//       const email = 'julian.lasso@sofka.com.co';
//       const password = 'Contraseña123*Segura';
//       const entity = new UsuarioDomainEntityBase();
//       events.set(
//         Topic.UsuarioEncontradoPorEmailYPassword,
//         {} as EventPublisherBase<UsuarioDomainEntityBase>,
//       );
//       jest
//         .spyOn(helpers, 'BuscarUsuarioPorEmailYPasswordHelper')
//         .mockResolvedValue(entity);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.buscarUsuarioPorEmailYPassword(email, password);

//       // Assert
//       expect(result).resolves.toEqual(entity);
//       expect(helpers.BuscarUsuarioPorEmailYPasswordHelper).toHaveBeenCalledWith(
//         email,
//         password,
//         usuarioService,
//         events.get(Topic.UsuarioEncontradoPorEmailYPassword),
//       );
//     });
//   });

//   describe('validarUnicidadDelEmail', () => {
//     it('execute ValidarUnicidadDelEmailHelper with params', () => {
//       // Arrange
//       const email = 'julian.lasso@sofka.com.co';
//       events.set(Topic.EmailUnicoValidado, {} as EventPublisherBase<boolean>);
//       jest
//         .spyOn(helpers, 'ValidarUnicidadDelEmailHelper')
//         .mockResolvedValue(true);

//       // Act
//       aggregate = new StaffDeportivoAggregate({
//         events,
//         usuarioService,
//       });
//       const result = aggregate.validarUnicidadDelEmail(email);

//       // Assert
//       expect(result).resolves.toEqual(true);
//       expect(helpers.ValidarUnicidadDelEmailHelper).toHaveBeenCalledWith(
//         email,
//         usuarioService,
//         events.get(Topic.EmailUnicoValidado),
//       );
//     });
//   });
// });
//.