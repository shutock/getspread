import { OpenAI } from "openai";

import { OPENAI_KEY } from "@/utils";

export const openAi = new OpenAI({ apiKey: OPENAI_KEY });
