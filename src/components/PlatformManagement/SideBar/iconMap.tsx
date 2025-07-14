import Image from "next/image";

import balance from "../../../assets/Product/Icon/MainFunctionIcon/balance.svg";
import member from "../../../assets/Product/Icon/MainFunctionIcon/member.svg";
import order from "../../../assets/Product/Icon/MainFunctionIcon/order.svg";
import overview from "../../../assets/Product/Icon/MainFunctionIcon/overview.svg";
import product from "../../../assets/Product/Icon/MainFunctionIcon/product.svg";
import review from "../../../assets/Product/Icon/MainFunctionIcon/review.svg";
import sbproduct from "../../../assets/Product/Icon/MainFunctionIcon/sbproduct.svg";
import service from "../../../assets/Product/Icon/MainFunctionIcon/service.svg";
import setting from "../../../assets/Product/Icon/MainFunctionIcon/setting.svg";

export const mainFunctionIconMap: Record<string, JSX.Element> = {
    balance: (
        <Image
            src={balance}
            alt="balance icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    member: (
        <Image
            src={member}
            alt="member icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    order: (
        <Image
            src={order}
            alt="order icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    overview: (
        <Image
            src={overview}
            alt="overview icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    product: (
        <Image
            src={product}
            alt="product icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    review: (
        <Image
            src={review}
            alt="review icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    sbproduct: (
        <Image
            src={sbproduct}
            alt="sbproduct icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    service: (
        <Image
            src={service}
            alt="service icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
    setting: (
        <Image
            src={setting}
            alt="setting icon"
            width={24}
            height={24}
            className="h-11 w-11"
        />
    ),
};

export const getMainFunctionIcon = (iconName?: string) => iconName && mainFunctionIconMap[iconName];
