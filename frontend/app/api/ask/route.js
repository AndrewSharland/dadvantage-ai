import { NextResponse } from "next/server";
import OpenAI from "openai";
import dataset from "../../../data/dataset.json";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { question } = await req.json();
    const input = question.toLowerCase();

    let match = null;

    for (let item of dataset) {
      if (
        input.includes(item.intent.toLowerCase()) ||
        input.includes(item.question.toLowerCase())
      ) {
        match = item;
        break;
      }
    }

    const baseAnswer = match
      ? match.answer
      : "Sorry, I couldn't find a good answer.";

    const aiResponse = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `User question: ${question}
Base answer: ${baseAnswer}

Rewrite this into a clear, specific, and actionable response.
Keep it concise and practical. Avoid vague advice.`,
    });

    return NextResponse.json({
      answer: aiResponse.output_text,
    });

  } catch (error) {
    console.error("ERROR:", error);

    return NextResponse.json({
      answer: "Something went wrong. Please try again.",
    });
  }
}
