import { Body, Controller, Post } from '@nestjs/common';
import { BuscarContratoPublisher } from '../messaging';
import { ContratoService } from '../persistence';
import { NegociarContratoPublisher } from '../messaging/publishers/secretaria/contrato/negociar-contrato-publisher';
import { CrearContratoUseCase } from '../../application/use-cases/secretaria/crear-contrato.use-case';
import { BuscarContatoUseCase } from '../../application';
import { BuscarContratoCommand } from '../utils/commands/secretaria/contrato/buscar-contrato.commands';
import { NegociarContratoCommand } from '../utils/commands/secretaria/contrato/negociar-contrato-commands';

@Controller('contrato')
export class ContratoController {
    constructor(
        private readonly contratoService: ContratoService,

        private readonly contratoBuscadoEvent : BuscarContratoPublisher,

        private readonly contratoNegociadoEventPublisher: NegociarContratoPublisher,
    ) {}

    @Post('/crear')
    async crearContrato(@Body() command: NegociarContratoCommand) {
        const useCase = new CrearContratoUseCase(
            this.contratoService,
            this.contratoNegociadoEventPublisher,
        );
        return await useCase.execute(command);
    }

    @Post('/buscar')
    async buscarContrato(@Body() command: BuscarContratoCommand ) {
        const useCase = new BuscarContatoUseCase (
            this.contratoService,
            this.contratoBuscadoEvent,
        );
        return await useCase.execute(command);
    }

  
}