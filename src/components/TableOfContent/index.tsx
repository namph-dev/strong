"use client";

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // console.log('TableOfContents headings:', headings);
  // console.log('Headings levels:', headings.map(h => ({ text: h.text, level: h.level })));
  
  // Check if we have any h2 headings
  const hasH2 = headings.some(h => h.level === 2);
  
  let finalHeadings;
  
  if (hasH2) {
    // Original logic: h2 as parent, h3 as children
    finalHeadings = headings.reduce((acc, heading) => {
      if (heading.level === 2) {
        acc.push({ ...heading, children: [], index: acc.length + 1 });
      } else if (heading.level === 3 && acc.length > 0) {
        acc[acc.length - 1].children.push({
          ...heading,
          childIndex: acc[acc.length - 1].children.length + 1
        });
      }
      return acc;
    }, [] as any[]);
  } else {
    // No h2 headings: treat all h3 as parent headings
    finalHeadings = headings.map((heading, index) => ({ 
      ...heading, 
      children: [], 
      index: index + 1 
    }));
  }

  // console.log('Final headings:', finalHeadings);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm max-h-[358px] lg:max-h-[406px] overflow-hidden flex flex-col">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
        onClick={toggleCollapse}
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <h2 className="text-[16px] leading-[24px] font-[600] text-[#111827]">Index</h2>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          {isCollapsed ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>

      {/* Content */}
      {!isCollapsed && (
        <div className="p-4 flex-1 overflow-y-auto">
          <nav>
            <ol className="space-y-2">
              {finalHeadings.map((heading) => (
                <li key={heading.id} className="text-sm">
                  <a
                    href={`#${heading.id}`}
                    className="text-[#111827] hover:underline font-medium text-[16px] leading-[24px]"
                  >
                    {heading.index}. {heading.text}
                  </a>
                  {heading.children && heading.children.length > 0 && (
                    <ol className="mt-1 ml-4 space-y-1">
                      {heading.children.map((child: any) => (
                        <li key={child.id} className="text-sm">
                          <a
                            href={`#${child.id}`}
                            className="text-gray-700 hover:underline"
                          >
                            {heading.index}.{child.childIndex}. {child.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;