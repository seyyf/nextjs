import { Metadata } from "next";
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
    metadataBase: new URL(`${process.env.URL}`),
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

const page = () => {
  return <></>;
};

export default page;
