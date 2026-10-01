import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("releaseDate", "en");

export default function NvidiaRtxSparkReleaseDatePage() {
  return <RtxSparkPage routeKey="releaseDate" locale="en" />;
}
