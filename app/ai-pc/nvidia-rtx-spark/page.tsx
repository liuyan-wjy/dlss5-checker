import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("hub", "en");

export default function NvidiaRtxSparkHubPage() {
  return <RtxSparkPage routeKey="hub" locale="en" />;
}
