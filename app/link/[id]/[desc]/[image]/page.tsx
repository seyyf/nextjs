import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    id: string;
    desc: string;
    image: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const encodedImage = params.image;

  const image = decodeURIComponent(encodedImage);
  console.log(image, "image");
  return {
    metadataBase: new URL("https://decadance-staging.uteek.net/"),
    openGraph: {
      images: [
        { url: `${image}`, alt: `${params.id}`, width: 500, height: 600 },
      ],
      description: `${params.desc}`,
      title: `${params.id}`,
    },
  };
};

const Link = ({ params }: Props) => {
  return <></>;
};

export default Link;
