// Map component types
export interface LocationData {
  code: number;
  message: string;
  data: {
    data: {
      html_attributions: string[];
      result: {
        address_components: Array<{
          long_name: string;
          short_name: string;
          types: string[];
        }>;
        adr_address: string;
        formatted_address: string;
        geometry: {
          location: {
            lat: number;
            lng: number;
          };
          viewport: {
            northeast: {
              lat: number;
              lng: number;
            };
            southwest: {
              lat: number;
              lng: number;
            };
          };
        };
        icon: string;
        icon_background_color: string;
        icon_mask_base_uri: string;
        name: string;
        place_id: string;
        reference: string;
        types: string[];
        url: string;
        utc_offset: number;
        vicinity: string;
      };
      status: string;
    };
  };
}

export interface MapProps {
  locationData?: LocationData;
  height?: string;
  width?: string;
  zoom?: number;
  className?: string;
  showInfoWindow?: boolean;
  onMarkerClick?: (location: LocationData["data"]["data"]["result"]) => void;
}

export interface MapContainerStyle {
  width: string;
  height: string;
}

// LocationSearch component types
export interface PlacePrediction {
  description: string;
  place_id: string;
  reference: string;
  matched_substrings: Array<{
    length: number;
    offset: number;
  }>;
  structured_formatting: {
    main_text: string;
    main_text_matched_substrings: Array<{
      length: number;
      offset: number;
    }>;
    secondary_text: string;
  };
  terms: Array<{
    offset: number;
    value: string;
  }>;
  types: string[];
}

export interface GooglePlacesApiResponse {
  code: number;
  message: string;
  data: {
    data: {
      predictions: PlacePrediction[];
      status: string;
    };
  };
}

// Google Places Details API Response
export interface GooglePlacesDetailsResponse {
  code: number;
  message: string;
  data: {
    data: {
      html_attributions: string[];
      result: {
        address_components: Array<{
          long_name: string;
          short_name: string;
          types: string[];
        }>;
        adr_address: string;
        formatted_address: string;
        geometry: {
          location: {
            lat: number;
            lng: number;
          };
          viewport: {
            northeast: {
              lat: number;
              lng: number;
            };
            southwest: {
              lat: number;
              lng: number;
            };
          };
        };
        icon: string;
        icon_background_color: string;
        icon_mask_base_uri: string;
        name: string;
        place_id: string;
        reference: string;
        types: string[];
        url: string;
        utc_offset: number;
        vicinity: string;
      };
      status: string;
    };
  };
}

export interface GooglePlacesResponse {
  predictions: PlacePrediction[];
  status: string;
}

// LocationSearch component props
export interface LocationSearchProps {
  onSelection?: (place: PlacePrediction) => void;
  placeholder?: string;
  className?: string;
  label?: string;
}

// Utility types for LocationSearch
export interface SearchState {
  searchValue: string;
  selected: PlacePrediction | null;
  isFocused: boolean;
  isOpen: boolean;
}

export interface RecentSearch {
  place: PlacePrediction;
  timestamp: number;
}

// Error types
export interface LocationSearchError {
  message: string;
  code?: number;
  type: "API_ERROR" | "NETWORK_ERROR" | "VALIDATION_ERROR";
}

// Custom hooks types
export interface UseLocationSearchOptions {
  debounceDelay?: number;
  maxRecentSearches?: number;
  minSearchLength?: number;
}

export interface UseLocationSearchReturn {
  searchValue: string;
  setSearchValue: (value: string) => void;
  selected: PlacePrediction | null;
  setSelected: (place: PlacePrediction | null) => void;
  searchResults: GooglePlacesResponse | undefined;
  isLoading: boolean;
  error: LocationSearchError | null;
  recentSearches: PlacePrediction[];
  addToRecentSearches: (place: PlacePrediction) => void;
  removeFromRecentSearches: (placeId: string) => void;
  clearRecentSearches: () => void;
}

// Map component props

// Helper function to create LocationData from coordinates and address
export const createLocationDataFromCoordinates = (
  lat: number,
  lng: number,
  address: string,
  name?: string,
): LocationData => ({
  code: 0,
  message: "OK",
  data: {
    data: {
      html_attributions: [],
      result: {
        address_components: [],
        adr_address: address,
        formatted_address: address,
        geometry: {
          location: { lat, lng },
          viewport: {
            northeast: { lat: lat + 0.01, lng: lng + 0.01 },
            southwest: { lat: lat - 0.01, lng: lng - 0.01 },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
        icon_background_color: "#7B9EB0",
        icon_mask_base_uri:
          "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        name: name || address,
        place_id: "",
        reference: "",
        types: ["premise", "street_address"],
        url: "",
        utc_offset: 420,
        vicinity: address,
      },
      status: "OK",
    },
  },
});
