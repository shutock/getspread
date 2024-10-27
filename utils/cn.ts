type ClassValue =
	| string
	| number
	| boolean
	| undefined
	| null
	| ClassArray
	| ClassObject

type ClassObject = {
	[key: string]: boolean | undefined | null
}

type ClassArray = ClassValue[] & {}

export const cn = (...args: ClassValue[]) => {
	const classes: string[] = []

	for (const arg of args) {
		if (!arg) continue

		if (typeof arg === "string" || typeof arg === "number") {
			classes.push(String(arg))
		} else if (Array.isArray(arg)) {
			const inner = cn(...arg)
			if (inner) {
				classes.push(inner)
			}
		} else if (typeof arg === "object") {
			for (const key in arg) {
				if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
					classes.push(key)
				}
			}
		}
	}

	return classes.join(" ")
}
