import { Body, Controller, Post,Get } from '@nestjs/common';
import { BuscarContratoPublisher } from '../messaging';
import { ContratoService } from '../persistence';
import { NegociarContratoPublisher } from '../messaging/publishers/secretaria/contrato/negociar-contrato-publisher';
import { CrearContratoUseCase } from '../../application/use-cases/secretaria/crear-contrato.use-case';
import { BuscarContatoUseCase } from '../../application';
import { BuscarContratoCommand } from '../utils/commands/secretaria/contrato/buscar-contrato.commands';
import { NegociarContratoCommand } from '../utils/commands/secretaria/contrato/negociar-contrato-commands';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('contrato')
@Controller('contrato')
export class ContratoController {
    constructor(
        private readonly contratoService: ContratoService,

        private readonly contratoBuscadoEvent : BuscarContratoPublisher,

        private readonly contratoNegociadoEventPublisher: NegociarContratoPublisher,
    ) {}

    @ApiOperation({summary: "crear contrato"})
    @Post('/crear')
    async crearContrato(@Body() command: NegociarContratoCommand) {
        const useCase = new CrearContratoUseCase(
            this.contratoService,
            this.contratoNegociadoEventPublisher,
        );
        return await useCase.execute(command);
    }
    @ApiOperation({summary: "buscar contrato"})
    @Get('/buscar')
    async buscarContrato(@Body() command: BuscarContratoCommand ) {
        const useCase = new BuscarContatoUseCase (
            this.contratoService,
            this.contratoBuscadoEvent,
        );
        return await useCase.execute(command);
    }

  
}