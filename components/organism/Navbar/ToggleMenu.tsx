import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../../../context/app-context";

export default function ToggleMenu() {
  const context = useContext(AppContext);
  const menuValue = context.menuValue;

  const fun = () => {
    context.setMenuValue(!context.menuValue);
  };
  return (
    <>
      <button
        type="button"
        onClick={() => {
          context.setMenuValue(!context.menuValue);
        }}
        className="object-fit self-center bg-pink-500 shadow-md md:hidden lg:hidden xl:hidden 2xl:hidden p-2 ml-1 text-sm text-white-500 rounded-lg"
      >
        {menuValue ? (
          <img src="/icon/icon-close.svg" alt="" width={40} height={40} />
        ) : (
          <img src="/icon/toggle.svg" alt="" width={40} height={40} />
        )}
      </button>
    </>
  );
}
