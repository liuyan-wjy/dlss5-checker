import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("vsApple", "pt");

export default function PtNvidiaRtxSparkVsAppleM5Page() {
  return <RtxSparkPage routeKey="vsApple" locale="pt" />;
}
