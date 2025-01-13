'use client';

import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { Links } from '@/Data/Data';

const FloatingNavDemo = () => {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={Links} />
    </div>
  );
};

export default FloatingNavDemo;
