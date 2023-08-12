import { Injectable } from '@nestjs/common';

import { type CreateNewsDto } from './dto/create-news.dto';
import { type UpdateNewsDto } from './dto/update-news.dto';

// This is a mock data
const news: Array<{ title?: string | undefined; content?: string | undefined; id: number; }> = []

@Injectable()
export class NewsService {
  create(createNewsDto: CreateNewsDto) {
    const id = news.length + 1
    const newNews = {
      id,
      ...createNewsDto
    }

    news.push(newNews)
    return newNews
  }

  findAll() {
    return news
  }

  findOne(id: number) {
    return news.find(news => news.id === id);
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    const isExist = news.find(news => news.id === id)

    if (isExist) {
      const updatedNews = {
        id,
        ...updateNewsDto
      }

      news[id - 1] = updatedNews
      return updatedNews
    }

    return null
  }

  remove(id: number) {
    const isExist = news.find(news => news.id === id)

    if (isExist) {
      news.splice(id - 1, 1)
      return true
    }

    return false
  }
}
