import React from 'react';

const AmazonAd = () => {
  return (
    <div className='text-center mt-3'>
    <iframe
      sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
      style={{ width: '120px', height: '240px' }}
      marginWidth="0"
      marginHeight="0"
      scrolling="no"
      frameBorder="0"
      src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=trifit00-20&language=en_US&marketplace=amazon&region=US&placement=B09F925LQC&asins=B09F925LQC&linkId=acedd3607692616a13cabd62e5656682&show_border=true&link_opens_in_new_window=true"
    />
    </div>
  );
};

export default AmazonAd;
