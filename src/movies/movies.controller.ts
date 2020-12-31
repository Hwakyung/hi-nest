import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
//라우터
@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies"
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string) {
        return `This will return one movie with the id: ${movieId}`
    }

    @Post()
    create() {
        return "This will create a movie";
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string) {
        return `This will delete a movie with the id: ${movieId}`
    }


    @Patch("/:id") //리소스의 일부분만 업데이트할 수 있게 해줌
    patch(@Param("id") movieId: string) {
        return `This will update a movie with the id: ${movieId}`
    }
}