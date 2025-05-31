"use client";
import { daysAgo } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const VideoDetailHeader = ({
  title,
  createdAt,
  userImg,
  username,
  ownerId,
  id,
}: VideoDetailHeaderProps) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);
    setCopied(true);
  };

  useEffect(() => {
    const checkedTimeout = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 2000);
    return () => clearTimeout(checkedTimeout);
  }, [copied]);

  return (
    <header className="detail-header">
      <aside className="user-info">
        <h1>{title}</h1>
        <figure>
          <button onClick={() => router.push(`/profile/${ownerId}`)}>
            <Image
              src={userImg || ""}
              alt="user"
              width={24}
              height={24}
              className="rounded-full"
            />
            <h2>{username ?? "Guest"}</h2>
          </button>
          <figcaption>
            <span className="mt-1"></span>
            <p>{daysAgo(createdAt)}</p>
          </figcaption>
        </figure>
      </aside>
      <aside className="cta">
        <button onClick={handleCopyLink}>
          {copied ? (
            <Image
              src="/assets/images/checked.png"
              alt="check"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/assets/icons/link.svg"
              alt="copy-link"
              width={24}
              height={24}
            />
          )}
        </button>
      </aside>
    </header>
  );
};

export default VideoDetailHeader;
