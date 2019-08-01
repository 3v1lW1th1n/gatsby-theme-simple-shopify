import React from 'react';
import { Flex, Box } from 'rebass';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import './reset.css';
import { ShopifyClientProvider } from 'gatsby-theme-simple-shopify/src/components/ShopifyContext';

function SiteLayout(props) {
  return (
    <ShopifyClientProvider>
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column" style={{ minHeight: '100vh' }}>
          <Navbar />
          <Box
            flex="1"
            width={1}
            style={{ maxWidth: 1300 }}
            mx="auto"
            px={[3, null, 4]}
          >
            {props.children}
          </Box>
          <Footer />
        </Flex>
      </ThemeProvider>
    </ShopifyClientProvider>
  );
}

export default SiteLayout;
