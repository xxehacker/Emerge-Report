"use client";

import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { ReportSubmited } from "./ReportFormCompleted";

export function ReportWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [reportData, setReportData] = useState<any>(null);
  console.log("reportData", reportData);

  const handleStepComplete = (data: any) => {
    console.log({
      "ReportData":reportData,
      "Data":data
    })
    setReportData({ ...reportData, ...data });

    if (currentStep === 3) {
      return;
    }
    
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="rounded-2xl bg-zinc-900 p-8">
        {currentStep === 1 && <ReportForm onComplete={handleStepComplete} />}
        {currentStep === 2 && (
          <ReportSubmited data={reportData} onComplete={handleStepComplete} />
        )}
      </div>
    </>
  );
}
