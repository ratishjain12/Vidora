"use client";
import { filterOptions } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="filter"
              width={14}
              height={14}
            />
            Most Recent
          </figure>

          <Image
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
            width={20}
            height={20}
          />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {filterOptions.map((option) => (
            <li key={option} className="list-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
