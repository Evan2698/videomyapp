import React from 'react';


const googleAdId = 'ca-pub-2479554011935821';
const classNames_ad = '';
class AdsComponent extends React.Component {

    componentDidMount() {
        const timeout =200;
        this.googleInit = setTimeout(() => {
          if (typeof window !== 'undefined')
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, timeout);
      }

      
    render() {

        return (
            <div className={classNames_ad}>
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={googleAdId}
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>
          );
    }
}


export default AdsComponent;