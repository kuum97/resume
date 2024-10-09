export const handleExportPDF = async () => {
  const response = await fetch("/api/export-pdf", { method: "GET" });
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "권주현_이력서.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};
