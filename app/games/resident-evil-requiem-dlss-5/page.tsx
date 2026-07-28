import Dlss5GameGuide, {
  createDlss5GameMetadata,
} from "@/components/Dlss5GameGuide";

export const metadata = createDlss5GameMetadata("resident-evil-requiem");

export default function ResidentEvilRequiemDlss5Page() {
  return <Dlss5GameGuide gameKey="resident-evil-requiem" />;
}
