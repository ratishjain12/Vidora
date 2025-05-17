import { ICONS } from "@/constants";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = ({ title, subHeader, userImg }: SharedHeaderProps) => {
  return (
    <div>
      <header className="header">
        <section className="header-container">
          <div className="details">
            {userImg && (
              <Image
                src={userImg || "/assets/images/dummy.jpg"}
                alt="user"
                width={66}
                height={66}
                className="rounded-full aspect-square"
              />
            )}
            <article>
              <p>{subHeader}</p>
              <h1>{title}</h1>
            </article>
          </div>

          <aside>
            <Link href="/upload">
              <Image
                src="/assets/icons/upload.svg"
                alt="upload"
                width={16}
                height={16}
              />
              <span>Upload a video</span>
            </Link>
            <div className="record">
              <button className="primary-btn">
                <Image src={ICONS.record} alt="record" width={16} height={16} />
                <span>Record a video</span>
              </button>
            </div>
          </aside>
        </section>
        <div className="search-filter">
          <div className="search">
            <Image
              src="/assets/icons/search.svg"
              alt="search"
              width={16}
              height={16}
            />
            <input placeholder="Search videos, tags ..." />
          </div>
          <Dropdown />
        </div>
      </header>
    </div>
  );
};

export default index;
