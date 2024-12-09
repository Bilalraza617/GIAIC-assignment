"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Split the current path into parts for breadcrumbs
  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <nav aria-label="Breadcrumb" className="text-black text-sm">
      <ul className="flex space-x-2">
        {/* Home Link */}
        <li>
          <Link href="/" className="hover:text-[#FB2E86]">
            Home <span>. Pages</span>
          </Link>
        </li>
        {pathParts.map((part, index) => {
          // Create a dynamic path for each breadcrumb part
          const href = pathParts.slice(0, index + 1).join("/");
          const isLast = index === pathParts.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              <span className="text-gray-500">/</span>
              {isLast ? (
                <span className="text-[#FB2E86]">
                  {decodeURIComponent(part)}
                </span>
              ) : (
                <Link href={href} className="hover:text-[#FB2E86]">
                  {decodeURIComponent(part)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
