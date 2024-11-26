import { IoSearchOutline } from "react-icons/io5";
const SearchComponent = ({
  onSearchChange,
}: {
  onSearchChange: (term: string) => void;
}) => {
  return (
    <section id="search" className="px-4 mt-5">
      <div className="border border-[#e4e4e4] rounded-full flex justify-center items-center px-3 py-2 focus:border-black">
        <IoSearchOutline className="mr-2" size={20} />
        <input
          placeholder="Pesquisar"
          type="search"
          className="ring-0 outline-none w-full bg-transparent"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </section>
  );
};
export default SearchComponent;
