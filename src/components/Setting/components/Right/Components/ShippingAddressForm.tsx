import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { createShippingAddress, updateShippingAddress } from "@/api/shippingAdress";
import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { getListCountries } from "@/api/country";

interface Country {
  id: number;
  title: string;
}

type FormValues = {
  recipient_name: string;
  phone: string;
  state: string;
  postal_code: string;
  country_id: number;
  street: string;
  city: string;
};

export default function ShippingAddressForm({
  isOpen,
  onClose,
  user,
  item
}: {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  item: any;
}) {
  const [countryId, setCountryId] = useState<number>(user.country_id || 0);
  const [listCountries, setListCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = listCountries?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>();;

  const onSubmitForm = async (data: any) => {
    try {
      const payload = {
        ...data,
        user_id: user?.id || 0,
        country_id: Number(data.country_id)
      };

      if (item) {
        await updateShippingAddress(item.id, payload, user.accessToken);
      } else {
        await createShippingAddress(payload, user.accessToken)
      }

      reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  useEffect(() => {
    if (item) {
      reset({
        recipient_name: item.recipient_name || '',
        phone: item.phone || '',
        state: item.state || '',
        postal_code: item.postal_code || '',
        country_id: item.country_id || 0,
        street: item.street || '',
        city: item.city || ''
      });

      setCountryId(item.country_id || 0);
    } else {
      reset({
        recipient_name: '',
        phone: '',
        state: '',
        postal_code: '',
        country_id: user.country_id || 0,
        street: '',
        city: ''
      });

      setCountryId(user.country_id || 0);
    }

    const fetchListCountry = async () => {
      if (!user?.accessToken) return;

      try {
        const res = await getListCountries(user.accessToken);
        setListCountries(res.data);
      } catch (err) {
        console.error("Lỗi khi fetch quốc gia:", err);
      }
    };

    fetchListCountry();
  }, [user, item]);


  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Address</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Recipient Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient Name *
            </label>
            <input
              type="text"
              {...register("recipient_name", {
                required: "Recipient name is required",
                minLength: {
                  value: 2,
                  message: "Recipient name must be at least 2 characters"
                }
              })}
              className={`w-full px-3 py-2 border rounded-[10px] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.recipient_name ? 'border-red-500' : 'border-[#8F95A0]'
                }`}
              placeholder="Enter recipient name"
            />
            {errors.recipient_name && (
              <p className="text-red-500 text-xs mt-1">{errors.recipient_name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[\d\s\-\(\)]+$/,
                  message: "Please enter a valid phone number"
                }
              })}
              className={`w-full px-3 py-2 border rounded-[10px] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.phone ? 'border-red-500' : 'border-[#8F95A0]'
                }`}
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Street Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address *
            </label>
            <input
              type="text"
              {...register("street", {
                required: "Street address is required",
                minLength: {
                  value: 5,
                  message: "Street address must be at least 5 characters"
                }
              })}
              className={`w-full px-3 py-2 border rounded-[10px] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.street ? 'border-red-500' : 'border-[#8F95A0]'
                }`}
              placeholder="Enter street address"
            />
            {errors.street && (
              <p className="text-red-500 text-xs mt-1">{errors.street.message}</p>
            )}
          </div>

          {/* City and State */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                {...register("city", {
                  required: "City is required",
                  minLength: {
                    value: 2,
                    message: "City must be at least 2 characters"
                  }
                })}
                className={`w-full px-3 py-2 border rounded-[10px] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.city ? 'border-red-500' : 'border-[#8F95A0]'
                  }`}
                placeholder="Enter city"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State *
              </label>
              <input
                type="text"
                {...register("state", {
                  required: "State is required",
                  minLength: {
                    value: 2,
                    message: "State must be at least 2 characters"
                  }
                })}
                className={`w-full px-3 py-2 border rounded-[10px] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.state ? 'border-red-500' : 'border-[#8F95A0]'
                  }`}
                placeholder="Enter state"
              />
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Postal Code and Country */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code *
              </label>
              <input
                type="text"
                {...register("postal_code", {
                  required: "Postal code is required",
                  minLength: {
                    value: 3,
                    message: "Postal code must be at least 3 characters"
                  }
                })}
                className={`w-full px-3 py-2 border rounded-[10px] font-normal text-[16px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.postal_code ? 'border-red-500' : 'border-[#8F95A0]'
                  }`}
                placeholder="Enter postal code"
              />
              {errors.postal_code && (
                <p className="text-red-500 text-xs mt-1">{errors.postal_code.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <Select
                value={countryId ? countryId.toString() : undefined}
                onValueChange={(val) => setCountryId(parseInt(val))}
                {...register("country_id", {
                  required: "Country is required",
                })}
              >
                <SelectTrigger className="w-full rounded-xl border border-gray-400 px-4 py-[20px] text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>

                <SelectContent className="max-h-[250px] overflow-y-auto">
                  <div className="sticky top-0 bg-white z-10 px-3 py-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                  </div>

                  {filteredCountries?.length > 0 ? (
                    filteredCountries.map((item: any) => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.title}
                      </SelectItem>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500">No results</div>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <DialogFooter>
          <button
            type="button"
            onClick={handleClose}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit(onSubmitForm)}
            disabled={isSubmitting}
            className="flex-1 px-4 py-2 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 rounded-md font-medium cursor-pointer"
          >
            {isSubmitting
              ? item
                ? "Saving..."
                : "Adding..."
              : item
                ? "Edit Address"
                : "Add Address"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}