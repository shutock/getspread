import { en } from "@/locale/dicts";
import { create } from "zustand";
import { getReading } from "./get-reading.action";

type Card = keyof typeof en.cards;

type State = {
	cards?: Record<Card, string>;
	isLoading: boolean;
	explanation?: string;
};

const initialState: State = {
	cards: undefined,
	isLoading: false,
	explanation: undefined,
};

type Actions = {
	getSpread: (tokens: { symbol: string; balance: number }[]) => Promise<void>;
};

const allCards = Object.keys(en.cards) as Card[];

export const useSpread = create<State & Actions>()((set, get) => ({
	...initialState,
	getSpread: async (tokens) => {
		try {
			if (get().cards) return;
			if (get().isLoading) return;

			set({ isLoading: true });

			const cards: Card[] = [];
			for (let i = 0; i < 6; i++) {
				const randomCard = allCards[
					Math.floor(Math.random() * allCards.length)
				] as Card;
				cards.push(randomCard);
			}

			const reading = JSON.parse(
				(await getReading(
					cards,
					tokens.map(({ balance, symbol }) => `${balance} ${symbol}`),
				)) as string,
			) as Omit<State, "isLoading">;

			set({ ...reading });
		} catch (error) {
			console.error(error);
		} finally {
			set({ isLoading: false });
		}
	},
}));
