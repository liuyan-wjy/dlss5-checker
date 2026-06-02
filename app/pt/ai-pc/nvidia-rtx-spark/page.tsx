import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("hub", "pt");

export default function PtNvidiaRtxSparkHubPage() {
  return <RtxSparkPage routeKey="hub" locale="pt" />;
}
