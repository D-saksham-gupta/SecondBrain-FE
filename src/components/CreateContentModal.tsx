@ts-ignore
import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Link = "link",
  Document = "document",
}

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-60 flex justify-center items-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0 opacity-100 flex justify-center items-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 p-4 rounded-md">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <CrossIcon />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Input reference={titleRef} placeholder="Title" />
                  <Input placeholder="URL" reference={linkRef} />
                </div>
                <h1 className="text-center font-bold gap-1 font-serif">
                  Select the type of your content:
                </h1>
                <div className="gap-2 p-4 flex items-center justify-center">
                  <Button
                    text="Youtube"
                    size="md"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  />
                  <Button
                    text="Twitter"
                    size="md"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  />
                  <Button
                    text="Link"
                    size="md"
                    variant={
                      type === ContentType.Link ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Link);
                    }}
                  />
                  <Button
                    text="Docs"
                    size="md"
                    variant={
                      type === ContentType.Document ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Document);
                    }}
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="primary"
                    text="Submit"
                    size="md"
                    onClick={addContent}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
