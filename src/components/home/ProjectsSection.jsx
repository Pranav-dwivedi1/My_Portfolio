'use client';
import React, { useEffect, useState } from 'react';
import Project from './Project';
import MobileView from './MobileView';

export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 568);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileView /> : <Project />}
    </>
  );
}
