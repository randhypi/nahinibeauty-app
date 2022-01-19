import Image from "next/image";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import MenuMobile from "./MenuMobile";
import ToggleMenu from "./ToggleMenu";
// import ToggleMenu from "./ToggleMenu";

export default function index() {
  return (
    <section>
      <nav className="relative  w-full cursor-all-scroll:fixed ">
        <div className="px-5 py-2 flex  flex-row justify-between bg-pink-300/0">
          <a
            className="text-[2rem] font-bold h-fit my-auto text-white tracking-wider"
            href="#"
          >
            Beauty me
          </a>
          <MenuMobile />
          <Menu />
          <ToggleMenu />
        </div>
      </nav>
    </section>
  );
}
