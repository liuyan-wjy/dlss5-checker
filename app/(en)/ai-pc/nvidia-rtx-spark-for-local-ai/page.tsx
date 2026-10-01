import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("localAi", "en");

export default function NvidiaRtxSparkForLocalAiPage() {
  return <RtxSparkPage routeKey="localAi" locale="en" />;
}
