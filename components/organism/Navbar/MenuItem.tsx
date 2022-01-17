import cx from "classnames";
import Link from "next/link";
import { useState } from "react";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;

  const classTitle = cx({
    menuItem: true,
  });

  return (
    <Link href={href}>
      <a className={classTitle} aria-current="page">
        {title}
      </a>
    </Link>
  );
}
