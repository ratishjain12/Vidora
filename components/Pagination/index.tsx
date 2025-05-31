import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  query?: string;
  filter?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  query,
  filter,
}: PaginationProps) => {
  const getPageLink = (page: number) => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (filter) params.set("filter", filter);
    params.set("page", String(page));
    return `/?${params.toString()}`;
  };

  return (
    <div className="pagination">
      <Link
        href={getPageLink(currentPage - 1)}
        aria-disabled={currentPage === 1}
      >
        <button disabled={currentPage === 1}>Previous</button>
      </Link>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={getPageLink(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
      >
        <button disabled={currentPage === totalPages}>Next</button>
      </Link>
    </div>
  );
};

export default Pagination;
