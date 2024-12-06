import { DeleteIcon } from "../icons/DeleteIcon";
import { DocIcon } from "../icons/DocIcon";
import { Button } from "./Button";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "link" | "document";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="bg-white rounded-md shadow-md border border-slate-200 max-w-72 p-4 min-h-48 min-w-72">
        <div className=" flex justify-between">
          <div className="flex items-center font-bold">
            <div className="text-gray-500 pr-2">
              <DocIcon />
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <div className="pr-2 text-gray-500 font-bold">
              <a href={link} target="_blank">
                <Button variant="secondary" size="sm" text="Open Link" />
              </a>
            </div>
            <div className="text-gray-500">
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x", "twitter")}></a>
            </blockquote>
          )}
          {type === "link" && (
            <div>
              <a href={link} target="_blank"></a>
            </div>
          )}
          {type === "document" && (
            <div className="flex flex-col items-center justify-center h-full">
              <a href={link} target="_blank"></a>
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
