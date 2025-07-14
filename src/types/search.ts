export interface SearchResult {
  id?: number;
  name?: string;
  type?: "service" | "seller" | "product";
  slug?: string;
  images?: string;
  description?: string;
}

export interface SearchApiResponse {
  code: number;
  message: string;
  data: {
    total: number;
    data: SearchResult[];
  };
}

export interface SearchComboboxProps {
  onSelection?: (result: SearchResult) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}
