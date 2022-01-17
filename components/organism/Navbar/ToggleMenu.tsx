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
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="10" fill="white"></rect>
            <rect y="30" width="100" height="20" rx="10" fill="white"></rect>
            <rect y="60" width="100" height="20" rx="10" fill="white"></rect>
          </svg>
        )}
      </button>
    </>
  );
}
