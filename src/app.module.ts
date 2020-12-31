import { Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';


// 모듈의 모든 루트와 같은 것
@Module({
  imports: [MoviesModule],
  controllers: [AppController], // url을 가져오고 함수를 실행하는 것,express의 라우터와 같은 것
  providers: [],
})
export class AppModule { }
