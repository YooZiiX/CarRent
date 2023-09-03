"use client";

import Image from "next/image";
import SearchLogo from "@/public/magnifying-glass.svg";
import { SearchManufacturer } from "..";

import { useState } from "react";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={SearchLogo}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = () => {
    console.log("");
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hiden" />
      </div>
    </form>
  );
};

export default SearchBar;
