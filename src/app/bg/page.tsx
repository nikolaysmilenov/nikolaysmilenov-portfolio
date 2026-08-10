import { HomePage } from "@/components/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("bg");

export default function BulgarianHome() {
  return <HomePage locale="bg" />;
}
