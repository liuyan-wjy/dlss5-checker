import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("releaseDate", "pt");

export default function PtNvidiaRtxSparkDataLancamentoPage() {
  return <RtxSparkPage routeKey="releaseDate" locale="pt" />;
}
