import { TitleFrontEnd } from "@/components";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push("/home");
        }}
      >
        <TitleFrontEnd />
      </main>
    </>
  );
}
