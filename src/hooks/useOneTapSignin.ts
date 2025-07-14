import { useEffect, useState } from "react";
import { useSession, signIn, SignInOptions } from "next-auth/react";

interface OneTapSigninOptions {
  parentContainerId?: string;
}

const useOneTapSignin = (
  opt?: OneTapSigninOptions & Pick<SignInOptions, "redirect" | "callbackUrl">,
  session?: any,
) => {
  //   console.log(session);
  //   const { status } = session;
  const isSignedIn = session ? true : false;
  const { parentContainerId } = opt || {};
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !isSignedIn) {
      const { google } = window as any;
      if (google) {
        // console.log("google", google);
        google.accounts.id.initialize({
          client_id: process.env.GOOGLE_CLIENT_ID,
          callback: async (response: any) => {
            setIsLoading(true);

            // Here we call our Provider with the token provided by google
            const result = await signIn("googleonetap", {
              credential: response.credential,
              redirect: true,
              ...opt,
            });
            if (result) {
              window.location.reload();
            }
            setIsLoading(false);
          },
          prompt_parent_id: parentContainerId,
          style:
            "position: absolute; top: 200px; right: 30px;width: 0; height: 0; z-index: 1001;",
        });

        // Here we just console.log some error situations and reason why the google one tap
        // is not displayed. You may want to handle it depending on yuor application
        google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed()) {
            console.log(notification.getNotDisplayedReason());
          } else if (notification.isSkippedMoment()) {
            console.log(notification.getSkippedReason());
          } else if (notification.isDismissedMoment()) {
            console.log(notification.getDismissedReason());
          }
        });
      }
    }
  }, [isLoading, isSignedIn, parentContainerId]);

  return { isLoading };
};

export default useOneTapSignin;
