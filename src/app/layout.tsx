import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Goldman Bank",
  description: "Experience the future of banking with our secure innovative, and user-friendly platform designed for modern financial needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/goldmanbank.jpeg" sizes="any" />
        </head>
        <body>
          {children}
          
          {/* Combined FDIC Image and Text Badge */}
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
            {/* FDIC Logo Image - You'll need to add your FDIC logo to public folder */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Replace '/fdic-logo.png' with your actual FDIC logo path */}
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
              {/* Or use actual image if you have one:
              <Image 
                src="/fdic-logo.png" 
                alt="FDIC Logo" 
                width={70}
                height={70}
                style={{ objectFit: 'contain' }}
              />
              */}
            </div>
            
            {/* FDIC Text Content */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
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
        </body>
      </html>
    </ClerkProvider>
  );
}