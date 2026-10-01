import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("gaming", "en");

export default function NvidiaRtxSparkGamingPerformancePage() {
  return <RtxSparkPage routeKey="gaming" locale="en" />;
}
