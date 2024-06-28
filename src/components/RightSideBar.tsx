import { Trash } from "../assets/svgs/Trash";
import { PencilIcon } from "../assets/svgs/PencilIcon";
import { Match } from "../assets/svgs/Match";
import { Views } from "../assets/svgs/Views";
import { ApplicantsBlack } from "../assets/svgs/ApplicantsBlack";
import { MessagesBlack } from "../assets/svgs/MessagesBlack";

export const RightSideBar = () => {
  return (
    <>
      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-9">
        <div className="flex gap-2 py-3 px-6 border-[0.8px] border-dark-orange bg-orange-50 text-dark-orange items-center rounded-lg ml-12 max-w-[10.75rem]">
          <Trash />
          <span>Delete job</span>
        </div>
        <div className="flex gap-2 py-3 px-6 border-2 border-light-orange bg-dark-orange text-white items-center justify-center rounded-lg mr-8 max-w-[10.75rem]">
          <PencilIcon />
          <span>Edit job</span>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex flex-col gap-4 mt-6 p-3 ml-12 mr-8">
        {/* applicants */}
        <div className="flex justify-between ">
          <div className="flex gap-2.5">
            <ApplicantsBlack />
            <span>Applicants</span>
          </div>
          <div>400</div>
        </div>
        <hr className="border-neutral-gray" />
        {/* matches */}
        <div className="flex justify-between ">
          <div className=" flex gap-2.5">
            <Match />
            <span>Matches</span>
          </div>
          <div>100</div>
        </div>
        <hr className="border-neutral-gray" />
        {/* Messages */}
        <div className="flex justify-between ">
          <div className=" flex gap-2.5">
            <MessagesBlack />
            <span>Messages</span>
          </div>
          <div>147</div>
        </div>
        <hr className="border-neutral-gray" />
        {/* views */}
        <div className="flex justify-between ">
          <div className=" flex gap-2.5">
            <Views />
            <span>Views</span>
          </div>
          <div>800</div>
        </div>
      </div>
    </>
  );
};
