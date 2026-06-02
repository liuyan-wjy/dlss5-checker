import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("laptops", "en");

export default function NvidiaRtxSparkLaptopsPage() {
  return <RtxSparkPage routeKey="laptops" locale="en" />;
}
