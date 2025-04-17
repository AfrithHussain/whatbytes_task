"use client";

import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import { useEffect, useState } from "react";

export default function Page() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [currentScore, setCurrentScore] = useState(10);

  useEffect(() => {
    const handler = (e) => {
      const { newRank, newPercentile, newScore } = e.detail;
      setRank(newRank);
      setPercentile(newPercentile);
      setCurrentScore(newScore);
    };

    window.addEventListener("updateStats", handler);
    return () => window.removeEventListener("updateStats", handler);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroCard
        rank={rank}
        percentile={percentile}
        currentScore={currentScore}
      />
    </div>
  );
}
