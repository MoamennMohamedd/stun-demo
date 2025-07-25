import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteIdea, WebsiteIdeaSchema } from './website-idea.schema';
import { IdeasController } from './ideas.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://moamen:Mo011994292988@atlascluster.zm98l.mongodb.net/website_ideas?retryWrites=true&w=majority&appName=AtlasCluster',
    ),
    MongooseModule.forFeature([{ name: WebsiteIdea.name, schema: WebsiteIdeaSchema }]),
  ],
  controllers: [AppController, IdeasController],
  providers: [AppService],
})
export class AppModule {}
