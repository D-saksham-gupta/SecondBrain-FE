import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-300 rounded max-w-48 pl-4">
      <div className="pr-6 cursor-pointer font-bold">{icon}</div>
      <div className="pr-6cursor-pointer font-medium">{text}</div>
    </div>
  );
}
