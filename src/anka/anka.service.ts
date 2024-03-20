import { Injectable } from '@nestjs/common';
import { AnalyzPayload } from './dto/analyz-anka.dto';
import { ContentFetcher } from 'src/lib/contentFetcher';
import { OpenAIService } from 'src/lib/openai';

@Injectable()
export class AnkaService {
  async analyzOfflineContent(payload: AnalyzPayload) {
    console.log('Analyzing offline content...');

    const offlineContents = ContentFetcher.getOfflineContents();

    return this.analyzContent(offlineContents);
  }

  async analyzOnlineContent(payload: AnalyzPayload) {
    console.log('Analyzing online content...');

    const onlineContents = ContentFetcher.getOnlineContents();

    return this.analyzContent(onlineContents);
  }

  async analyzCustomContent(payload: AnalyzPayload) {
    console.log('Analyzing online content...');

    if (payload.contents.length === 0) {
      return 'No content to analyze';
    }

    return this.analyzContent(payload.contents);
  }

  async analyzContent(contents: string[]) {
    var response = [];

    const service = new OpenAIService(
      process.env.OPENAI_API_ENDPOINT,
      process.env.OPENAI_API_KEY,
    );

    for (const content of contents) {
      const insights = await service.analyzeContent(content);
      console.log(`Content: ${content}`);
      console.log(`Response: ${JSON.stringify(insights, null, 2)}`);

      response.push({
        content,
        response: insights.choices[0].message.content,
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
