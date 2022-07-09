import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ propertyForRent, propertyForSale }) {
  return (
    <>
      <Banner
        purpose="RENT A HOME"
        title1="Rental perfect home"
        title2="in the heart of the city"
        desc1="Explore apartments,Villas,Homes"
        desc2="in the heart of the city"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4
        "
        rent
      />
      <Flex flexWrap="wrap">
        {propertyForSale.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find,Buy & Own Your "
        title2="Dream Home"
        desc1="Explore apartments,Villas,Homes"
        desc2="in the heart of the city"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008
        "
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
