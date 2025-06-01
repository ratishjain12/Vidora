import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import VideoCard from "@/components/Videocard";
import { getAllVideosByUserId } from "@/lib/actions/video";
import React from "react";

const page = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params;
  const { query, filter } = await searchParams;

  const { videos, userInfo } = await getAllVideosByUserId(id, query, filter);

  const {} = getAllVideosByUserId(id);
  return (
    <div className="wrapper page">
      <Header
        title={userInfo.name}
        subHeader="Profile"
        userImg={userInfo.image || ""}
      />
      <section className="video-grid">
        {videos.length > 0 ? (
          videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              userImg={user?.image || ""}
              username={user?.name || "Guest"}
            />
          ))
        ) : (
          <EmptyState
            icon="/assets/icons/video.svg"
            title="No videos found"
            description="No videos found"
          />
        )}
      </section>
    </div>
  );
};

export default page;
