import React, { useState } from "react";

import { animated, useSprings } from "@react-spring/web";

import styled, { ThemeProvider } from "styled-components";

import { Box, Container, Typography, Flex, Grid, theme } from "../../ui";

import "../../ui/molecules/global-styles/global.css";

import Cards from "../portfolio/Cards";

const styles = {
  portfolio: {
    maxWidth: '1200px',
    margin: 'auto'
  }
}

const GridContainer = styled(Grid)``;
GridContainer.defaultProps = {
  gridTemplateColumns: [
    "repeat(1, 1fr)",
    null,
    "repeat(2, 1fr)",
    "repeat(4, 1fr)",
  ],
  gridGap: [1, null, 2],
};

const AnimatedItem = styled(animated(Flex))`
  cursor: pointer;
`;
AnimatedItem.defaultProps = {
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  height: [450, null, 450],
};

const TitleWrapper = styled(animated(Flex))``;
TitleWrapper.defaultProps = {
  color: "text100",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: 1,
  height: "100%",
  p: [1, null, 2],
  background: "rgba(0,0,0,0.6)",
  fontSize: [4, null, 5],
};

const TextWrapper = styled(animated(Flex))`
  overflow: hidden;
`;
TextWrapper.defaultProps = {
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  height: "100%",
  background: "#fff",
  fontSize: 1,
};

const AnimatedBox = styled(animated(Box))``;
AnimatedBox.defaultProps = {};

function Portfolio() {
  const [index, setIndex] = useState(null);
  const [isDelayed, setIsDelayed] = useState(true);

  const springs = useSprings(
    Cards.length,
    Cards.map((item, i) => ({
      delay: isDelayed ? 250 * i : 0,
      opacity: 1,
      transform: "translateY(0px)",
      overlayOpacity: i === index ? 0 : 1,
      textOpacity: i === index ? 1 : 0,
      textHeight: i === index ? "100%" : "0%",
      from: {
        opacity: 0,
        transform: "translateY(100px)",
        overlayOpacity: 1,
        textOpacity: 0,
        textHeight: "0%",
      },
    }))
  );

  return (
    <div style={styles.portfolio} id="work" className="row">
      <div></div>
      <ThemeProvider theme={theme}>
        <Box minHeight="100vh" pt={5} pb={6}>
          <Container>
            <h2 className="text-center pt-5 pb-5">Portfolio</h2>
            {/* <Heading textAlign="center" pb={4} >
            Portfolio
          </Heading> */}
            <GridContainer>
              {springs.map(
                (
                  {
                    opacity,
                    transform,
                    overlayOpacity,
                    textOpacity,
                    textHeight,
                  },
                  i
                ) => (
                  <AnimatedItem
                    onClick={() => {
                      setIndex(i);
                      setIsDelayed(false);
                    }}
                    key={i}
                  >
                    <AnimatedItem
                      background={`url(${Cards[i].img}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}
                      style={{ opacity, transform }}
                    >
                      <TitleWrapper style={{ opacity: overlayOpacity }}>
                        {Cards[i].title}
                      </TitleWrapper>
                    </AnimatedItem>
                    <TextWrapper style={{ height: textHeight }}>
                      <AnimatedBox style={{ opacity: textOpacity }} p={2}>
                        <Typography fontSize={3} fontWeight={2} pb={2}>
                          {Cards[i].title}
                        </Typography>
                        {Cards[i].text}
                      </AnimatedBox>
                      <Typography>
                        <button type="button" className="mx-2 btn btn-info">
                          <a 
                            href={`${Cards[i].deployedLink}`} 
                            className="text-decoration-none text-black"
                          >
                            Deployed link
                          </a>
                        </button>
                        <button type="button" className="mx-2 btn btn-info">
                          <a
                            href={`${Cards[i].githubLink}`}
                            className="text-decoration-none text-black"
                          >
                            GitHub Link
                          </a>
                        </button>
                      </Typography>
                    </TextWrapper>
                  </AnimatedItem>
                )
              )}
            </GridContainer>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Portfolio;
