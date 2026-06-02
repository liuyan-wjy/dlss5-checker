import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("vsApple", "en");

export default function NvidiaRtxSparkVsAppleM5Page() {
  return <RtxSparkPage routeKey="vsApple" locale="en" />;
}
