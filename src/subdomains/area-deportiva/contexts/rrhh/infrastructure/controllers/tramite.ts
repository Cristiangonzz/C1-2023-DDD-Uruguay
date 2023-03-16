import { Body, Controller, Post,Get ,Param} from '@nestjs/common';
import { TramiteService } from '../persistence/services/tramite.service';
import { AgregarTramiteUseCase } from '../../application/use-cases/staff-deportivo/agregar-tramite.use-case';
import { CrearTramiteCommand } from '../utils/commands/staffDeportivo/tramite/crear-tramite.commands';
import { BuscarTramiteCommand } from '../utils/commands/staffDeportivo/tramite/buscar-tramite.commands';
import { BuscarTramiteUseCase } from '../../application';
import { CrearTramitePublisher } from '../messaging/publishers/staffDeportivo/tramite/crear-tramite.publisher';
import { BuscarTramitePublisher } from '../messaging/publishers/staffDeportivo/tramite/buscar-tramite.publisher';

@Controller('tramite')
export class TramiteController {

    constructor(
        private readonly tramiteService: TramiteService,
        private readonly tramiteCreadoEventPublisher: CrearTramitePublisher,
        private readonly tramitebuscadoEventPublisher: BuscarTramitePublisher,
    ) {}

    @Post('/crear')
    async crearTramite(@Body() command: CrearTramiteCommand) {
        const useCase = new AgregarTramiteUseCase(
            this.tramiteService,
            this.tramiteCreadoEventPublisher,
        );
        return await useCase.execute(command);
    }

    @Get('/buscar')
    async buscarTramite(@Body() id: BuscarTramiteCommand) {
        const useCase = new BuscarTramiteUseCase(
            this.tramiteService,
            this.tramitebuscadoEventPublisher,
        );
        return await useCase.execute(id);
    }


  
}
