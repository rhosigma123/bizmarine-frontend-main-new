"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const MarineBreadCrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Combine segments into paths
  const paths = pathSegments.map((segment, index) => ({
    name: segment.replace(/-/g, " "), // Replacing hyphens with spaces for readability
    path: "/" + pathSegments.slice(0, index + 1).join("/"),
  }));

  return (
    <Breadcrumb>
      <BreadcrumbList className="container p-5 md:py-5">
        <BreadcrumbItem className="text-base lg:text-xl font-semibold">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-base lg:text-xl font-semibold">
              {index < paths.length - 1 ? (
                <BreadcrumbLink href={path.path} className="capitalize">
                  {path.name}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="capitalize">
                  {path.name}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
        {paths.length > 3 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {paths.slice(1, -1).map((path, index) => (
                    <DropdownMenuItem key={index} className="capitalize">
                      <BreadcrumbLink href={path.path}>
                        {path.name}
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MarineBreadCrumb;
