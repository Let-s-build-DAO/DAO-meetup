import localFont from "next/font/local"

// Load Atyp Text font
export const AtypText = localFont({
  src: [
    {
      path: "../public/fonts/AtypText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AtypText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/AtypText-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-atyp-text",
})
