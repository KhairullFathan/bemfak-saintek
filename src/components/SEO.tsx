import React, { ReactNode } from "react";
import Head from "next/head";
interface propsSEO {
  title: string,
  description: string,
  children?: ReactNode, 
}
export default function SEO(props: Partial<propsSEO>) {
  const {title, description} = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicons/bemfaksaintek.ico" type="image/x-icon" />
    </Head>
  );
}
