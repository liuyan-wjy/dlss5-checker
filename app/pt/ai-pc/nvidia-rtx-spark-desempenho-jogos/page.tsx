import RtxSparkPage from "@/components/RtxSparkPage";
import { createRtxSparkMetadata } from "@/lib/rtx-spark-data";

export const metadata = createRtxSparkMetadata("gaming", "pt");

export default function PtNvidiaRtxSparkDesempenhoJogosPage() {
  return <RtxSparkPage routeKey="gaming" locale="pt" />;
}
