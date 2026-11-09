import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/queryProvider";
import { SearchProvider } from "@/context/searchContext";

const poppins = Poppins({
  variable: "--font-poppons",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MbiyuInsights",
  description:
    "Discover and get the latest stories on academics, education and lifestyle.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col  mx-auto bg-zinc-100">
        <SearchProvider>
          <QueryProvider>
            <div>{children}</div>
            <Toaster />
          </QueryProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
