
import { Trash2 } from "lucide-react";
import { useState } from "react";
import AccountDeletionForm from "./AccountDeletionForm";

export default function AccountDeletion() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {!showForm ? (
                <div className="flex items-center justify-between p-6  ">
                    <span className="text-base font-medium text-gray-900">
                        Request account deletion
                    </span>
                    <button
                        className="flex items-center gap-2 border border-gray-500 rounded-xl px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition"
                        onClick={() => setShowForm(true)}
                    >
                        <Trash2 className="w-4 h-4" />
                        Delete
                    </button>
                </div>
            ) : (
                <AccountDeletionForm />
            )}
        </>
    );
}
