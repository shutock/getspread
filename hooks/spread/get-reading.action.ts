"use server";

import { openAi } from "@/lib";

export const getReading = async (cards: string[], tokens: string[]) => {
	const content = `
    Can you provide me with a relevant advice (what should i sell and buy) for my imaginary token portfolio based on the following tarot spread:
  
    My crypto portfolio structure:
    ${tokens?.join("\n")}
  
    My tarot spread:
    ${cards?.join("\n")}
  
    BE SPECIFIC!, specify which particular token buy and sell and how much for each (from my portfolio).

    I NEED RETURN IN JSON WITH THIS TYPE OF FORMAT:
    { cards?: { key: string; explanation: string }, explanation: string }

    NO OTHER TEXT, JUST A JSON OBJECT. WITH NO MARKDOWN OR HTML. JUST PLAIN JSON AS A TEXT.
    `;

	const { choices } = await openAi.chat.completions.create({
		messages: [{ role: "user", content }],
		model: "gpt-4o",
		temperature: 0.7,
	});

	return choices[0].message.content
		?.replaceAll("`", "")
		.replaceAll("\n", "")
		.replaceAll("json", "");
};
