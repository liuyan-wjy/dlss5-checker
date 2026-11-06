import Dlss5GameGuide, {
  createDlss5GameMetadata,
} from "@/components/Dlss5GameGuide";

export const metadata = createDlss5GameMetadata("hogwarts-legacy");

export default function HogwartsLegacyDlss5Page() {
  return <Dlss5GameGuide gameKey="hogwarts-legacy" />;
}
