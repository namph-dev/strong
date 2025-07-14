
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function AccountDeletionForm() {
    const [agreed, setAgreed] = useState(false);
    const [reason, setReason] = useState("");
    const [details, setDetails] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        if (!agreed || !reason || !email) {
            alert("Please fill all required fields and agree to the terms.");
            return;
        }

        // Replace this with real submission logic
        alert("Deletion request submitted!");
    };

    return (
        <div className="space-y-6 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Request account deletion</h2>

            {/* Reason */}
            <div className="space-y-2">
                <Select onValueChange={(val) => setReason(val)}>
                    <SelectTrigger id="reason" className="rounded-xl border border-gray-400 px-4 py-3 text-gray-900 text-base">
                        <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="privacy">Privacy concerns</SelectItem>
                        <SelectItem value="not-using">Not using the service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Details */}
            <div className="space-y-2">
                <Textarea
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Please provide more details"
                    className="rounded-xl border border-gray-400 px-4 py-3 text-gray-900 text-base"
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                 <Input
                    id="email"
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-gray-400 px-4 py-3 text-gray-900 text-base"
                />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
                <Checkbox id="agree" checked={agreed} onCheckedChange={(val) => setAgreed(!!val)} />
                <Label htmlFor="agree" className="text-sm text-gray-700">
                    I agree to the <span className="text-blue-600 underline cursor-pointer">Term & Conditions</span> for account deletion
                </Label>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
}
