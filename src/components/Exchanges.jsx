// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { server } from "../main";
import { Container, Text } from "@chakra-ui/react";
import Loader from "./Loader";
import { HStack, VStack, Image, Heading } from "@chakra-ui/react";
import ErrorComponents from "./ErrorComponents";

const Exchanges = () => {
  // eslint-disable-next-line no-unused-vars
  const [exchanges, setExchanges] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [Error,setError] = useState(false);


  useEffect(() => {
    const fetchExchanges = async () => {
        try {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    }  catch (error) {
      setLoading(false);
      setError(true)
    }
    };
    fetchExchanges();
  }, []);

  if( Error) 
  return <ErrorComponents message={"Error While Fechning Exchanges"} />

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

// eslint-disable-next-line react/prop-types
const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
    w={"52"}
    shadow={"lg"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={{
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
    >
      <Image
        src={img}
        w={"10"}
        objectFit={"contain"}
        h={"10"}
        alt={"Exchange"}
      />

      <Heading size={"md"}>{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
