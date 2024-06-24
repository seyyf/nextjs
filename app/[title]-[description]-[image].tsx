// app/page.tsx

import React from "react";
import { Metadata } from "next";
import Image from "next/image";

// This function generates metadata based on URL search parameters
export async function generateMetadata({
  searchParams,
}: {
  searchParams: any;
}): Promise<Metadata> {
  const {
    title = "Default Title",
    description = "Default Description",
    image = "/default-image.png",
  } = searchParams;

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
  };
}

// This is the server component that uses URL search parameters for rendering
const Link = () => {
  return <div></div>;
};

export default Link;
