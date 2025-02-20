"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Details() {
  return (
    <div className="mt-2 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-red-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Report Cyber Crimes, Stay Safe Online
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Protect yourself and others from online threats. Report cyber crimes 
            instantly and help create a safer digital world.
          </p>
        </div>
        <Image
          src="/fraud4.png"
          width={500}
          height={500}
          alt="Cyber Security"
          className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-cover rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-900">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Your Privacy, Our Priority
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          All reports remain confidential, ensuring your safety while taking action 
          against cyber threats.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Report Fraud, Identity Theft, and Online Scams
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            If you encounter phishing attempts, financial fraud, or hacking 
            incidents, report them immediately and help stop cyber criminals.
          </p>
        </div>
        <Image
          src="/fraud1.png"
          width={500}
          height={500}
          alt="Report Fraud"
          className="absolute -right-40 md:-right-[70%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-600">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Stay Alert, Stay Secure
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Learn how to recognize cyber threats and protect your personal 
          information from hackers.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-purple-700">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Law Enforcement at Your Service
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Our platform connects you with cybersecurity professionals and law 
          enforcement agencies for prompt action.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-red-700">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Fight Cyber Crime Together
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Join a community that actively fights against online fraud, cyber 
          bullying, and digital harassment.
        </p>
      </WobbleCard>
    </div>
  );
}
