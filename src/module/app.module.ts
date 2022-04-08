import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ArticuloController } from '../controller/articulo.controller'
import { ArticuloService } from '../service/articulo.service'
import { Articulo, ArticuloSchema } from './../schema/articulo.schema'
import { UsuarioController } from './../controller/usuario.controller'
import { UsuarioService } from './../service/usuario.service'
import { Usuario, UsuarioSchema } from './../schema/usuario.schema'
//import { Order, OrderSchema } from 'src/schema/order.schema'
//import { OrderController } from 'src/controller/order.controller'
//import { OrderService } from 'src/service/order.service'
//import { ContenidoController } from 'src/controller/contenido.controller'
//import { Contenido, ContenidoSchema } from 'src/schema/contenido.schema'
//import { ContenidoService } from 'src/service/contenido.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Usuario.name , schema: UsuarioSchema },
      { name: Articulo.name , schema: ArticuloSchema },
     // { name: Order.name, schema: OrderSchema },
     // { name: Contenido.name, schema:ContenidoSchema},
      
      //{ name: Member.name, schema: MemberSchema },
      //{ name: MemberActivityProgress.name, schema: MemberActivityProgressSchema }
    ]),
  ],
  controllers: [
    ArticuloController,
    UsuarioController,
    //OrderController,
   // ContenidoController
  ],
  providers: [
    ArticuloService,
    UsuarioService,
   // OrderService,
    //ContenidoController
  ]
})
export class HmkModule {}

