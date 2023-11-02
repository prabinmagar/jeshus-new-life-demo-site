import {
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import staticImages from "../../utils/images";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export function EventDialog({ eventDialogOpen, handleEventDialogOpen }) {
  return (
    <>
      <div
        className={`event-dialog font-cera ${
          eventDialogOpen ? "block" : "hidden"
        }`}
      >
        <div className="event-dialog-content scrollbar-y-dir">
          <div className="justify-between lg:px-8 px-6 py-4">
            <div className="flex items-center gap-3 mb-2 w-full border-b-[1px] border-blue-gray-50">
              <div className="flex w-full justify-between flex-wrap gap-x-4 items-center mb-2">
                <Typography className="font-medium font-cera text-lg text-dark">
                  2073 Annual Seminar With Congregation
                </Typography>
                <IconButton
                  className="bg-dark rounded w-[30px] h-[30px]"
                  onClick={handleEventDialogOpen}
                >
                  <FaTimes size={14} />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="px-6 lg:px-8 py-1 mb-6">
            <div className="grid md:grid-cols-2 gap-x-6 md:mb-5">
              <div className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-[240px] red-overlay">
                <img
                  src={staticImages.notice1}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2 pb-5 flex flex-col justify-between flex-1">
                <div className="mb-3 flex items-start flex-col">
                  <div className="flex flex-col">
                    <div className="w-full text-2xl leading-8 text-gray-200 font-bold mb-3 mt-3">
                      Christian Hymns Seminar
                    </div>
                    <div className="flex-auto text-gray-400 my-1">
                      <span className="mr-3">December 35, 2023</span>
                      <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                      <span>Friday</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-3 bg-blue/10 rounded-md py-1.5 px-3">
                    <div className="inline-flex items-center gap-x-3">
                      <FaMapMarkerAlt />
                      <p className="text-sm">House of God, Lalitpur, NP</p>
                    </div>
                  </div>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="font-medium capitalize font-cera rounded-full text-sm bg-red mt-4"
                  >
                    Register Here !
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-y-2">
              <p className="font-normal text-base text-dark/80 font-cera">
                Join us for a spiritually uplifting experience at the Christian
                Hymns Seminar. Immerse yourself in the timeless beauty of hymns
                that inspire and touch the soul. This seminar is a gathering of
                like-minded individuals who share a deep appreciation for the
                power of music in worship and reflection.
              </p>
              <p className="font-normal text-base text-dark/80 font-cera">
                Together, we'll explore the rich history and meaning behind some
                of the most beloved Christian hymns, deepening our understanding
                of the faith and the role of music in it. Join us for a
                harmonious journey through the melodies and lyrics that have
                touched hearts for generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

EventDialog.propTypes = {
  eventDialogOpen: PropTypes.bool,
  handleEventDialogOpen: PropTypes.func,
};
