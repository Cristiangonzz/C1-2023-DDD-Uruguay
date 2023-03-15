import { IsBoolean, IsString ,IsNumber, IsUUID} from 'class-validator';
import { INegociarContratoCommands } from 'src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria';

export class NegociarContratoCommand implements INegociarContratoCommands {
    
    @IsUUID()
    contratoId?: string;
    
    @IsUUID()
    empleadoId?: string;
    
    @IsNumber()
    costo?: number;

    @IsBoolean()
    state?: boolean;
   
    @IsString()
    fechaFinalizacion?: string;
    

}