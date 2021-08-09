import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Bind,
} from '@nestjs/common'
import { AppService } from './app.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
@Controller()
export class upload {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @Bind(UploadedFile())
  uploadFile(file: Express.Multer.File): string {
    console.log(file)
    return 'ok'
  }
}
