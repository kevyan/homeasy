"use client";

import { Menu, MenuItem } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import React from "react";

interface CategoryProps {
  label: string;
  icon: IconType;
  selected?: boolean;
  items: MenuProps["items"]
}

const Category: React.FC<CategoryProps> = ({ items, label, icon: Icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

    const handleClick = useCallback(() => {
      console.log('label', label)
      if (label === "All") {
        router.push("/");
      } else {
        let currentQuery = {};

        if (params) {
          currentQuery = queryString.parse(params.toString());
        }

        const updatedQuery: any = {
          ...currentQuery,
          category: label,
        };

        const url = queryString.stringifyUrl(
          {
            url: "/",
            query: updatedQuery,
          },
          {
            skipNull: true,
          }
        );

        router.push(url);
      }
    }, [label, params, router]);

  return (
    <>
      <div
        onClick={handleClick}
        className={`flex items-center justify-center text-center gap-1 border-b-2 hover:text-slate-800 transition cursor-pointer
    ${
      "border-transparent text-slate-500"
    }
    `}
      >
        <Dropdown
          menu={{ items }}
          dropdownRender={(menu) => (
            <>
              {React.cloneElement(menu as React.ReactElement, {
                style: { width: 150 },
              })}
            </>
          )}
        >
          <div className="flex items-center justify-center text-center gap-1 p-2">
            <Icon size={20} />
            <div className="font-medium text-sm">{label}</div>
          </div>
        </Dropdown>
      </div>
    </>
  );
};

export default Category;
