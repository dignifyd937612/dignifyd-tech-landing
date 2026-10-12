"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechnologyPartnerBanner() {
  return (
    <section className="w-full px-5 py-12 sm:px-8 lg:px-10 lg:py-6">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[24px] bg-[#071325] shadow-[0_18px_35px_rgba(7,19,37,0.18)]">
        <div className="relative z-30 flex min-h-[390px] items-start px-7 pt-10 pb-8 sm:min-h-[310px] sm:items-center sm:px-10 sm:py-12 lg:min-h-[330px] lg:px-10 xl:px-10">
          <div className="w-full">
            <h2 className="max-w-[586px] text-[28px] leading-[1.12] font-bold tracking-[-0.025em] text-white sm:text-[34px] lg:text-[46px]">
              Your Technology Partner for Growth
            </h2>

            <p className="mt-5 max-w-[508px] text-[11px] leading-[1.55] text-white/70 sm:text-[16px] sm:leading-[1.6]">
              We build modern digital experiences designed to help businesses
              move faster, work smarter, and scale confidently.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex h-[38px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[13px] font-semibold text-[#182231] shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              <span>Talk to an Expert</span>

              <span className="text-[17px] leading-none">
                <MoveRight size={20} />{" "}
              </span>
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[-18px] bottom-0 z-10 h-[205px] w-[205px] rounded-t-full bg-[#079ce8] sm:right-[7%] sm:h-[235px] sm:w-[235px] lg:h-[255px] lg:w-[255px]" />

        <div className="pointer-events-none absolute right-[-5px] bottom-0 z-20 h-[235px] w-[180px] sm:right-[4%] sm:h-[300px] sm:w-[285px] lg:right-[4%] lg:h-[325px] lg:w-[310px]">
          <Image
            src="/images/technologies_banner.png"
            alt="Technology partner"
            fill
            priority
            sizes="310px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
