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
import { EventMySqlService } from "./persistence/databases/mysql/services/event.service";


@Module({
    imports: [PersistenceModule,MessagingModule],
    controllers: [
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