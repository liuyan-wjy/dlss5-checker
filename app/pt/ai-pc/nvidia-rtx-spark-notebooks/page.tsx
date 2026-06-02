import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("laptops", "pt");

export default function PtNvidiaRtxSparkNotebooksPage() {
  return <RtxSparkPage routeKey="laptops" locale="pt" />;
}
