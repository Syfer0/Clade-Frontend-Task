import { RightSideBar } from "../RightSideBar";
import Layout from "./Layout";
import { LeftContent } from "../LeftContent";

export const MainContent = () => {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <LeftContent />
          </div>
          {/* Sidebar */}
          <div className="col-span-3 bg-[#FCFCFC]">
            <RightSideBar />
          </div>
        </div>
      </Layout>
    </>
  );
};
