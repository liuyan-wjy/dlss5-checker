import Dlss5GameGuide, {
  createDlss5GameMetadata,
} from "@/components/Dlss5GameGuide";

export const metadata = createDlss5GameMetadata("where-winds-meet");

export default function WhereWindsMeetDlss5Page() {
  return <Dlss5GameGuide gameKey="where-winds-meet" />;
}
