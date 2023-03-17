import { Body, Controller, Post,Get,Param } from '@nestjs/common';
import { CesionService } from '../persistence/services/cesion.service';
import { BuscarCesiontPublisher } from '../messaging/publishers/secretaria/cesion/buscar-cesion.publisher';
import { NegociarCesiontPublisher } from '../messaging';
import { NegociarCesionCommand } from '../utils/commands/secretaria/cesion/negociar-cesion-commands';
import { CrearCesionUseCase } from '../../application/use-cases/secretaria/crear-cesion.use-case';
import { BuscarCesionUseCase } from '../../application/use-cases/secretaria/buscar-cesion.use-case';
import { BuscarCesionCommand } from '../utils/commands/secretaria/cesion/buscar-cesion.commands';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('cesion')
@Controller('cesion')
export class CesionController {
    constructor(
        private readonly cesionService: CesionService,

        private readonly cesionBuscadoEvent : BuscarCesiontPublisher,

        private readonly cesionNegociadoEventPublisher: NegociarCesiontPublisher,
    ) {}
    @ApiOperation ({summary: "crear  Cesion"})
    @Post('/crear')
    async crearCesion(@Body() command: NegociarCesionCommand) {
        const useCase = new CrearCesionUseCase(
            this.cesionService,
            this.cesionNegociadoEventPublisher,
        );
        return await useCase.execute(command);
    }
    @ApiOperation ({summary: "buscar  Cesion"})
    @Get('/buscar')
    async buscarCesion(@Body() command: BuscarCesionCommand) {
        const useCase = new BuscarCesionUseCase(
            this.cesionService,
            this.cesionBuscadoEvent,
        );
        return await useCase.execute(command);
    }

  
}