import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("specs", "en");

export default function NvidiaRtxSparkSpecsPage() {
  return <RtxSparkPage routeKey="specs" locale="en" />;
}
