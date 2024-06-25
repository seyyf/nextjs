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
  const encodedTitle = params.id;
  const encodedDescription = params.desc;
  const encodedImage = params.image;

  const title = decodeURIComponent(encodedTitle);
  const description = decodeURIComponent(encodedDescription);
  const image = decodeURIComponent(encodedImage);

  return {
    metadataBase: new URL(
      "https://decadance-staging.uteek.net/dashboard/detailEvent/66744977a42b2b2157ea6f9e"
    ),
    openGraph: {
      images: [{ url: `${image}`, alt: `${title}` }],
      description: `${description}`,
      title: `${title}`,
    },
  };
};

const Link = ({ params }: Props) => {
  return <></>;
};

export default Link;
