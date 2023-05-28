import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PromptCard from './PromptCard';

const Pagination = ({ posts, handleTagClick, handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const maintainScrollPosition = () => {
    window.scrollTo(window.scrollX, window.scrollY);
  };

  useEffect(() => {
    maintainScrollPosition();
  }, [currentPage]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      {currentPosts.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={Math.ceil(posts.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;
