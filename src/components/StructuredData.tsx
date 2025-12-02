import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'project';
  data?: Record<string, any>;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://wise-root.vercel.app",
          "name": "Wise Root Design Studio",
          "alternateName": "Wise Root",
          "description": "Leading architecture and urban planning firm specializing in sustainable design, master planning, and innovative architectural solutions.",
          "url": "https://wise-root.vercel.app",
          "logo": "https://wise-root.vercel.app/wise_root_logo.png",
          "image": "https://wise-root.vercel.app/og-image.jpg",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "G-10, Patel Nagar Society, Jahangir Pura, Surat, Gujarat, 395004",
            "addressLocality": "Surat",
            "addressRegion": "Gujarat",
            "postalCode": "395004",
            "addressCountry": "IN"
          },
          "telephone": "+918780364153",
          "email": "wiseroot.design5@gmail.com",
          "openingHours": "Mo-Fr 09:00-18:00",
          "sameAs": [
            "https://www.facebook.com/wiserootdesign",
            "https://www.instagram.com/wiserootdesign",
            "https://www.linkedin.com/company/wiserootdesign",
            "https://twitter.com/wiserootdesign"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "21.245883",
              "longitude": "72.784867"
            },
            "geoRadius": "50000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Architecture and Urban Planning Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Architectural Design",
                  "description": "Creative and functional architectural solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Urban & Town Planning",
                  "description": "Strategic urban development and master planning"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "GIS & Mapping Services",
                  "description": "Advanced spatial data and analysis"
                }
              }
            ]
          }
        };
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Wise Root Design Studio",
          "url": "https://wise-root.vercel.app",
          "description": "Leading architecture and urban planning firm",
          "publisher": {
            "@type": "Organization",
            "name": "Wise Root Design Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://wise-root.vercel.app/logo.png"
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://wise-root.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
      case 'project':
        return data || {};
      
      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
