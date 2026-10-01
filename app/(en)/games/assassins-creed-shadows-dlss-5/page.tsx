import Dlss5GameGuide, {
  createDlss5GameMetadata,
} from "@/components/Dlss5GameGuide";

export const metadata = createDlss5GameMetadata("assassins-creed-shadows");

export default function AssassinsCreedShadowsDlss5Page() {
  return <Dlss5GameGuide gameKey="assassins-creed-shadows" />;
}
