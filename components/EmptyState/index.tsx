import Image from "next/image";
import React from "react";

const index = ({ icon, title, description }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      <div>
        <Image src={icon} alt={title} width={46} height={46} />
      </div>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default index;
