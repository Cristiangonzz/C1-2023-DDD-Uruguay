

import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";
import { EventRepository } from '../../persistence/databases/mysql/repositories/event.repository';
import { EventEntity } from '../../persistence/entities/event.entity';
import { EventMySqlEntity } from "../../persistence/databases/mysql/entities/event-mysql.entity";
import { EventMySqlService } from "../../persistence/databases/mysql/services/event.service";

@Controller()
export class CreatedClientController{


    constructor(private readonly eventService : EventMySqlService){}
    //inyectar el servicio que tiene la entity event
    /**
     * EventPattern se utiliza para definir un patrón de evento de Kafka
     * al que el controlador responderá.
     * 
     * Payload se utiliza para extraer los datos del mensaje del evento.
     *
     * KafkaContext que se utiliza para acceder a los metadatos del contexto de Kafka.
     * 
     * En el contexto de los eventos Kafka, el término "payload"
     * se refiere a los datos contenidos en el mensaje del evento. 
     * En otras palabras, el payload es la carga útil de información 
     * que se envía en el mensaje de Kafka.
     * 
     * @param {*} data
     * @param {KafkaContext} context
     * @memberof CreatedClientController
     */
    @EventPattern('rrhh.staff-deportivo-creado')
    staffDeportivoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.staff-deportivo-creado'
        event.createAt = Date();

        this.eventService.crearEvento(event);
       

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.empleado-agregado')
    empleadoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventMySqlEntity();
        event.data = JSON.stringify(data);
        event.type = 'rrhh.empleado-agregado',//context.getTopic()
        event.createAt = Date();

        this.eventService.crearEvento(event);

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    @EventPattern('rrhh.documento-empleado-modificado')
    documentoEmpeladoModificadoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.documento-empleado-modificado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    @EventPattern('rrhh.nombre-empleado-modificado')
    nombreEmpeladoModificadoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.nombre-empleado-modificado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    } 
    
    @EventPattern('rrhh.salario-empleado-modificado')
    salarioEmpeladoModificadoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.salario-empleado-modificado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    @EventPattern('rrhh.tipo-empleado-modificado')
    tipoEmpeladoModificadoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.tipo-empleado-modificado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    @EventPattern('rrhh.tramite-creado')
    tramiteCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.tramite-creado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.secretaria-creado')
    secretariaCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        
        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.secretaria-creado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.contrato-creado')
    contratoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.contrato-creado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.cesion-creado')
    cesionCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.cesion-creado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.traspaso-creado')
    traspasoCreado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.traspaso-creado'
        event.createAt = Date();
        this.eventService.crearEvento(event)


        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    
    @EventPattern('rrhh.state-contrato-modificado')
    sateContratoModificado(@Payload() data: any, @Ctx() context: KafkaContext){


        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.state-contrato-modificado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.state-cesion-modificado')
    sateCesionModificado(@Payload() data: any, @Ctx() context: KafkaContext){


        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.state-contrato-modificado'
        event.createAt = Date();
        this.eventService.crearEvento(event)


        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.state-traspaso-modificado')
    sateTraspasoModificado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.state-traspaso-modificado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }


    @EventPattern('rrhh.traspaso-buscado')
    TraspasoBuscado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.traspaso-buscado'
        event.createAt = Date();
        this.eventService.crearEvento(event)


        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.empleado-buscado')
    empleadoBuscado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.empleado-buscado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.contrato-buscado')
    contratoBuscado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.contrato-buscado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }

    @EventPattern('rrhh.cesion-buscado')
    cesionBuscado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.cesion-buscado'
        event.createAt = Date();
        this.eventService.crearEvento(event)

        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }
    @EventPattern('rrhh.tramite-buscado')
    tramiteBuscado(@Payload() data: any, @Ctx() context: KafkaContext){

        const event = new EventEntity();
        event.data = data;
        event.type = 'rrhh.tramite-buscado'
        event.createAt = Date();
        this.eventService.crearEvento(event)


        console.log('--------------------------------------')
        console.log('Data: ', data)
        console.log('--------------------------------------')
        console.log('Context: ', context)
        console.log('--------------------------------------')
    }





    

    

}