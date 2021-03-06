import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './authentication/auth.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { AccountModule } from './models/account/account.module';
import { accountProvider } from './models/account/account.provider';
import { CountryModule } from './models/country/country.module';
import { FileModule } from './models/file/file.module';
import { FoodModule } from './models/food/food.module';
import { foodProvider } from './models/food/food.provider';
import { UploadModule } from './models/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
      cache: true,
    }),
    AuthModule,
    CountryModule,
    AccountModule,
    UploadModule,
    FileModule,
    FoodModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    ...foodProvider,
    ...accountProvider,
  ],
})
export class AppModule {}
