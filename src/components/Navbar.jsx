import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 justify-between items-center">
      <nav className="w-full flex justify-between items-center screen-max-width">
        <img src={appleImg} width={18} height={18} />
        <div className="flex flex-1 justify-center items-center max-sm:hidden">
          {navLists.map((nav, key) => (
            <div
              className="px-5 text-gray text-sm cursor-pointer hover:text-white transition-all"
              key={key}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <img src={bagImg} width={18} height={18} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
