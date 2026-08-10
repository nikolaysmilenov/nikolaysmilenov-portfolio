import { HomePage } from "@/components/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en");

export default function Home() {
  return <HomePage locale="en" />;
}
