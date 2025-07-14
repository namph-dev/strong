import appConfig from "@/config";

export const getGooglePlacesAutocomplete = async (input: string) => {
  try {
    const res = await fetch(
      `${appConfig.API_URL}/v1/admin/google-places/autocomplete?Input=${encodeURIComponent(input)}`,
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data; // Return full response
  } catch (error) {
    console.error("Failed to fetch Google Places autocomplete:", error);
    throw new Error("Unable to fetch Google Places autocomplete");
  }
};

export const getGooglePlacesDetails = async (placeId: string) => {
  try {
    const res = await fetch(
      `${appConfig.API_URL}/v1/admin/google-places/details?PlaceID=${encodeURIComponent(placeId)}`,
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data; // Return full response
  } catch (error) {
    console.error("Failed to fetch Google Places details:", error);
    throw new Error("Unable to fetch Google Places details");
  }
};
