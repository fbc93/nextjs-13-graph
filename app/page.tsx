'use client'
import { useEffect, useState } from "react";
import BGChart from "./components/bgchart";
import MainChart from "./components/mainchart";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  },[])

  return (
    <>
      {!isLoading && (
        <main id="wrap">
        <div className="grap-container">
          <div className="marker"></div>
          <BGChart />
          <MainChart />
  
          <div className="label-container">
            <div className="label">0</div>
            <div className="label">20</div>
            <div className="label">40</div>
            <div className="label">60</div>
            <div className="label">80</div>
            <div className="label">100</div>
          </div>
        </div>
      </main>
      )}
    </>
  )
}
