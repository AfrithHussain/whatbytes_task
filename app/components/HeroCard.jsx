import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { TfiMedallAlt, TfiBookmarkAlt } from "react-icons/tfi";
import dynamic from "next/dynamic";
import { TiHtml5 } from "react-icons/ti";
import UpdateDialogBox from "../ui-components/UpdateDialogBox";
import ProgressLineBar from "../ui-components/ProgressLineBar";
import Accuracy from "../ui-components/Accuracy";

const BasicLineChart = dynamic(() => import("../ui-components/LineChar"), {
  ssr: false,
});

function HeroCard({ rank, percentile, currentScore }) {
  return (
    <div className="border border-slate-200 h-full flex flex-col xl:flex-row gap-6 xl:gap-10 justify-between">
      {/* Left Sidebar */}
      <div className="xl:w-[250px] w-full xl:border-r border-b xl:border-b-0 border-neutral-300 p-4">
        <div className="flex xl:flex-col flex-row justify-around xl:justify-start gap-6 xl:gap-10 text-base xl:mt-14">
          <div className="flex items-center gap-2 xl:gap-5 py-2 px-1 cursor-pointer">
            <MdOutlineBarChart className="text-2xl" />
            <span className="hidden xl:inline text-neutral-600 font-semibold">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-2 xl:gap-5 text-blue-900 bg-neutral-100 border-r cursor-pointer rounded-full border-neutral-100 py-2 px-1">
            <TfiMedallAlt className="text-2xl" />
            <span className="hidden xl:inline font-semibold ">Skill Test</span>
          </div>
          <div className="flex items-center gap-2 xl:gap-5 py-2 px-1 cursor-pointer">
            <TfiBookmarkAlt className="text-2xl" />
            <span className="hidden xl:inline font-semibold">Internship</span>
          </div>
        </div>
      </div>

      {/* Middle Content */}
      <div className="xl:w-2/5 w-full min-w-[300px] p-4">
        <h1 className="text-neutral-700 text-xl mb-4">Skill Test</h1>
        {/* Box 1 */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-5 rounded-md border-neutral-300 border mb-4">
          <div>
            <TiHtml5 className="text-orange-600 text-7xl" />
          </div>
          <div className="flex-1 mx-4 text-center sm:text-left">
            <h1 className="font-semibold">Hyper Text Markup Language</h1>
            <p className="text-slate-600">
              Questions:08 | Duration:15min | Submitted On 5 June 2021
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <UpdateDialogBox
              onUpdate={(newRank, newPercentile, newScore) => {
                if (typeof window !== "undefined") {
                  const event = new CustomEvent("updateStats", {
                    detail: { newRank, newPercentile, newScore },
                  });
                  window.dispatchEvent(event);
                }
              }}
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="py-7 p-5 rounded-md border border-neutral-300 mb-4">
          <h1 className="font-bold mb-6 text-lg">Quick Statistics</h1>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-2xl bg-neutral-100 rounded-full w-12 h-12 flex justify-center items-center">
                🏆
              </div>
              <div>
                <h1 className="font-bold text-xl">{rank}</h1>
                <p className="text-neutral-600 text-sm">YOUR RANK</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:border-l sm:border-neutral-300 sm:pl-6">
              <div className="text-2xl bg-neutral-100 rounded-full w-12 h-12 flex justify-center items-center">
                📋
              </div>
              <div>
                <h1 className="font-bold text-xl">{percentile}%</h1>
                <p className="text-neutral-600 text-sm">PERCENTILE</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:border-l sm:border-neutral-300 sm:pl-6">
              <div className="text-2xl bg-neutral-100 rounded-full w-12 h-12 flex justify-center items-center">
                ✅
              </div>
              <div>
                <h1 className="font-bold text-xl">{currentScore} / 15</h1>
                <p className="text-neutral-600 text-sm">CORRECT ANSWERS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="p-4 rounded-md border border-neutral-300">
          <h1 className="text-xl font-bold mb-4">Comparation Graph</h1>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-3 gap-4 sm:gap-0">
            <div className="text-center sm:text-left">
              <p className="text-slate-600 text-lg">
                <span className="text-slate-700 font-bold">
                  You Scored {percentile}% percentile
                </span>{" "}
                which is lower than the average percentile 72% of all engineers
                who took this assessment.
              </p>
            </div>
            <p className="text-2xl bg-neutral-100 rounded-full w-12 h-12 flex justify-center items-center">
              📉
            </p>
          </div>
          <BasicLineChart percentile={percentile} />{" "}
          {/* Pass percentile here */}
        </div>
      </div>

      {/* Right Content */}
      <div className="xl:w-2/5 w-full min-w-[300px] p-4">
        <div className="border border-neutral-300 rounded-md xl:mr-10 py-8 p-4 mt-10 xl:mt-12">
          <h1 className="text-xl font-bold mb-7">Syllabus Wise Analysis</h1>
          <ProgressLineBar />
        </div>
        <div className="border border-neutral-300 rounded-md xl:mr-10 py-5 mt-6 p-4">
          <Accuracy currentScore={currentScore} totalQuestions={15} />
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
