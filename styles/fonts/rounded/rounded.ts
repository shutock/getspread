import localFont from "next/font/local"

export const rounded = localFont({
	src: [
		{
			path: "./light.otf",
			style: "normal",
			weight: "300"
		},
		{
			path: "./regular.otf",
			style: "normal",
			weight: "400"
		},
		{
			path: "./medium.otf",
			style: "normal",
			weight: "500"
		},
		{
			path: "./semibold.otf",
			style: "normal",
			weight: "600"
		},
		{
			path: "./bold.otf",
			style: "normal",
			weight: "700"
		}
	],
	variable: "--font-rounded"
})
