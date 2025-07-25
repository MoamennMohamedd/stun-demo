import { Controller, Post, Body, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebsiteIdea, WebsiteIdeaDocument } from './website-idea.schema';

@Controller('ideas')
export class IdeasController {
  constructor(
    @InjectModel(WebsiteIdea.name)
    private websiteIdeaModel: Model<WebsiteIdeaDocument>,
  ) {}

  @Post()
  async create(@Body('prompt') prompt: string) {
    // Generate dummy sections
    const sections = ['Hero', 'About', 'Contact'];
    const created = new this.websiteIdeaModel({ prompt, sections });
    await created.save();
    return created;
  }

  @Get()
  async findAll() {
    return this.websiteIdeaModel.find().exec();
  }
}
