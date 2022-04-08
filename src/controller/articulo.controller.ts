import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ArticuloService } from '../service/articulo.service';
import { Request } from 'express'
import { Articulo as ArticuloParam } from './../model/articulo.model'
import { Articulo as ArticuloBody } from './../model/articulo.model'

@Controller('v1')
export class ArticuloController {
  constructor(private readonly articuloService: ArticuloService) {}

  @Post('/articulo')
  async addArticulo(@Param() params: ArticuloParam, @Body() articulo: ArticuloBody, @Req() request: Request): Promise<any> {
    const articuloSchema = await this.articuloService.addArticulo(articulo)
    return articuloSchema

    
    }
    
    @Get('/articulo')
    async getArticulos(): Promise<any> {
      return this.articuloService.getArticulos();
    }
  }


