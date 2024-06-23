import { GetServerSideProps } from "next";
import { Metadata } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { title, description, image } = query;

  return {
    props: {
      title: title || "Default Title",
      description: description || "Default Description",
      image: image || "/default-image.png",
    },
  };
};

export async function generateMetadata({
  title,
  description,
  image,
}: any): Promise<Metadata> {
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

export default function Home({ title, description, image }: any) {
  return (
    <>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      {image && <img src={image} alt={title} />}
    </>
  );
}
