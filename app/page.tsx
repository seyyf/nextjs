import Image from "next/image";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Link from "./pages/link";
import Head from "next/head";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "teeeeeeeest",
    description: "deeeeeeeeeeeeesc",
  };
}

export default function Home() {
  return (
    <>
      s<p>hhhhhhhhhhhhh</p>
    </>
  );
}
