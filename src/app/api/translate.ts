import { translateText } from '../../lib/gemini';
import { NextApiRequest, NextApiResponse } from 'next';


interface TranslationRequest {
    text: string;
    targetLanguage: string;
}
interface TranslationResponse {
    translatedText: string;
}

interface ErrorResponse {
    message: string;
}

type Data = TranslationResponse | ErrorResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
      const { text, targetLanguage } = req.body as TranslationRequest;

      if (!text || !targetLanguage) {
          return res.status(400).json({ message: 'Text and target language are required' });
      }

      try {
          const { translatedText } = await translateText(text, targetLanguage);
          res.status(200).json({ translatedText });
      } catch (error: any) {
          console.error("Error during translation:", error);
          res.status(500).json({ message: error.message || 'Failed to translate text' });
      }
  } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: 'Method Not Allowed' });
  }
}