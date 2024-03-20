import { Injectable } from '@nestjs/common';
import { AnalyzPayload } from './dto/analyz-anka.dto';
import { ContentFetcher } from 'src/lib/contentFetcher';
import { OpenAIService } from 'src/lib/openai';

@Injectable()
export class AnkaService {
  async analyzOfflineContent(payload: AnalyzPayload) {
    console.log('Analyzing offline content...');

    var response = [];

    const service = new OpenAIService(
      process.env.OPENAI_API_ENDPOINT,
      process.env.OPENAI_API_KEY,
    );

    const offlineContents = ContentFetcher.getOfflineContents();

    for (const content of offlineContents) {
      const insights = await service.analyzeContent(content);
      console.log(`Content: ${content}\Response: ${insights}\n`);

      response.push({
        content,
        response: insights.choices[0].message.content,
      });
    }

    return response;
  }

  async analyzOnlineContent(payload: AnalyzPayload) {
    console.log('Analyzing online content...');

    var response = [];

    const service = new OpenAIService(
      process.env.OPENAI_API_ENDPOINT,
      process.env.OPENAI_API_KEY,
    );

    const onlineContents = ContentFetcher.getOnlineContents();

    for (const content of onlineContents) {
      const insights = await service.analyzeContent(content);
      console.log(`Content: ${content}\nInsights: ${insights}\n`);

      response.push({
        content,
        insights,
      });
    }

    return response;
  }

  // findAll() {
  //   return `This action returns all anka`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} anka`;
  // }
}
