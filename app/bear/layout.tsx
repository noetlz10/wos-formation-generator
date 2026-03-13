import { Coffee } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="Panda likes froststars"
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event=""
        >
          <Coffee />
          Support me →
        </a>
      </div>
      {children}
    </>
  );
}
