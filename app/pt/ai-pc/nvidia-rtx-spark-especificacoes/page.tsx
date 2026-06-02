import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("specs", "pt");

export default function PtNvidiaRtxSparkEspecificacoesPage() {
  return <RtxSparkPage routeKey="specs" locale="pt" />;
}
