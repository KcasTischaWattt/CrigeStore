import React from 'react';

function CatalogButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && (
        <Link to="/products" className="button">View Catalog</Link>
      )}
    </div>
  );
}

export default SecretComponent;