import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import VideoCard from "@/components/Videocard";
import { getAllVideos } from "@/lib/actions/video";
import React from "react";

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );

  return (
    <div className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
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
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        query={query}
        filter={filter}
      />
    </div>
  );
};

export default Page;
