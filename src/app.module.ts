import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';


// 모듈의 모든 루트와 같은 것
@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행하는 것,express의 라우터와 같은 것
  providers: [MoviesService],
})
export class AppModule { }
