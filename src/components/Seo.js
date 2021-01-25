import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
        siteImage: image
        siteDesc: description
      }
    }
  }
`;

const SEO = ({ title, description, language, image, pageUrl, slug }) => {
  const { site } = useStaticQuery(getData);
  const { siteDesc, siteTitle, siteUrl, siteImage } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{ lang: language }}
      title={`${title} | ${siteTitle}`}
    >
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={siteImage || image} />

      {/* Twitter Card */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${siteImage || image}`} />

      {/* Facebook Card */}

      <meta property="og:url" content={pageUrl || siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={`${siteUrl}${siteImage || image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:url" content={pageUrl || siteUrl} />

      {/* Language References */}
      <link
        rel="alternate"
        href={`https://chance-im-konflikt.de/${slug}`}
        hrefLang="de"
      />

      <script type="text/javascript">
        {`
var cpm = {};
(function(h,u,b){
var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
e.async=true;e.src='https://cookiehub.net/c2/43d7ff3c.js';
e.onload=function(){u.cookiehub.load(b);}
d.parentNode.insertBefore(e,d);
})(document,window,cpm); `}
      </script>
    </Helmet>
  );
};

export default SEO;
