import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("vsSnapdragon", "en");

export default function NvidiaRtxSparkVsSnapdragonXPage() {
  return <RtxSparkPage routeKey="vsSnapdragon" locale="en" />;
}
