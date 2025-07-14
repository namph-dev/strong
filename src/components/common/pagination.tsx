"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const createPageUrl = (page: number) => {
    return `?page=${page}`;
  };

  const handlePageChange = (page: number) => {
    router.push(createPageUrl(page));
  };

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const primaryBgColor = "bg-gray-200";

  return (
    <div className="pb-4 font-sans flex justify-center">
      <div className="flex flex-wrap gap-2 items-center">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <Button
              key={`page-${page}`}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium text-sm sm:text-base transition-all cursor-pointer ${page === currentPage
                ? `${primaryBgColor} text-gray-800`
                : "bg-white text-gray-800 hover:bg-gray-300"
                }`}
            >
              {page}
            </Button>
          )
        )}

        {/* Next button */}
        {currentPage !== totalPages && (
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 flex items-center rounded-lg font-medium transition-all text-sm sm:text-base cursor-pointer ${currentPage === totalPages
              ? "bg-gray-200 text-gray-400"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Pagination;