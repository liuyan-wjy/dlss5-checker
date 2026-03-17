import { CheckCircle2, XCircle } from "lucide-react";

type CellValue = boolean | string;

const rows: { feature: string; dlss3: CellValue; dlss4: CellValue; dlss45: CellValue; dlss5: CellValue }[] = [
  { feature: "Super Resolution (AI Upscaling)", dlss3: true, dlss4: true, dlss45: true, dlss5: true },
  { feature: "DLAA (Anti-Aliasing)", dlss3: true, dlss4: true, dlss45: true, dlss5: true },
  { feature: "Ray Reconstruction", dlss3: true, dlss4: true, dlss45: true, dlss5: true },
  { feature: "Frame Generation (1 AI frame)", dlss3: true, dlss4: true, dlss45: true, dlss5: true },
  { feature: "AI Model", dlss3: "CNN", dlss4: "Transformer v1", dlss45: "Transformer v2", dlss5: "Transformer v2+" },
  { feature: "Multi Frame Generation 4X (3 AI frames)", dlss3: false, dlss4: true, dlss45: true, dlss5: true },
  { feature: "Dynamic MFG 6X (5 AI frames)", dlss3: false, dlss4: false, dlss45: true, dlss5: true },
  { feature: "Neural Rendering (AI lighting & materials)", dlss3: false, dlss4: false, dlss45: false, dlss5: true },
  { feature: "Focus", dlss3: "Performance", dlss4: "Performance", dlss45: "Performance", dlss5: "Visual Fidelity" },
  { feature: "Min. GPU for full features", dlss3: "RTX 40", dlss4: "RTX 50", dlss45: "RTX 50", dlss5: "RTX 50 (confirmed)" },
  { feature: "Status", dlss3: "Released", dlss4: "Released (CES 2025)", dlss45: "Released (CES 2026)", dlss5: "Coming Fall 2026" },
];

function renderCell(value: CellValue, highlight?: boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 className="w-4 h-4 text-green-500 inline" />
    ) : (
      <XCircle className="w-4 h-4 text-red-400 inline" />
    );
  }
  return (
    <span className={`text-xs ${highlight ? "font-semibold text-blue-400" : "text-muted-foreground"}`}>
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="text-left px-4 py-3 font-semibold">Feature</th>
            <th className="text-center px-4 py-3 font-semibold text-muted-foreground">DLSS 3</th>
            <th className="text-center px-4 py-3 font-semibold">DLSS 4</th>
            <th className="text-center px-4 py-3 font-semibold">DLSS 4.5</th>
            <th className="text-center px-4 py-3 font-semibold text-blue-400">DLSS 5</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-muted/20"}`}
            >
              <td className="px-4 py-3 text-foreground/80">{row.feature}</td>
              <td className="px-4 py-3 text-center">{renderCell(row.dlss3)}</td>
              <td className="px-4 py-3 text-center">{renderCell(row.dlss4)}</td>
              <td className="px-4 py-3 text-center">{renderCell(row.dlss45)}</td>
              <td className="px-4 py-3 text-center">{renderCell(row.dlss5, true)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
