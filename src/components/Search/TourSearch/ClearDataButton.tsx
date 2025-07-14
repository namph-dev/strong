'use client';

import { IconMark } from '@/components/icons';
import React from 'react';
import { FC } from 'react';

export interface ClearDataButtonProps {
  onClick: () => void;
  className?: string;
}

const ClearDataButton: FC<ClearDataButtonProps> = ({ onClick, className }) => {
  return (
    <span
      onClick={() => onClick && onClick()}
      className={`absolute flex items-center justify-center w-5 h-5 text-sm transform -translate-y-1/2 rounded-full lg:w-6 lg:h-6 bg-neutral-200 dark:bg-neutral-800 right-3 top-1/2 ${className}`}
    >
      <IconMark className="w-4 h-4" />
    </span>
  );
};

export default ClearDataButton;
