import Dlss5GameGuide, {
  createDlss5GameMetadata,
} from "@/components/Dlss5GameGuide";

export const metadata = createDlss5GameMetadata("starfield");

export default function StarfieldDlss5Page() {
  return <Dlss5GameGuide gameKey="starfield" />;
}
