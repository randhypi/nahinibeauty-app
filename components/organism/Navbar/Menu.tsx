import cx from "classnames";
import Link from "next/link";
import { useState } from "react";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;

  const classTitle = cx({
    "w-full  py-2 px-20 text-center text-2xl text-gray-700 font-semibold  hover:bg-pink-200":
      true,
  });

  return (
    <Link href={href}>
      <a className={classTitle} aria-current="page">
        {title}
      </a>
    </Link>
  );
}
