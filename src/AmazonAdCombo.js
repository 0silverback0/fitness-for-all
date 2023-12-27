import React from 'react';

const AmazonAdCombo = () => {
  return (
    <div className='text-center mt-3'>
      {/* Amazon Ad 1 */}
      <iframe
        title='ad1'
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style={{ width: '120px', height: '240px' }}
        marginWidth="0"
        marginHeight="0"
        scrolling="no"
        frameBorder="0"
        src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=trifit00-20&language=en_US&marketplace=amazon&region=US&placement=B07MBVP4MX&asins=B07MBVP4MX&linkId=b5a3a0a4f9feb4e7a65cc5b8ab181c5c&show_border=true&link_opens_in_new_window=true"
      />

      {/* Amazon Ad 2 */}
      <iframe
        title='ad2'
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style={{ width: '120px', height: '240px' }}
        marginWidth="0"
        marginHeight="0"
        scrolling="no"
        frameBorder="0"
        src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=trifit00-20&language=en_US&marketplace=amazon&region=US&placement=B01HOPJ522&asins=B01HOPJ522&linkId=079c297f3ea3ce088416dec35fbcc3a4&show_border=true&link_opens_in_new_window=true"
      />
    </div>
  );
};

export default AmazonAdCombo;
