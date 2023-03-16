import { Module } from '@nestjs/common';
import { MySqlModule } from './databases/mysql/mysql.module';
import { StaffDeportivoService, EmpleadoService, TramiteService, SecretariaService, ContratoService, CesionService, TraspasoService, NegociacionService } from './services';
import { EventService } from './services/event.service';

@Module({
  imports: [MySqlModule],
  providers: [
    
    StaffDeportivoService,
    EmpleadoService,
    TramiteService,
    SecretariaService,
    ContratoService,
    CesionService,
    TraspasoService,
    NegociacionService,
    
    EventService,
      
],
  exports: [
    StaffDeportivoService,
    EmpleadoService,
    TramiteService,
    SecretariaService,
    ContratoService,
    CesionService,
    TraspasoService,
    NegociacionService,

    EventService,

  ],
})
export class PersistenceModule {}
