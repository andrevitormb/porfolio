import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
    title: string;
}

const Head = ({ title } : HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/glasses.png" />
    </NextHead>
  );
};

export default Head;