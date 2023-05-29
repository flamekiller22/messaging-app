"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  }

  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx(`
        group
        flex
        gap-x-3
        text-sm
        leading-6
        font-semibold
        w-full
        justify-center
        p-4
        text-gray-500
        hover:text-black
        dark:hover:text-gray-100
        hover:bg-gray-100
        dark:hover:bg-gray-600
      `,
      active && 'bg-gray-100 dark:bg-gray-600 text-black dark:text-gray-100')}
    >
      <Icon className="w-5 h-5" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}

export default MobileItem;