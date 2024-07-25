import React, { useEffect, useState } from "react";
import "../../assets/styles/banner.css"

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className={`cookie-banner slide-in${showBanner ? "" : " fade-out"}`}>
        <p>
          Este sitio web utiliza cookies. Al continuar, aceptas el uso de
          cookies.
        </p>
        <button onClick={acceptCookies}>Aceptar</button>
      </div>
    )
  );
};


export default CookieBanner;
