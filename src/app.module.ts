import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service';
import { UsuarioController } from './controller/usuario.controller';
import { HmkModule } from './module/app.module';
import { UsuarioService } from './service/usuario.service';
import { ArticuloService } from './service/articulo.service';
import { ArticuloController } from './controller/articulo.controller';

@Module({
  imports: [
    HmkModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot('mongodb://localhost:27017/pe_homekit')
  ],
  //controllers: [AppController,UsuarioController,ArticuloController],
  //providers: [AppService,UsuarioService,ArticuloService],
})
export class AppModule {}
