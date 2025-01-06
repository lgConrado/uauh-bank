import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={bannerStyles.container}>
      <p style={bannerStyles.text}>
        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies.{' '}
        <a href="/bank/politica-privacidade" style={bannerStyles.link} target="_blank" rel="noopener noreferrer">
          Saiba mais
        </a>
      </p>
      <button style={bannerStyles.button} onClick={handleAccept}>
        Aceitar
      </button>
    </div>
  );
};

const bannerStyles = {
  container: {
    position: 'fixed' as 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#21244d',
    color: '#fff',
    padding: '15px',
    textAlign: 'center' as 'center',
    zIndex: 1000,
  },
  text: {
    margin: 0,
    display: 'inline-block',
  },
  link: {
    color: '#1cbcd9',
    textDecoration: 'underline',
  },
  button: {
    marginLeft: '10px',
    backgroundColor: '#1cbcd9',
    border: 'none',
    color: '#fff',
    padding: '8px 15px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default CookieBanner;
