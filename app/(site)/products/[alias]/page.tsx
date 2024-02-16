import { getMenu } from "@/api/meu";
import { getPage } from "@/api/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

export default async function Products({
  params,
}: {
  params: { alias: string };
}) {
  const pageData = await getPage(params.alias);
  if (!pageData) {
    notFound();
  }
  return (
    <div>
      Страница с alias {params.alias}, {pageData.title}
    </div>
  );
}
