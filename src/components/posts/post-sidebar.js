import Link from "next/link";
import { FaSearch } from "react-icons/fa";

function PostSidebar({ categories, tags }) {
  return (
    <div className="post-sidebar border-[#eee] border p-[50px_29px_66px]">
      <div className="post-searchbar">
        <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
          Search
        </h2>
        <form className="flex relative">
          <input
            className="w-full border-[#ddd] border-opacity-40 border text-[14px] focus-visible:outline-0 py-[15px] pl-[20px] pr-[50px]"
            placeholder="Search..."
            type="text"
            id="search"
          />
          <button
            className="absolute text-[#595959] top-1/2 translate-y-[-50%] right-[30px]"
            type="submit"
          >
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="post-sidebar-item mt-[50px]">
        <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
          Recent Posts
        </h2>
        <ul className="post-list">
          <li className="mb-[15px]">
            <Link href="/posts/magazine">
              <span className="hover:underline">
                Layout & White-Spacing In Design For Magazine
              </span>
            </Link>
          </li>
          <li className="mb-[15px]">
            <Link href="/posts/sketch-pillow">
              <span className="hover:underline">
                Look At The Sketch Pillow Unique By Scarlet Johanson
              </span>
            </Link>
          </li>
          <li className="mb-[15px]">
            <Link href="/posts/quisque">
              <span className="hover:underline">Visual Strategy Marketing</span>
            </Link>
          </li>
          <li>
            <Link href="/posts/simple-design">
              <span className="hover:underline">
                Summer Colorful Festival 2022
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="post-sidebar-item post-sidebar-item mt-[50px]">
        <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
          Categories
        </h2>
        <ul className="post-list">
          {categories.map((category) => (
            <li className="mb-[15px] last:mb-0" key={category}>
              <Link href={`/category/${category}`}>
                <span className="hover:underline capitalize">{category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="post-sidebar-item post-sidebar-item mt-[50px]">
        <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
          Popular tags
        </h2>
        <ul className="post-tags flex flex-wrap">
          {tags.map((popularTag) => (
            <li className=" mr-[10px] mb-[5px]" key={popularTag}>
              <Link href={`/tag/${popularTag}`}>
                <span className="hover:underline">{popularTag},</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostSidebar;
