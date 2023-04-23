import Script from 'next/script';

// <script src="https://connect.facebook.net/en_US/sdk.js" />
export default function MyNextScript() {
    return (
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    )
}