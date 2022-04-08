import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UsuarioService } from './../service/usuario.service';
import { Request } from 'express'
import { Usuario as UsuarioParam } from './../model/usuario.model'
import { Usuario as UsuarioBody } from './../model/usuario.model'

@Controller('v1')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}


  @Post('/usuario')
  async addUser(@Param() params: UsuarioParam, @Body() usuario: UsuarioBody, @Req() request: Request): Promise<any> {
    const usuarioSchema = await this.usuarioService.addUsuario(
     usuario.usuarioName, usuario.password, usuario.seller
    )
    return usuarioSchema
  }

  @Get('/usuario')
  async getUsuarios(): Promise<any> {
    return this.usuarioService.getUsuarios();
  }

  @Get('/usuario/:usuarioId')
  async getUsuario(@Param() params: UsuarioParam): Promise<any> {
    return this.usuarioService.getUsuario(params.usuarioId);
  }
}