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
    title: `${params.id}`,
    description: `${params.desc}`,
    openGraph: {
      images: [{ url: `${params.image}`, alt: `${params.id}` }],
    },
  };
};

const Link = ({ params }: Props) => {
  return <></>;
};

export default Link;
