import { Prop, SchemaFactory, Schema as NestMongooseSchema } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Usuario } from './usuario.schema'

@NestMongooseSchema({ collection: 'articulo', timestamps: true })

export class Articulo extends Document {
    @Prop({ required: true, index: true, unique: true })
    articuloId: string

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    descripcion: string
    
    @Prop({ required: true })
    price: number

    @Prop({ required: true })
    priceDesc: number

    @Prop({ required: true })
    stock: number

    @Prop({ type:mongoose.Schema.Types.ObjectId,ref:'Usuario' })//revisar
    usuarioId: Usuario
    //@Prop({ required: false })
   // usuarioId: string

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date
}

export const ArticuloSchema = SchemaFactory.createForClass(Articulo)