import { TonApiClient } from "@ton-api/client";
import { TONAPI_KEY } from "@/utils";

export const tonApi = new TonApiClient({ apiKey: TONAPI_KEY });
