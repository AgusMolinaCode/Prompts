"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import ReactPaginate from "react-paginate";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import PromptsTitle from "./PromptsTitle";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setAllPosts(data);
    setPageCount(Math.ceil(data.length / itemsPerPage) || 1);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const searchResult = filterPrompts(searchText);
    setSearchedResults(searchResult);
    setPageCount(Math.ceil(searchResult.length / itemsPerPage));
    setCurrentPage(0);
  }, [searchText]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return allPosts.filter(
      (item) =>
        regex.test(item.creator?.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const handlePageChange = ({ selected }) => {
    const newPage = Math.min(selected, Math.max(pageCount - 1, 0));
    setCurrentPage(newPage);
  };

  let startIndex, endIndex;
  let currentPosts = [];

  if (searchText) {
    startIndex = 0;
    endIndex = Math.min(itemsPerPage, searchedResults.length);
    currentPosts = searchedResults.slice(startIndex, endIndex);
  } else {
    startIndex = currentPage * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    currentPosts = allPosts.slice(startIndex, endIndex);
  }

  return (
    <section className="max-w-7xl px-4">
      <form className="relative w-full mt-10  flex-center">
        <input
          type="text"
          placeholder="Busca tus Prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input text-primary bg-secondary border-2 border-white peer"
        />
      </form>

      {allPosts.length > 0 ? (
        <PromptCardList data={currentPosts} handleTagClick={handleTagClick} />
      ) : (
        <p className="text-2xl text-center font-outfit pt-10 text-black">Cargando Prompts...</p>
      )}

      <ReactPaginate
        previousLabel={<FiChevronsLeft />}
        nextLabel={<FiChevronsRight />}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        pageLinkClassName="scroll-auto"
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
        breakLabel="..."
        pageRangeDisplayed={5}
        className="flex justify-center font-outfit text-lg font-bold mt-10 gap-2 mb-10"
        previousClassName="w-10 h-10 flex justify-center items-center rounded-full bg-indigo-200 text-black"
        nextClassName="w-10 h-10 flex justify-center items-center rounded-full bg-indigo-200 text-black"
        pageClassName="w-10 h-10 flex justify-center items-center rounded-full bg-indigo-300 text-gray-400"
        breakClassName="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-gray-400"
        disabledClassName="opacity-50 cursor-not-allowed"
        activeLinkClassName="text-black"
      />

      <PromptsTitle />
    </section>
  );
};

export default Feed;
