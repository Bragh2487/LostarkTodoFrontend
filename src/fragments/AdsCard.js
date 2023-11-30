import React, { useEffect } from 'react';

export default function AdsCard() {
    useEffect(() => {
        if (window.adsbygoogle && process.env.NODE_ENV !== "development") {
            window.adsbygoogle.push({});
        }
    }, [])

    return (
        <ins className="adsbygoogle"
            style={{ "display": "block" }}
            data-ad-client="ca-pub-9665234618246720"
            data-ad-slot="1480898783"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
}