import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario as UsuarioSchema } from './../schema/usuario.schema'
import * as uuid from 'uuid'

import { Usuario } from './../model/usuario.model'
import { Model } from 'mongoose';


@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel(Usuario.name) private readonly usuario: Model<UsuarioSchema>,
  ) { }

  async getUsuario(usuarioId: string) : Promise<UsuarioSchema>  {
    const usuarioSchema = await this.usuario.findOne({ usuarioId: usuarioId })
    if (!usuarioSchema) {
      throw new NotFoundException(`Not Found User with id=${usuarioId}`)
    }
    return usuarioSchema
  }

  async getUsuarios() : Promise<UsuarioSchema[]>  {
    const usuarioSchema = await this.usuario.find()
    return usuarioSchema
  }

  async addUsuario (usuarioName: string, password: string, seller: boolean) : Promise<UsuarioSchema>  {
    const usuarioId = uuid.v4()
    const usuarioSchema = new this.usuario({
      usuarioId: usuarioId,
      usuarioName: usuarioName,
      password: password,
      seller: seller
    })
    await usuarioSchema.save()

      return usuarioSchema
  }

}
