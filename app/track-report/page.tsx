"use client";
import { ReportTracker } from "@/components/report/ReportTracker";
import { Spotlight } from "@/components/ui/spotlight-new";
// import { Spotlight } from "@/components/ui/spotlight-new";

export default function TrackReportPage() {
  return (
    <>
      <div className="relative flex min-h-[calc(100vh-4rem)] w-full bg-gradient-to-r from-slate-950 to-black selection:bg-purple-500/50 items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 overflow-hidden">
          <Spotlight
            gradientFirst="radial-gradient(80% 80% at 50% 20%, hsla(0, 100%, 75%, .15) 0, hsla(0, 100%, 50%, .07) 60%, hsla(0, 100%, 30%, 0) 100%)"
            gradientSecond="radial-gradient(65% 65% at 30% 70%, hsla(180, 90%, 70%, .1) 0, hsla(180, 90%, 45%, .05) 85%, transparent 100%)"
            gradientThird="radial-gradient(55% 55% at 80% 50%, hsla(260, 100%, 85%, .12) 0, hsla(260, 100%, 50%, .04) 95%, transparent 100%)"
            translateY={100}
            width={1200}
            height={600}
            smallWidth={280}
            duration={6}
            xOffset={150}
          />
        </div> */}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-6xl">
            <ReportTracker />
          </div>
        </div>
      </div>
    </>
  );
}
