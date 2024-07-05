import Head from "next/head";

export const siteTitle = "baggiiiie";
const icon = "pics/test.png";

export default function Layout() {
  return (
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/sticker.png" />
    </Head>
  );
}
