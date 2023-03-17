import { IBuscarCesionCommands } from "src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria";
import { IsUUID } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class BuscarCesionCommand implements IBuscarCesionCommands {

    @IsUUID()
    cesionId?: string;
    
}