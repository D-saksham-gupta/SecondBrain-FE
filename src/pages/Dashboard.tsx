import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL, FRONTEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-1">
          <Button
            variant="primary"
            text="Share Brain"
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              const shareUrl = `${FRONTEND_URL}/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            size="md"
            startIcon={<ShareIcon />}
          />
          <Button
            variant="secondary"
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
            }}
            size="md"
            startIcon={<PlusIcon />}
          />
        </div>
        <div className="flex gap-4 py-10 flex-wrap">
          {contents.map(({ title, link, type }) => (
            <Card key={link} title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
