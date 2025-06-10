"use client";
import React from 'react'
import Hero from '../components/home/Hero';
import Projects from '../components/home/Project';
import Skill from '../components/home/MySkills';
import Cta from '../components/home/Cta';
import Blogs from '../components/home/Blogs';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';



export default function page () {
  return (
   <>
   <Hero/>
    <Projects/>
    <Skill/>
    <Blogs/>
    <Cta/>
    <WhatsAppWidget />

    
   </>
  )
}
