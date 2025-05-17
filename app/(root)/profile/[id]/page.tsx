import Header from "@/components/Header";
import VideoCard from "@/components/Videocard";
import { dummyCards } from "@/constants";
import React from "react";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  console.log(id);
  return (
    <div className="wrapper page">
      <Header
        title="Emily"
        subHeader="Profile"
        userImg="/assets/images/emily.png"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default page;
