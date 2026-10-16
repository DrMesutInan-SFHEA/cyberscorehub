import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "CyberScoreHub | Cyber Security Assessment & Risk Insights",
    template: "%s | CyberScoreHub",
  },
  description:
    "CyberScoreHub helps organisations assess cyber security maturity, identify security gaps, benchmark performance, understand cyber risks and prioritise remediation with evidence-based insights.",
  openGraph: {
    title: "CyberScoreHub | Cyber Security Assessment & Risk Insights",
    description:
      "Assess cyber security maturity, identify gaps, benchmark performance and prioritise improvement with CyberScoreHub.",
    siteName: "CyberScoreHub",
    type: "website",
  },
  verification: {
    google: "31FkQSpTrL_JVbD8S-7IXCqpUF_6AJBEWIANP7irxq4",
    other: {
      "msvalidate.01": "EEFAF462D02B260C9B71BE1DBB2AD64D",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
