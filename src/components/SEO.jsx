import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  twitterImage,
  canonicalUrl,
  type = 'website'
}) => {
  const siteTitle = 'Vedic Gyan - Best Astrologer in Guwahati';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Top-rated Vedic astrologer in Guwahati, Assam. Expert in Kundli analysis, marriage compatibility, career guidance & spiritual solutions. Book online consultation with our experienced pandits.';
  const defaultKeywords = 'best astrologer in Guwahati, top pandit in Assam, Vedic astrology Guwahati, Kundli analysis Assam, marriage compatibility Guwahati, career guidance Assam, spiritual solutions Guwahati, online astrology consultation Assam, famous astrologer in Guwahati, best pandit in Assam, horoscope reading Guwahati, gemstone consultation Assam';
  const defaultImage = '/images/og-image.jpg';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl || 'https://astro-sandy-mu.vercel.app/'} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vedicgyan" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={twitterImage || defaultImage} />
    </Helmet>
  );
};

export default SEO; 