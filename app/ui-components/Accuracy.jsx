import React from "react";

const Accuracy = ({ currentScore = 0, totalQuestions = 15 }) => {
  const percentage = (currentScore / totalQuestions) * 100;

  const radius = 70;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="rounded-lg">
      <div className="flex justify-between font-bold items-center text-xl text-black mb-2">
        <span>Question Analysis</span>
        <span className="text-blue-600">
          {currentScore}/{totalQuestions}
        </span>
      </div>

      <p className="text-gray-700 mb-4 mt-8">
        <span className="font-bold">
          You scored {currentScore} question{currentScore !== 1 ? "s" : ""}{" "}
          correct out of {totalQuestions}
        </span>
        . However, it still needs some improvements.
      </p>

      <div className="relative flex justify-center items-center w-[160px] h-[160px] mx-auto">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {/* Background Circle */}
          <circle
            stroke="#bfdbfe"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Foreground Progress Circle */}
          <circle
            stroke="#3b82f6"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div className="absolute text-3xl">🎯</div>
      </div>
    </div>
  );
};

export default Accuracy;
