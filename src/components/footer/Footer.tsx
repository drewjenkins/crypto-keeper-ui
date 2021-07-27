"use es6";

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <Container
    style={{
      background: "#fafafa",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      paddingBottom: 5,
      fontSize: "12px",
      flex: "0 0 auto",
    }}
    maxWidth={false}
  >
    <span>
      <SocialIcon
        style={{ marginRight: 5, width: 30, height: 30 }}
        url="https://www.linkedin.com/in/andrewjamesjenkins"
      />
      <SocialIcon
        style={{ marginRight: 5, width: 30, height: 30 }}
        url="https://github.com/drewjenkins/crypto-keeper"
      />
      <SocialIcon
        style={{ width: 30, height: 30, marginRight: 5 }}
        url="mailto:andrew.jenkins88@gmail.com?subject=Cool%20Site!&body=Hey,%20just%20wanted%20to%20say%20I%20like%20your%20site!"
      />
    </span>

    <Link href="https://www.coingecko.com/" target="_blank">
      Powered by CoinGecko API
    </Link>
  </Container>
);

export default Footer;
