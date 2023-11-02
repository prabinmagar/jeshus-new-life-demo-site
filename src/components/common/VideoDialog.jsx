import { IconButton } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";

export function VideoDialog({ videoDialogOpen, handleVideoDialogOpen }) {
  const vidId = "aqz-KE-bpKQ";

  return (
    <>
      <div
        className={`event-dialog font-cera ${
          videoDialogOpen ? "block" : "hidden"
        }`}
      >
        <div className="event-dialog-content overflow-y-scroll scrollbar-y-dir bg-transparent">
          <div className="justify-between py-4">
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-full justify-between flex-wrap gap-x-4 items-center">
                <IconButton
                  className="bg-white text-dark rounded-full hover:bg-red hover:text-white default-transition w-[30px] h-[30px] ms-auto"
                  onClick={handleVideoDialogOpen}
                >
                  <FaTimes size={14} />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              title="YouTube Video"
              src={`https://www.youtube.com/embed/${vidId}`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="text-white bg-black/50 px-4 py-3 mb-4 border-l-4 border-green">
            <h4 className="mb-3 text-base">Recent Presentation about the topic.</h4>
            <p className="text-light opacity-50 text-[15px]"> Live Conference Video is avaiable on YouTube! You can watch from the youtube channel also.</p>
          </div>
        </div>
      </div>
    </>
  );
}

VideoDialog.propTypes = {
  videoDialogOpen: PropTypes.bool,
  handleVideoDialogOpen: PropTypes.func,
};
