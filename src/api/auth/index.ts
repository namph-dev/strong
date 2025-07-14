import appConfig from "@/config";

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Scope: "strongbody-ai",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Unable to login");
  }
};

export const signup = async (email: string, password: string, first_name: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/public/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password, first_name }),
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw new Error("Unable to signup");
  }
};


export const loginWithFacebook = async (facebookIdToken: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/public/auth/login-facebook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Scope: "strongbody-ai",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id_token: facebookIdToken,
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data?.message || "Facebook login failed");

    return data;
  } catch (error) {
    console.error("loginWithFacebook error:", error);
    throw error;
  }
};

export const loginWithGoogle = async (googleIdToken: string) => {
  try {
    const res = await fetch(`${appConfig.API_URL}/v1/public/auth/login-google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Scope: "strongbody-ai",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id_token: googleIdToken,
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data?.message || "Google login failed");

    return data;
  } catch (error) {
    console.error("loginWithGoogle error:", error);
    throw error;
  }
};

export const changePassword = async (
  token: string,
  current_password: string,
  new_password: string
) => {
  try {
    const response = await fetch(
      `${appConfig.API_URL}/v1/public/auth/change-password`,
      {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Scope": "strongbody-ai",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          current_password,
          new_password,
        }),
      }
    );

    const data = await response.json();

    console.log(data)

    if (!response.ok) {
      throw new Error(data?.message || "Change password failed");
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
}