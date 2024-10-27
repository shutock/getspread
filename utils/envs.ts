if (!process.env.NEXT_PUBLIC_OPENAI_KEY)
	throw new Error("OPENAI_KEY is not set");
export const OPENAI_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;

if (!process.env.NEXT_PUBLIC_TONAPI_KEY)
	throw new Error("TONAPI_KEY is not set");
export const TONAPI_KEY = process.env.NEXT_PUBLIC_TONAPI_KEY;
