// src/app/campanhas/page.tsx
import React from 'react';
import Topbar from '../component/topbar';
import CampanhasCarousel from '../component/campanhas';

export default function CampanhasPage() {
  return (
    <>
      <Topbar />
      <CampanhasCarousel />
    </>
  );
}