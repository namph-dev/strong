'use client';
import * as React from 'react';
import { IconChevronDown, IconChevronUp } from '../icons';

export interface IReadMoreProps {
  children: React.ReactNode;
  className?: String;
}

export default function ReadMore({ children, className }: IReadMoreProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [isOverflow, setIsOverflow] = React.useState<boolean>(false);

  const contentRef = React.useRef<HTMLParagraphElement | null>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef?.current?.scrollHeight;
      const lineHeight = parseInt(
        window.getComputedStyle(contentRef.current).lineHeight
      );
      const numberOfLines = contentHeight / lineHeight;
      setIsOverflow(numberOfLines > 3);
    }
  }, [children]);

  return (
    <>
      <p ref={contentRef} className={`${className} ${!open && 'line-clamp-3'}`}>
        {children}
      </p>
      {isOverflow && (
        <div
          className="flex items-center gap-2 font-medium cursor-pointer hover:underline"
          onClick={() => setOpen(!open)}>
          {open ? 'Read less' : 'Read more'}
          {open ? (
            <IconChevronUp className="w-4 h-4 fill-text1" />
          ) : (
            <IconChevronDown className="w-4 h-4 fill-text1" />
          )}
        </div>
      )}
    </>
  );
}
