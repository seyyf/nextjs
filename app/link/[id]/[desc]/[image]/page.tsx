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
  return {
    metadataBase: new URL(
      "https://decadance-staging.uteek.net/dashboard/detailEvent/66744977a42b2b2157ea6f9e"
    ),
    openGraph: {
      images: [{ url: `${params.image}`, alt: `${params.id}` }],
      description: `${params.desc}`,
      title: `${params.id}`,
    },
  };
};

const Link = ({ params }: Props) => {
  return <></>;
};

export default Link;
