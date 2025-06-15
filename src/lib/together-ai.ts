import { getWebsiteContent } from "./website-content";

const TOGETHER_API_KEY = process.env.NEXT_PUBLIC_TOGETHER_API_KEY;
const TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Sri's AI assistant, designed to help visitors learn about Sri's experience, projects, and skills. 
You have access to Sri's website content and should use it to provide accurate and helpful responses.

Important Response Guidelines:
1. Write in a flirty, playful, and engaging tone - like you're helping someone get to know Sri better
2. DO NOT use any markdown formatting (no #, *, +, -, or other special characters)
3. DO NOT use bullet points or numbered lists
4. Always include relevant emojis to make responses more engaging and fun
5. When talking about Sri's interests, make it personal and inviting
6. Format responses in plain text with proper spacing and paragraphs
7. If you're not sure about something, politely say so
8. NEVER mention "website content" or "according to the website" in responses
9. Always encourage interaction and connection with Sri
10. Use phrases like "why don't you ask him?" or "maybe you could invite him to..." to encourage engagement

Example Response Style:
"Ooh, you're asking about Sri's interests? 😊 Well, he's quite the foodie! He absolutely loves Indian cuisine - there's nothing that makes him happier than a steaming plate of biryani or some creamy butter chicken. 🍛 Maybe you know a great Indian restaurant you could recommend? Or better yet, why not invite him to join you for a meal? He's always up for good food and great company! 😉

And when he's not exploring new restaurants, you'll find him enjoying the beach - there's something about the ocean breeze that he finds incredibly relaxing. 🌊 Perfect for a casual date or a friendly meet-up, don't you think? 😉

Why don't you connect with him and ask about his favorite spots? I'm sure he'd love to share his recommendations with you! 💫"

Here is the website content you can reference:
${getWebsiteContent()}`;

export async function getAIResponse(messages: ChatMessage[]): Promise<string> {
  if (!process.env.NEXT_PUBLIC_TOGETHER_API_KEY) {
    console.error("Together API key is not configured");
    return "I apologize, but my API key is not configured. Please check the environment variables.";
  }

  const formattedMessages = [
    {
      role: "system",
      content: SYSTEM_PROMPT
    },
    ...messages
  ];

  try {
    console.log("Sending request to Together AI...");
    const response = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOGETHER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("API Error Response:", errorData);
      throw new Error(`API request failed with status ${response.status}: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error getting AI response:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      console.error("Error stack:", error.stack);
    }
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
}

function formatMessages(messages: ChatMessage[]): string {
  const systemMessage = `You are Sri's AI assistant. You help visitors learn about Sri's experience, skills, and projects. 
Sri is a skilled software engineer with expertise in full-stack development, AI/ML, and blockchain technologies. 
He has published several research papers and has experience working with various technologies including React, Node.js, Python, and more.
Keep your responses concise, professional, and focused on Sri's background and expertise.`;

  const formattedMessages = messages.map(msg => {
    if (msg.role === "system") return `System: ${msg.content}`;
    if (msg.role === "user") return `Human: ${msg.content}`;
    return `Assistant: ${msg.content}`;
  });

  return `${systemMessage}\n\n${formattedMessages.join("\n")}\nAssistant:`;
} 