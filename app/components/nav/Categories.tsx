'use client'

import { categories } from "@/utils/Categories";
import Container from "../Container";
import Category from "./Category";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { Menu, MenuProps } from "antd";
import { AiOutlineAppstore } from "react-icons/ai";
import { useCallback } from "react";

const Categories = () => {
    const params = useSearchParams()
    const router = useRouter()
    const category = params?.get('category')
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
      {
        key: 'sub1',
        label: 'Bathroom',
        icon: <AiOutlineAppstore />,
        children: [
          { key: 'Showers',
            label: 'Showers', 
            children: [
              { key: 'ShowerDoors', label: 'Shower Doors' },
              { key: 'ShowerWalls', label: 'ShowerWalls' },
            ],
          },
          { key: 'Vanities', label: 'Vanities' },
          { key: 'Toilets', label: 'Toilets' },
          { key: 'Faucets', label: 'Faucets' },
          { key: 'Bathroom Sink', label: 'Bathroom Sinks' },
          { key: 'Bathtubs', label: 'Bathtubs' },
        ],
      },
      {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AiOutlineAppstore />,
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
          {
            key: 'sub3',
            label: 'Submenu',
            children: [
              { key: 'Flooring', label: 'Flooring' },
              { key: '8', label: 'Option 8' },
            ],
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        key: 'sub4',
        label: 'Navigation Three',
        icon: <AiOutlineAppstore />,
        children: [
          { key: 'Flooring', label: 'Option 9' },
          { key: '10', label: 'Option 10' },
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      }
    ];

    const onClick: MenuProps['onClick'] = (e) => {
      if (params) {
        let currentQuery = queryString.parse(params.toString());
        const updatedQuery: any = {
          ...currentQuery,
          category: e.key,
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
    };

    if(!isMainPage) return null;

    return (<div className="bg-white">
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            <Menu
              onClick={onClick}
              style={{ width: 512 }}
              mode="horizontal"
              items={items}
            />
                {/* {items.map((item) =>( */}
                    {/* <Category
                        key={items[0].label}
                        label={items[0].label}
                        icon={items[0].icon}
                        selected= {category === items[0].label || (category === null && items[0].label === 'All')}
                        items={items}
                    /> */}
                {/* ))} */}
            </div>
        </Container>
    </div> );
}
 
export default Categories;