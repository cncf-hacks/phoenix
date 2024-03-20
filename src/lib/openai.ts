import axios from 'axios';

export class OpenAIService {
  private key: string;
  private endpoint: string;

  constructor(endpoint: string, key: string) {
    this.key = key;
    this.endpoint = endpoint;
  }

  async analyzeContent(content: string) {
    console.log('OPENAI_API_ENDPOINT:', process.env.OPENAI_API_ENDPOINT);
    console.log('OPENAI_API_KEY:', '****' + this.key.slice(-5));

    try {
      const response = await axios.post(
        this.endpoint,
        {
          //model: 'text-davinci-003', // Use the latest model version
          model: 'gpt-3.5-turbo-0301',
          //prompt: `Analyze the following piece of text for information pollution, hate speech, and gender-based violence. Provide actionable insights.\n\nText: "${content}"\nInsights:`,
          messages: [
            {
              role: 'user',
              content: `Analyze the following piece of text for information pollution, hate speech, and gender-based violence. Provide actionable insights.\n\nText: "${content}"\nInsights:`,
            },
          ],
          temperature: 0.5,
          max_tokens: 100,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            Authorization: `Bearer ${this.key}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);

      return null;
    }
  }
}
