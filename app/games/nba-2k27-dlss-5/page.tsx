import Dlss5GameGuide, {
  createDlss5GameMetadata,
} from "@/components/Dlss5GameGuide";

export const metadata = createDlss5GameMetadata("nba-2k27");

export default function Nba2k27Dlss5Page() {
  return <Dlss5GameGuide gameKey="nba-2k27" />;
}
