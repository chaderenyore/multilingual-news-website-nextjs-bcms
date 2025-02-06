import { GoogleGenerativeAI, GenerateContentResult } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

interface TranslationResult {
  translatedText: string;
}

async function translateText(text: string, targetLanguage: string): Promise<TranslationResult> {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = `Translate the following text to ${targetLanguage}:\n\n${text}`;

    try {
      const result: GenerateContentResult = await model.generateContent(prompt);
      const response = result.response;
      const translatedText = response.text();

      return { translatedText };

    } catch (error: any) {
        console.error("Error during translation:", error);
        throw new Error(error.message || "Failed to translate text");
    }

}

export { translateText };