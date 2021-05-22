import React from "react";
import { Helmet } from "react-helmet";
import { url } from "../data";
import { logo3 } from "../images";

export const Seo = ({
  description = "",
  meta = [],
  title = "",
  image = "",
}) => (
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
      { property: `og:image`, content: image || logo3 },
      { name: `twitter:image`, content: image || logo3 },
    ].concat(meta)}
  >
  </Helmet>
);
