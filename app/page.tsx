import ExportPDFButton from "@/components/exportPDFButton";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <div className="w-screen py-10 relative">
      <Resume />
      <ExportPDFButton />
    </div>
  );
}
