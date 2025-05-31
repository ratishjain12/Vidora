"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const VideoCard = ({
  id,
  title,
  thumbnailUrl,
  createdAt,
  userImg,
  username,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
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
    <Link href={`/video/${id}`} className="video-card">
      <Image
        src={thumbnailUrl}
        alt="thumbnail"
        width={290}
        height={160}
        className="thumbnail"
      />
      <article>
        <div>
          <figure>
            <Image
              src={userImg || "/assets/images/dummy.jpg"}
              alt=""
              width={34}
              height={34}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image src="/assets/icons/eye.svg" alt="" width={14} height={14} />
            <span>{views}</span>
          </aside>
        </div>
        <h2>
          {title} -{" "}
          {createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>
      <button onClick={handleCopyLink} className="copy-btn">
        {copied ? (
          <Image
            src="/assets/images/checked.png"
            alt="check"
            width={14}
            height={14}
          />
        ) : (
          <Image
            src="/assets/icons/link.svg"
            alt="link"
            width={14}
            height={14}
          />
        )}
      </button>
      {duration && (
        <div className="duration">{Math.ceil(duration / 60)} min</div>
      )}
    </Link>
  );
};

export default VideoCard;
