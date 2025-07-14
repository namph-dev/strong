import { deleteShippingAddress, getShippingAddresses, setDefaultShippingAddress } from "@/api/shippingAdress";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import ShippingAddressForm from "./ShippingAddressForm";

export default function AddressTab({ user }: { user: any }) {
  const [shippingAddresses, setShippingAddresses] = useState<any>();
  const [itemEdit, setItemEdit] = useState<any>();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchShippingAddresses = async () => {
      if (!user?.accessToken) return;

      try {
        const res = await getShippingAddresses(user.accessToken);
        setShippingAddresses(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy địa chỉ giao hàng:", err);
      }
    };

    fetchShippingAddresses();
  }, [user, isFormOpen]);

  const handleAddItem = () => {
    if (shippingAddresses.length >= 3) {
      alert("Chỉ được tối đa 3 địa chỉ giao hảng")
    } else {
      setItemEdit(null);
      setIsFormOpen(true);
    }
  }

  const handleEditClick = (item: any) => {
    setItemEdit(item);
    setIsFormOpen(true);
  };

  const handleSetDefault = async (addressId: number) => {
    try {
      if (!user?.accessToken) throw new Error("Missing access token");
      await setDefaultShippingAddress(addressId, user.accessToken);

    } catch (err) {
      console.error("Lỗi khi set default:", err);
    }
  };

  const handleDeleteAddress = async (addressId: number) => {
    try {
      if (!user?.accessToken) throw new Error("Missing access token");

      const confirmDelete = window.confirm("Bạn có chắc muốn xóa địa chỉ này?");
      if (!confirmDelete) return;

      await deleteShippingAddress(addressId, user.accessToken);

      console.log("Xóa địa chỉ thành công");
    } catch (err) {
      console.error("Lỗi khi xóa địa chỉ:", err);
    }
  };

  return (
    <div className="space-y-6 mt-4">
      {/* Title + Add new address */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Address</h2>
        <button
          onClick={() => handleAddItem()}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer"
        >
          + Add new address
        </button>
      </div>

      {/* Address List */}
      <div className="space-y-6 mt-4">
        {shippingAddresses && shippingAddresses.map((item: any, idx: number) => (
          <div key={idx} className="border-t pt-4">
            <div className="flex justify-between items-start">
              {/* Left: Name, phone, address */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-base font-medium text-gray-900">
                  {item.recipient_name}
                  <span className="text-gray-400">|</span>
                  {item.phone}
                  <Pencil
                    onClick={() => handleEditClick(item)}
                    className="w-4 h-4 text-gray-500 ml-1 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  />
                </div>
                <div className="text-sm text-gray-700">
                  <div>{`${item.state}, ${item.street}`}</div>
                </div>

                {/* Default badge */}
                {item.is_default && (
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium mt-2 px-2 py-0.5 rounded-md">
                    Default
                  </span>
                )}
              </div>

              {/* Right: Set default + Delete */}
              <div className="flex flex-col items-end gap-2">
                {!item.is_default && (
                  <button
                    onClick={() => handleSetDefault(item.id)}
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                  >
                    Set default
                  </button>
                )}

                <button
                  className="flex items-center text-gray-500 hover:text-gray-700 text-sm cursor-pointer"
                  onClick={() => handleDeleteAddress(item.id)}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Address Form Popup */}
      <ShippingAddressForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        user={user}
        item={itemEdit}
      />
    </div>
  );
}