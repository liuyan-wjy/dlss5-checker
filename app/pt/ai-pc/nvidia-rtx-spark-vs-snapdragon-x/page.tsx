import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("vsSnapdragon", "pt");

export default function PtNvidiaRtxSparkVsSnapdragonXPage() {
  return <RtxSparkPage routeKey="vsSnapdragon" locale="pt" />;
}
