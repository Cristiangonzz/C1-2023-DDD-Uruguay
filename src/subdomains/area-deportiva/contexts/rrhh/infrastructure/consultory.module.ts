import { Module } from "@nestjs/common";
import { PersistenceModule } from './persistence';
import { MessagingModule } from './messaging';
import { EmpleadoController } from "./controllers/empleado.controller";
import { TramiteController } from './controllers/tramite';
import { ContratoController } from './controllers/contrato.controller';
import { CesionController } from './controllers/cesion.controller';
import { TraspasoController } from './controllers/traspaso.controller';
import { StaffDeportivoController } from './controllers/staff-deportivo.controller';
import { SecretariaController } from './controllers/secretaria.controller';


@Module({
    imports: [PersistenceModule,MessagingModule],
    controllers: [
//CreandoEventosDeRRHHController
      EmpleadoController,
      TramiteController,
      ContratoController,
      CesionController,
      TraspasoController,
      StaffDeportivoController,
      SecretariaController,
      ],
    providers: [
    ],
    exports: [
     
    ],
  })
export class ConsultoryModule{}