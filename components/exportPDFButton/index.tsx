"use client";

import { handleExportPDF } from "@/utils";
import { useTransition } from "react";

export default function ExportPDFButton() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await handleExportPDF();
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`mt-6 p-2 bg-blue-500 text-white absolute top-0 right-10 rounded-md transition-colors ${
        isPending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
      }`}
    >
      PDF로 추출하기
    </button>
  );
}
