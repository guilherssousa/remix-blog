import Layout from "~/components/layout";
import AboutMe from "~/components/about-me";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  console.log(params);

  return json({ params });
};

export default function ArticlePage() {
  const data = useLoaderData();

  return (
    <Layout>
      <div className="md:flex pt-10 justify-around">
        <AboutMe />
        <main className="md:w-full mt-8 md:mt-0 md:max-w-3xl px-6">Oi</main>
      </div>
    </Layout>
  );
}
