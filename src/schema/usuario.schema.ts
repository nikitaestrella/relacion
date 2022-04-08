import { Prop, SchemaFactory, Schema as NestMongooseSchema } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

@NestMongooseSchema({ collection: 'usuario', timestamps: true })
export class Usuario extends Document {
    @Prop({ required: true, index: true, unique: true })
    usuarioId: string;

    @Prop({ required: true })
    usuarioName: string;

    @Prop({ required: true })
    readonly password: string;
    
    @Prop({ required: true })
    seller: boolean;

   // @Prop()
   // createdAt: Date

   // @Prop()
  //  updatedAt: Date
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario)