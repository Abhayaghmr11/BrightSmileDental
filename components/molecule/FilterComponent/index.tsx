"use client";
import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Input from "@/components/atom/Input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return useCallback(
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const id = setTimeout(() => {
        callback(...args);
      }, delay);

      setTimeoutId(id);
    },
    [callback, delay, timeoutId]
  );
}

const FilterComponent = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebounce((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    // Replace the query params without reloading the page
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 500); // Debounce by 500ms

  const handleSort = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("sort", term);
    } else {
      params.delete("sort");
    }

    // Replace the query params without reloading the page
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full flex justify-between items-center">
      <Input
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString() || ""}
        icon={<CiSearch className=" w-[20px] h-[20px] text-[#6E6E6E]" />}
        placeholder="Search"
        type="text"
      />

      <Select
        value={searchParams.get("sort")?.toString() || ""}
        onValueChange={(value) => handleSort(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue
            className=" text-neutral-500"
            placeholder="Sort by Price"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="high">High to Low</SelectItem>
            <SelectItem value="low">Low to High</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterComponent;
