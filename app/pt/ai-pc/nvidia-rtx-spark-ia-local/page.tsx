import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("localAi", "pt");

export default function PtNvidiaRtxSparkIaLocalPage() {
  return <RtxSparkPage routeKey="localAi" locale="pt" />;
}
