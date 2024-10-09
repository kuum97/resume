import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.addStyleTag({
    content: `
      button {
        display: none;
      }
    `,
  });

  await page.goto(
    "https://resume-ph7brtwbr-kuum97s-projects.vercel.app/pdf-render",
    {
      waitUntil: "networkidle2",
    }
  );

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    },
  });
}
