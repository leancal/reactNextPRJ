import { useRouter } from 'next/router';
import Loading from "../../components/Loading";
import ProductContent from "../../components/ProductContent";
import Head from "next/head";
import texts from "../../content/texts";

export default function Producto({ prod, features, includes, featuredFeatures }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      {prod && (
        <Head>
          <title>{prod.sku + texts.spacer + texts.aiwaElec}</title>
        </Head>
      )}
      <section className="product-page">
        {!prod ? <Loading /> : <ProductContent prod={prod} features={features} includes={includes} />}
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const apiUrl = process.env.API_URL;

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`${apiUrl}${endpoint}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
      }
      return await res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const endpoints = ['/api/audio', '/api/headsets', '/api/discontinuos', '/api/cooks', '/api/tablets', '/api/notebooks', '/api/features', '/api/includes', '/api/featuredFeatures'];
  const [audio, headsets, discontinuos, cooks, tablets, notebooks, features, includes, featuredFeatures] = await Promise.all(endpoints.map(fetchData));

  const prod = [...audio, ...headsets, ...discontinuos, ...cooks, ...tablets, ...notebooks].find((p) => p.sku === context.params.prod);

  return {
    props: { prod, features, includes, featuredFeatures },
  };
}
