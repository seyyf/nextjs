import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
    desc: string;
    image: string;
    url: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const encodedImage = params.image;
  const encodedUrl = params.url;
  const image = decodeURIComponent(encodedImage);
  const url = decodeURIComponent(encodedUrl);
  return {
    metadataBase: new URL("https://decadance-staging.uteek.net/"),
    openGraph: {
      images: [
        { url: `${image}`, alt: `${params.id}`, width: 500, height: 600 },
      ],
      description: `${params.desc}`,
      title: `${params.id}`,
      url: `${url}`,
    },
  };
};

const Link = ({ params }: Props) => {
  redirect(`https://decadance-staging.uteek.net/${params.url}`);
  return <></>;
};

export default Link;
