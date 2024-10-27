export const hexToHsl = (hex: string) => {
	let r = 0
	let g = 0
	let b = 0

	if (hex.length === 4) {
		r = Number.parseInt(`0x${hex[1]}${hex[1]}`)
		g = Number.parseInt(`0x${hex[2]}${hex[2]}`)
		b = Number.parseInt(`0x${hex[3]}${hex[3]}`)
	} else if (hex.length === 7) {
		r = Number.parseInt(`0x${hex[1]}${hex[2]}`)
		g = Number.parseInt(`0x${hex[3]}${hex[4]}`)
		b = Number.parseInt(`0x${hex[5]}${hex[6]}`)
	}

	r /= 255
	g /= 255
	b /= 255

	const min = Math.min(r, g, b)
	const max = Math.max(r, g, b)
	const delta = max - min

	let h = 0
	let s = 0
	let l = 0

	if (delta === 0) h = 0
	else if (max === r) h = ((g - b) / delta) % 6
	else if (max === g) h = (b - r) / delta + 2
	else h = (r - g) / delta + 4

	h = Math.round(h * 60)

	if (h < 0) h += 360

	l = (max + min) / 2
	s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
	s = +(s * 100).toFixed(1)
	l = +(l * 100).toFixed(1)

	return { h, s, l }
}
