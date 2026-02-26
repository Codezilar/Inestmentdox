"use client";

import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Since we're using "use client", we need to handle metadata differently
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showFdicBadge, setShowFdicBadge] = useState(true);

  // Load badge visibility preference from localStorage on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('hideFdicBadge');
    if (savedPreference === 'true') {
      setShowFdicBadge(false);
    }
  }, []);

  // Save preference to localStorage when badge is hidden
  const hideFdicBadge = () => {
    setShowFdicBadge(false);
    localStorage.setItem('hideFdicBadge', 'true');
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Goldman Bank</title>
          <meta name="description" content="Experience the future of banking with our secure innovative, and user-friendly platform designed for modern financial needs." />
          <link rel="icon" href="/goldmanbank.jpeg" sizes="any" />
        </head>
        <body>
          {children}
          
          {/* Combined FDIC Image and Text Badge with Cancel Button */}
          {showFdicBadge && (
            <div style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1000,
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '15px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              maxWidth: '320px'
            }}>
              {/* Close button */}
              <button
                onClick={hideFdicBadge}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '25px',
                  color: '#999',
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                  e.currentTarget.style.color = '#333';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#999';
                }}
                aria-label="Close FDIC badge"
              >
                ×
              </button>
              
              {/* FDIC Logo Image */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#005da6',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  padding: '5px'
                }}>
                  FDIC
                </div>
              </div>
              
              {/* FDIC Text Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                flex: 1,
                marginRight: '10px'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#005da6'
                }}>
                  FDIC INSURED
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#333',
                  lineHeight: '1.4'
                }}>
                  <div>Member FDIC</div>
                  <div>Deposits insured up to $250,000</div>
                  <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>
                    Goldman Bank is an FDIC member institution
                  </div>
                </div>
              </div>
            </div>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}