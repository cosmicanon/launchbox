import React from "react";
import { Helmet } from "react-helmet";

export const Seo = ({ description = "", meta = [], title = "" }) => (
  <Helmet
    title={title}
    meta={[
      { name: `description`, content: description },
      { property: `og:title`, content: title },
      { property: `og:description`, content: description },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary` },
      { name: `twitter:title`, content: title },
      { name: `twitter:description`, content: description },
    ].concat(meta)}
  />
);
