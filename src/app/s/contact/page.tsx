import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";
import MainContent from "./MainContent";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const serviceEncoded = params.service;

  const service = serviceEncoded
    ? decodeURIComponent(serviceEncoded.toString())
    : null;

  return (
    <>
      <Header />
      <MainContent service={service} />
      <Footer />
    </>
  );
}
