import Script from 'next/script';

interface GoogleAnalyticsScriptProps {
  googleAnalyticsTrackingId: string
}

export const GoogleAnalyticsScript: React.VFC<GoogleAnalyticsScriptProps> = (props) => {
  const { googleAnalyticsTrackingId } = props;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsTrackingId}');
        `}
      </Script>
    </>
  );
};
