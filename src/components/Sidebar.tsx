import { DocIcon } from "../icons/DocIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import Logo from "../icons/brain.png";

export function Sidebar() {
  return (
    <div className="h-screen w-72 bg-white border-r fixed top-0 left-0 border-2 pl-4">
      <div className="flex text-2xl items-center text-purple-600 font-bold font-serif py-4">
        <img src={Logo} alt="" className="h-12 w-12 text-purple-600 mr-2" />
        Second Brain
      </div>
      <div className="pt-8 pl-2">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        <SidebarItem text="Documents" icon={<DocIcon />} />
        <SidebarItem text="Links" icon={<LinkIcon />} />
        <SidebarItem text="Tags" icon={<TagIcon />} />
      </div>
    </div>
  );
}
