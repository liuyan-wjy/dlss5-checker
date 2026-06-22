import { CheckCircle2, XCircle } from "lucide-react";

type CellValue = boolean | string;
type ComparisonLocale = "en" | "pt";

const rows: Record<
  ComparisonLocale,
  { feature: string; dlss3: CellValue; dlss4: CellValue; dlss45: CellValue; dlss5: CellValue }[]
> = {
  en: [
    { feature: "Super Resolution (AI Upscaling)", dlss3: true, dlss4: true, dlss45: true, dlss5: "Via current stack" },
    { feature: "DLAA (Anti-Aliasing)", dlss3: true, dlss4: true, dlss45: true, dlss5: "Via current stack" },
    { feature: "Ray Reconstruction", dlss3: true, dlss4: true, dlss45: true, dlss5: "Via current stack" },
    { feature: "Frame Generation (1 AI frame)", dlss3: true, dlss4: true, dlss45: true, dlss5: "Via current stack" },
    { feature: "AI Model", dlss3: "CNN", dlss4: "Transformer", dlss45: "2nd-gen Transformer", dlss5: "Neural rendering layer" },
    { feature: "Multi Frame Generation 4X (3 AI frames)", dlss3: false, dlss4: true, dlss45: true, dlss5: "Via current stack" },
    { feature: "Dynamic MFG 6X (5 AI frames)", dlss3: false, dlss4: false, dlss45: true, dlss5: "Via current stack" },
    { feature: "Neural Rendering (AI lighting & materials)", dlss3: false, dlss4: false, dlss45: false, dlss5: true },
    { feature: "Focus", dlss3: "Performance", dlss4: "Performance", dlss45: "Performance", dlss5: "Visual Fidelity" },
    { feature: "Min. GPU for full features", dlss3: "RTX 40", dlss4: "RTX 50", dlss45: "RTX 50", dlss5: "RTX 50 safest" },
    { feature: "Status", dlss3: "Released", dlss4: "Released (CES 2025)", dlss45: "Released (CES 2026)", dlss5: "Coming Fall 2026" },
  ],
  pt: [
    { feature: "Super Resolution (upscaling por IA)", dlss3: true, dlss4: true, dlss45: true, dlss5: "Pela pilha atual" },
    { feature: "DLAA (anti-aliasing)", dlss3: true, dlss4: true, dlss45: true, dlss5: "Pela pilha atual" },
    { feature: "Ray Reconstruction", dlss3: true, dlss4: true, dlss45: true, dlss5: "Pela pilha atual" },
    { feature: "Frame Generation (1 quadro por IA)", dlss3: true, dlss4: true, dlss45: true, dlss5: "Pela pilha atual" },
    { feature: "Modelo de IA", dlss3: "CNN", dlss4: "Transformer", dlss45: "Transformer de 2ª geração", dlss5: "Camada de Neural Rendering" },
    { feature: "Multi Frame Generation 4X (3 quadros por IA)", dlss3: false, dlss4: true, dlss45: true, dlss5: "Pela pilha atual" },
    { feature: "Dynamic MFG 6X (5 quadros por IA)", dlss3: false, dlss4: false, dlss45: true, dlss5: "Pela pilha atual" },
    { feature: "Neural Rendering (iluminação e materiais por IA)", dlss3: false, dlss4: false, dlss45: false, dlss5: true },
    { feature: "Foco", dlss3: "Desempenho", dlss4: "Desempenho", dlss45: "Desempenho", dlss5: "Fidelidade visual" },
    { feature: "GPU mínima para recursos completos", dlss3: "RTX 40", dlss4: "RTX 50", dlss45: "RTX 50", dlss5: "RTX 50 é o caminho mais seguro" },
    { feature: "Status", dlss3: "Lançado", dlss4: "Lançado (CES 2025)", dlss45: "Lançado (CES 2026)", dlss5: "Chega no outono de 2026" },
  ],
};

const headerCopy: Record<ComparisonLocale, { feature: string }> = {
  en: { feature: "Feature" },
  pt: { feature: "Recurso" },
};

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

export default function ComparisonTable({ locale = "en" }: { locale?: ComparisonLocale }) {
  const activeRows = rows[locale];
  const copy = headerCopy[locale];

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="text-left px-4 py-3 font-semibold">{copy.feature}</th>
            <th className="text-center px-4 py-3 font-semibold text-muted-foreground">DLSS 3</th>
            <th className="text-center px-4 py-3 font-semibold">DLSS 4</th>
            <th className="text-center px-4 py-3 font-semibold">DLSS 4.5</th>
            <th className="text-center px-4 py-3 font-semibold text-blue-400">DLSS 5</th>
          </tr>
        </thead>
        <tbody>
          {activeRows.map((row, i) => (
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
