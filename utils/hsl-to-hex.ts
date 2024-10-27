export const hslToHex = ({ h, l, s }: { h: number; s: number; l: number }) => {
	h /= 360;
	s /= 100;
	l /= 100;

	let r: number;
	let g: number;
	let b: number;

	if (s === 0) {
		r = g = b = l;
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			let adjustedT = t;
			if (adjustedT < 0) adjustedT += 1;
			if (adjustedT > 1) adjustedT -= 1;
			if (adjustedT < 1 / 6) return p + (q - p) * 6 * adjustedT;
			if (adjustedT < 1 / 2) return q;
			if (adjustedT < 2 / 3) return p + (q - p) * (2 / 3 - adjustedT) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;

		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	const toHex = (x: number) => {
		const hex = Math.round(x * 255).toString(16);
		return hex.length === 1 ? `0${hex}` : hex;
	};

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
