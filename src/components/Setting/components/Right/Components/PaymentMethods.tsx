
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getPaymentMethods } from "@/api/payment";

export default function PaymentMethods({ user }: { user: any }) {
  const [openCard, setOpenCard] = useState(true);
  const [openPaypal, setOpenPaypal] = useState(true);
  const [paymentMethods, setPaymentMethods] = useState<any>();

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const res = await getPaymentMethods(user.accessToken);
        console.log(res.data)
        setPaymentMethods(res.data);
      } catch (err) {
        console.error("Lỗi khi fetch:", err);
      }
    };

    fetchPaymentMethods();
  }, []);

  return (
    <div className="space-y-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-900">Credit/Debit Card</h2>

      {/* Visa Card Section */}
      <div className="rounded-xl border border-[#F1F2F4]">
        <button
          onClick={() => setOpenCard(!openCard)}
          className="w-full flex items-center justify-between px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H22C22.41 7.75 22.75 8.09 22.75 8.5C22.75 8.91 22.41 9.25 22 9.25Z" fill="#111827" />
              <path d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill="#111827" />
              <path d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill="#111827" />
              <path d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H17.55C21.53 2.75 22.74 3.95 22.74 7.89V16.1C22.75 20.05 21.54 21.25 17.56 21.25ZM6.44 4.25C3.3 4.25 2.75 4.79 2.75 7.89V16.1C2.75 19.2 3.3 19.74 6.44 19.74H17.55C20.69 19.74 21.24 19.2 21.24 16.1V7.89C21.24 4.79 20.69 4.25 17.55 4.25H6.44Z" fill="#111827" />
            </svg>
            <span className="font-medium text-gray-800">Visa card</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform ${openCard ? "rotate-180" : ""
              }`}
          />
        </button>

        {openCard && (
          <div className="border-t  border-[#F1F2F4] divide-y px-4">
            {/* Visa card */}
            {paymentMethods && paymentMethods.map((item: any) => (
              <div className="py-3 border-t  border-[#F1F2F4] ">
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  {item.card_brand === "Visa" &&
                    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="24" rx="2" fill="#FBFAF8" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M32.1653 7.44798C31.5881 7.23205 30.6835 7 29.5533 7C26.6736 7 24.6443 8.44574 24.6273 10.5164C24.6116 12.0486 26.0755 12.9017 27.1814 13.4125C28.3154 13.9339 28.6973 14.2673 28.6913 14.7335C28.6841 15.4479 27.7859 15.7741 26.9481 15.7741C25.7813 15.7741 25.162 15.6133 24.2046 15.2154L23.8287 15.0457L23.4196 17.4315C24.1012 17.7285 25.3591 17.9868 26.6663 18C29.7304 18 31.7196 16.5712 31.7418 14.3594C31.7524 13.1469 30.9764 12.2243 29.2954 11.4645C28.2759 10.9711 27.6522 10.6415 27.659 10.1426C27.659 9.70058 28.1865 9.22588 29.3273 9.22588C30.2817 9.21103 30.9713 9.41847 31.5089 9.63482L31.7707 9.757L32.1653 7.44798ZM18.6814 17.8418L20.5038 7.18583H23.418L21.5948 17.8418H18.6814ZM37.3878 7.19625H39.6401L41.9988 17.8446H39.294C39.294 17.8446 39.0271 16.6211 38.9399 16.2482C38.7144 16.2482 37.773 16.247 36.8882 16.2459L36.8758 16.2459C36.0961 16.2449 35.3632 16.244 35.207 16.244C35.0938 16.532 34.5936 17.8446 34.5936 17.8446H31.5325L35.8609 8.0799C36.1682 7.38546 36.6897 7.19625 37.3878 7.19625ZM36.0452 14.0644C36.2866 13.4505 37.2069 11.0851 37.2069 11.0851C37.1984 11.099 37.2551 10.9523 37.3325 10.752L37.3325 10.7519C37.4137 10.5418 37.5176 10.2728 37.593 10.0682L37.7897 10.9871C37.7897 10.9871 38.3482 13.5303 38.4652 14.0644H36.0452ZM13.3837 14.46L16.2366 7.19358H19.3237L14.7357 17.8288L11.6516 17.833L9.04297 8.51291C10.893 9.43601 12.5485 11.2805 13.0793 12.9833L13.3837 14.46Z" fill="#1A1F71" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.7374 7.1875H6.03703L6 7.40894C9.65663 8.29174 12.0762 10.423 13.0804 12.9845L12.0583 8.08684C11.8821 7.41191 11.37 7.21083 10.7374 7.1875Z" fill="#F9A51A" />
                    </svg>
                  }
                  Visa Debit ****** {item.card_number_last4}
                </div>
                <p className="text-sm text-gray-500">Expiry date {item.card_exp_month}/{item.card_exp_year}</p>
              </div>
            ))}

            {/* Mastercard */}
            {/* <div className="py-3 border-t  border-[#F1F2F4] ">
              <div className="flex items-center gap-2 font-medium text-gray-800">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="24" rx="2" fill="#FBFAF8" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M29.8068 21C34.8843 21 39.0004 16.9706 39.0004 12C39.0004 7.02944 34.8843 3 29.8068 3C24.7294 3 20.6133 7.02944 20.6133 12C20.6133 16.9706 24.7294 21 29.8068 21Z" fill="#F79E1B" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.1935 21C23.271 21 27.3871 16.9706 27.3871 12C27.3871 7.02944 23.271 3 18.1935 3C13.1161 3 9 7.02944 9 12C9 16.9706 13.1161 21 18.1935 21Z" fill="#EB001B" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.0002 5.02148C21.9332 6.67182 20.6133 9.18476 20.6133 11.9995C20.6133 14.8142 21.9332 17.3272 24.0002 18.9775C26.0672 17.3272 27.3871 14.8142 27.3871 11.9995C27.3871 9.18476 26.0672 6.67182 24.0002 5.02148Z" fill="#FF5F00" />
                </svg>
                Mastercard ****** 1234
              </div>
              <p className="text-sm text-gray-500">Expiry date 12/30</p>
            </div> */}

            {/* Add new method */}
            <div className="py-3 flex items-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#DA2126" />
              </svg>
              Add a new payout method
            </div>
          </div>
        )}
      </div>

      {/* Paypal Section */}
      {/* <div className="rounded-xl border border-[#F1F2F4]">
        <button
          onClick={() => setOpenPaypal(!openPaypal)}
          className="w-full flex items-center justify-between px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="2" fill="#FBFAF8" />
              <path fillRule="evenodd" clipRule="evenodd" d="M9.52992 18.5262L9.78429 16.9852L9.21763 16.9726H6.51172L8.39223 5.60092C8.39809 5.56648 8.41703 5.53452 8.44469 5.51178C8.47248 5.48904 8.50791 5.47656 8.54497 5.47656H13.1076C14.6224 5.47656 15.6677 5.77712 16.2134 6.37044C16.4692 6.64878 16.6322 6.93972 16.7111 7.25977C16.7938 7.59567 16.7951 7.99693 16.7145 8.48643L16.7086 8.52203V8.83571L16.9645 8.97397C17.1799 9.08299 17.3512 9.20774 17.4825 9.35055C17.7013 9.5886 17.8429 9.89111 17.9027 10.2496C17.9646 10.6184 17.9441 11.0573 17.8429 11.5542C17.7261 12.1257 17.5374 12.6235 17.2825 13.0308C17.0482 13.4061 16.7495 13.7174 16.3948 13.9586C16.0563 14.1878 15.6541 14.3618 15.1993 14.4732C14.7585 14.5826 14.256 14.6378 13.7049 14.6378H13.3498C13.096 14.6378 12.8494 14.725 12.6558 14.8813C12.4616 15.0409 12.3332 15.2589 12.2939 15.4974L12.267 15.6361L11.8175 18.3523L11.7972 18.452C11.7918 18.4836 11.7825 18.4993 11.7689 18.51C11.7568 18.5197 11.7393 18.5262 11.7223 18.5262H9.52992Z" fill="#28356A" />
              <path fillRule="evenodd" clipRule="evenodd" d="M17.2165 8.55859C17.203 8.64163 17.1873 8.72648 17.1699 8.81367C16.5682 11.76 14.5096 12.7778 11.8805 12.7778H10.5419C10.2203 12.7778 9.94933 13.0004 9.89933 13.3029L9.01983 18.6234C8.98727 18.8221 9.14777 19.0011 9.35787 19.0011H11.7322C12.0132 19.0011 12.2521 18.8063 12.2964 18.5418L12.3197 18.4268L12.7667 15.7213L12.7954 15.5729C12.8392 15.3076 13.0786 15.1126 13.3597 15.1126H13.7147C16.015 15.1126 17.8158 14.222 18.3422 11.6445C18.5619 10.5678 18.4482 9.6687 17.8664 9.03639C17.6903 8.84577 17.4719 8.6875 17.2165 8.55859Z" fill="#019DDE" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16.5784 8.31533C16.4865 8.28974 16.3916 8.26661 16.2944 8.24568C16.1965 8.22528 16.0964 8.20722 15.9932 8.19137C15.6323 8.13575 15.2368 8.10938 14.8132 8.10938H11.237C11.1489 8.10938 11.0652 8.12835 10.9904 8.16265C10.8254 8.23828 10.7029 8.38719 10.6732 8.5695L9.91242 13.1651L9.89062 13.299C9.94063 12.9965 10.2116 12.7739 10.5332 12.7739H11.8718C14.5009 12.7739 16.5595 11.7556 17.1612 8.80977C17.1792 8.72258 17.1943 8.63772 17.2078 8.55469C17.0556 8.47763 16.8907 8.41175 16.7132 8.35562C16.6693 8.34171 16.6241 8.32833 16.5784 8.31533Z" fill="#00164C" />
              <path fillRule="evenodd" clipRule="evenodd" d="M10.6764 8.57161C10.7062 8.3893 10.8286 8.24038 10.9936 8.16528C11.069 8.13084 11.1521 8.11187 11.2402 8.11187H14.8164C15.24 8.11187 15.6355 8.13838 15.9964 8.19399C16.0996 8.20972 16.1997 8.22791 16.2976 8.24831C16.3948 8.2691 16.4897 8.29236 16.5816 8.31783C16.6273 8.33082 16.6725 8.34434 16.7168 8.35772C16.8943 8.41386 17.0593 8.48026 17.2115 8.55679C17.3906 7.468 17.21 6.72668 16.5928 6.0554C15.9122 5.31628 14.6841 5 13.1125 5H8.54973C8.22873 5 7.95487 5.22259 7.90527 5.52562L6.00486 17.0142C5.96739 17.2415 6.1512 17.4466 6.39154 17.4466H9.20836L10.6764 8.57161Z" fill="#012F86" />
            </svg>
            <span className="font-medium text-gray-800">Paypal</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform ${openPaypal ? "rotate-180" : ""
              }`}
          />
        </button>

        {openPaypal && (
          <div className="border-t px-4 py-3  border-[#F1F2F4]">
            <div className="flex items-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#DA2126" />
              </svg>
              Add a new payout method
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
