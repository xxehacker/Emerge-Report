import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const { image } = await request.json();
        const base64Data = image.split(",")[1];

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Analyze this cyber threat image and respond in this exact format without any asterisks or bullet points:
                        TITLE: Write a clear, brief title
                        PLATFORM: Choose one ( "Telegram", "WhatsApp", "Facebook", "Twitter", "Instagram", "LinkedIn", "Snapchat", "TikTok", "YouTube", "Other" ) etc.
                        TYPE: Choose one ( "Phishing Attack",
                        "Malware Attack",
                        "Data Breach",
                        "Fraud Call",
                        "Fraud SMS",
                        "Fraud Email",
                        "Ransomware Attack",
                        "Call Bombing",
                        "Other",)
                        DESCRIPTION: Write a clear, concise description`;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: base64Data,
                    mimeType: "image/jpeg",
                },
            },
        ]);

        const text = await result.response.text();

        // Parse the response more precisely
        const titleMatch = text.match(/TITLE:\s*(.+)/);
        const typeMatch = text.match(/TYPE:\s*(.+)/);
        const descMatch = text.match(/DESCRIPTION:\s*(.+)/);
        const platformMatch = text.match(/PLATFORM:\s*(.+)/);

        return NextResponse.json({
            title: titleMatch?.[1]?.trim() || "",
            reportType: typeMatch?.[1]?.trim() || "",
            description: descMatch?.[1]?.trim() || "",
            platform: platformMatch?.[1]?.trim() || "",
        });
    } catch (error) {
        console.error("Image analysis error:", error);
        return NextResponse.json(
            { error: "Failed to analyze image" },
            { status: 500 }
        );
    }
}
