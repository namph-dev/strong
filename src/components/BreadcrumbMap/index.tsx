import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";

interface BreadcrumbItems {
  href: string;
  title: string;
}

interface BreadcrumbMapProps {
  breadcrumbItems: BreadcrumbItems[];
}

const BreadcrumbMap: React.FC<BreadcrumbMapProps> = ({ breadcrumbItems }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={item.href}>
                {index === breadcrumbItems.length - 1 ? (
                  <b>
                    {item.title.length > 45 ? item.title.slice(0, 45) + "..." : item.title}
                  </b>
                ) : (
                  item.title.length > 45 ? item.title.slice(0, 45) + "..." : item.title
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>

            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbMap;