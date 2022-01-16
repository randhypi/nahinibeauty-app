import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import ToggleMenu from "./ToggleMenu";
// import ToggleMenu from "./ToggleMenu";

export default function index() {
  return (
    <section>
      <nav className="relative  w-full ">
        <div className="px-5 py-2 flex justify-between bg-pink-300/0">
          <a className="" href="#">
            <Image src="/img/niclogo.png" width={100} height={100} alt="" />
          </a>
          <ToggleMenu />
        </div>
        <MenuMobile />
      </nav>
    </section>
  );
}
