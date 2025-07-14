"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import UpgradeNotice from './upgrade-notice';
import CustomTabs, { TabItem } from '@/components/tab-custom';
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";

import ViewIcon from '@/assets/Product/Icon/MainFunctionIcon/view.svg';
import EditIcon from '@/assets/Product/Icon/MainFunctionIcon/edit.svg';
import DeleteIcon from '@/assets/Product/Icon/MainFunctionIcon/delete.svg';




export default function ProductsTab() {
    const t = useTranslations("management.products");
    const [activeTab, setActiveTab] = useState("all-products");
    const [date, setDate] = useState<Date>();
    const [selectedCategory, setSelectedCategory] = useState("Category");

    const categories = [
        "All Categories",
        "Vitamins",
        "Supplements",
        "Protein",
        "Health & Wellness",
        "Fitness Equipment"
    ];

    // Fake data for 1 product
    const products = [
        {
            id: 1,
            name: "Pristia Candra",
            category: "Vitamins",
            price: "$12.00",
            date: "12/08/2024",
            status: "Active",
            image: "/img/temp/shopgirl.png",
        },
    ];

    // Content for All Products tab
    const AllProductsContent = () => (
        <div className="px-4 md:px-6 pb-6">
            <Table>
                <TableHeader>
                    <TableRow className="text-sm text-gray-500 bg-gray-50">
                        <TableHead className="px-4 py-3"><Input type="checkbox" /></TableHead>
                        <TableHead className="px-4 py-3 text-[#687588] font-bold text-sm">Product Name</TableHead>
                        <TableHead className="px-4 py-3 text-[#687588] font-bold text-sm">Category</TableHead>
                        <TableHead className="px-4 py-3 text-[#687588] font-bold text-sm">Price</TableHead>
                        <TableHead className="px-4 py-3 text-[#687588] font-bold text-sm">Date posted</TableHead>
                        <TableHead className="px-4 py-3 text-[#687588] font-bold text-sm">Status</TableHead>
                        <TableHead className="px-4 py-3 text-[#687588] font-bold text-sm">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id} className="text-sm">
                            <TableCell className="px-4 py-3"><Input type="checkbox" /></TableCell>
                            <TableCell className="px-4 py-3 flex items-center gap-2">
                                <Image
                                    src={product.image}
                                    alt="avatar"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded object-cover"
                                />
                                <span>{product.name}</span>
                            </TableCell>
                            <TableCell className="px-4 py-3 text-sm font-normal">{product.category}</TableCell>
                            <TableCell className="px-4 py-3 text-sm font-normal">{product.price}</TableCell>
                            <TableCell className="px-4 py-3 text-sm font-normal">{product.date}</TableCell>
                            <TableCell className="px-4 py-3">
                                <span className="bg-green-100 text-green-700 px-3 py-1 text-xs font-bold" style={{ borderRadius: '6px' }}>Active</span>
                            </TableCell>
                            <TableCell className="px-4 py-3 flex gap-2">
                                <Image src={ViewIcon} alt="view" width={20} height={20} />
                                <Image src={EditIcon} alt="edit" width={20} height={20} />
                                <Image src={DeleteIcon} alt="delete" width={20} height={20} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

    // Content for empty tabs
    const EmptyContent = ({ message }: { message: string }) => (
        <div className="text-center py-8 text-gray-500 px-4 md:px-6">{message}</div>
    );

    // Tabs configuration
    const tabsData: TabItem[] = [
        {
            id: "all-products",
            label: "All products",
            count: 5,
            content: <AllProductsContent />
        },
        {
            id: "active",
            label: "Active",
            count: 0,
            content: <EmptyContent message="No active products." />
        },
        {
            id: "violation",
            label: "Violation",
            count: 0,
            content: <EmptyContent message="No violation products." />
        },
        {
            id: "draft",
            label: "Draft",
            count: 0,
            content: <EmptyContent message="No draft products." />
        },
    ];

    return (
        <div className="bg-white h-full flex flex-col">
            <div className="px-2 py-4">
                <UpgradeNotice />
            </div>

            {/* Header and actions */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-4 md:px-6 py-3 md:py-4 flex-shrink-0">
                <h1 className="text-xl md:text-2xl font-bold text-[#000000]">Product Management</h1>
                <div className="flex gap-2 mt-2 md:mt-0">
                    <button className="border border-gray-900 rounded-md px-4 py-2 text-[#1F2C43] font-medium text-base bg-white">Strongbody Product</button>
                    <button className="bg-gray-900 text-white text-base font-medium rounded-md px-4 py-2 flex items-center gap-2"><span>New Product</span> <span className="text-lg">+</span></button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-2 px-4 md:px-6 mb-5">
                <div className="flex-1 flex items-center gap-2 justify-between">
                    <Input type="text" placeholder="Search product" className="w-full md:w-90 border border-[#8F95A0]" />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-56 justify-start text-left font-normal border border-gray-500 rounded-md px-3 text-sm cursor-pointer"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "01 Jan 2023 - 10 Mar 2023"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-32 justify-between border border-gray-500">
                                {selectedCategory}
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-32">
                            {categories.map((category) => (
                                <DropdownMenuItem
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className="cursor-pointer"
                                >
                                    {category}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Custom Tabs */}
            <CustomTabs
                tabs={tabsData}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                variant="red-accent"
                showCounts={true}
            />
        </div>
    );
}
