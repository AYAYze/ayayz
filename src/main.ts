import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

const httpsOptions = {
  key: fs.readFileSync('./secret/private.key'),
  cert: fs.readFileSync('./secret/certificate.crt')
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions,
  });

  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  app.setViewEngine('html');
  await app.listen(443);
}
bootstrap();
