import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Articulo as ArticuloSchema } from './../schema/articulo.schema'
import * as uuid from 'uuid'

import { Model } from 'mongoose';
import { Articulo } from 'src/model/articulo.model';


@Injectable()
export class ArticuloService {

  constructor(
    @InjectModel(Articulo.name) private readonly articulo: Model<ArticuloSchema>,
  ) { }


  async addArticulo(articulo: Articulo): Promise<ArticuloSchema> {
    const articuloId = uuid.v4()
    const articuloSchema = new this.articulo({
      articuloId: articuloId,
      name: articulo.name,
      descripcion: articulo.descripcion,
      price: articulo.price,
      priceDesc: articulo.priceDesc,
      stock: articulo.stock,
      usuarioId: articulo.usuarioId
    })

   
    await articuloSchema.save()

    return articuloSchema
  }

  async getArticulos() : Promise<ArticuloSchema[]>  {
    const articulosSchema = await this.articulo.find().populate('usuarioId')
    return articulosSchema
  }
        
  }

