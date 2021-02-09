import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Link to={'/'} style={{ textDecoration: 'none', color: 'green' }} >
      <p style={{ textAlign: 'center', fontSize: '35px', margin: '10px' }}>
        Last Airbender
      </p>
    </Link>
  );
}

