"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#fafafa]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-col items-center px-4 text-center sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mb-20 flex items-center justify-center sm:mb-8 md:mb-9 lg:mb-10 xl:mb-11 2xl:mb-12">
          <Image
            src="/images/light-logo.png"
            alt="Dignifyd"
            width={160}
            height={60}
            priority
            className="h-auto w-[200px] object-contain sm:w-[110px] md:w-[120px] lg:w-[130px] xl:w-[145px] 2xl:w-[160px]"
          />
        </div>

        <h1 className="w-full max-w-[370px] text-[37px] leading-[1.04] font-bold tracking-[-1.7px] text-[#111111] sm:max-w-[800px] sm:text-[48px] sm:leading-[1.05] sm:tracking-[-2px] md:max-w-[900px] md:text-[56px] md:leading-[1.04] md:tracking-[-2.5px] lg:max-w-[1050px] lg:text-[64px] lg:leading-[1.03] lg:tracking-[-3px] xl:max-w-[1074px] xl:text-[89.4px] xl:leading-[1.02] xl:tracking-[-3.2px] 2xl:max-w-[1218px] 2xl:text-[89.4px] 2xl:leading-[1.01] 2xl:tracking-[-3.8px]">
          Looking for Software,{" "}
          <span className="text-[#119CF0]">Web and App</span> Development?
        </h1>

        <p className="mt-6 w-full max-w-[370px] text-[17px] leading-[1.6] font-normal text-[#666666] sm:mt-7 sm:max-w-[520px] sm:text-[10.5px] sm:leading-[1.65] md:mt-7 md:max-w-[590px] md:text-[11px] lg:mt-8 lg:max-w-[650px] lg:text-[12px] xl:mt-9 xl:max-w-[700px] xl:text-[17.5px] 2xl:mt-10 2xl:max-w-[675px] 2xl:text-[17.5px]">
          Get all three services under one roof with Dignifyd Tech. Our
          comprehensive software solutions manages your entire digital
          experience and provides higher customer satisfaction
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
          <div className="flex items-baseline gap-2">
            <span className="text-[16px] font-bold text-[#111111] sm:text-[17px] md:text-[18px]">
              1500+
            </span>
            <span className="text-[14px] text-[#777777] sm:text-[15px] md:text-[16px]">
              Projects Delivered
            </span>
          </div>

          <span className="h-5 w-px bg-[#D5D5D5]" />

          <div className="flex items-baseline gap-2">
            <span className="text-[16px] font-bold text-[#111111] sm:text-[17px] md:text-[18px]">
              35+
            </span>
            <span className="text-[14px] text-[#777777] sm:text-[15px] md:text-[16px]">
              Countries Served
            </span>
          </div>

          <span className="h-5 w-px bg-[#D5D5D5]" />

          <div className="flex items-baseline gap-2">
            <span className="text-[16px] font-bold text-[#111111] sm:text-[17px] md:text-[18px]">
              8+
            </span>
            <span className="text-[14px] text-[#777777] sm:text-[15px] md:text-[16px]">
              Years of Experience
            </span>
          </div>
        </div>

        <div className="mt-5 flex w-full max-w-[340px] flex-col items-stretch justify-center gap-3 sm:mt-3.5 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-2 md:mt-4 md:gap-2.5 lg:mt-4 lg:gap-2.5 xl:mt-5 xl:gap-3 2xl:mt-5 2xl:gap-3.5">
          <a
            href="#contact"
            className="group relative flex h-[50px] w-full items-center justify-center rounded-full bg-[#119CF0] px-5 text-[20px] lg:text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#078de0] hover:shadow-[0_10px_30px_rgba(17,156,240,0.25)] sm:h-[35px] sm:w-auto sm:px-5 md:h-[37px] md:px-5 lg:h-[39px] lg:px-6 xl:h-[42px] xl:px-6 2xl:h-[46px] 2xl:px-7"
          >
            <span className="whitespace-nowrap pr-9">Book free call</span>

            <span className="absolute right-[5px] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-white text-[#119CF0] transition-transform duration-300 group-hover:translate-x-0.5 sm:right-[4px] sm:h-[27px] sm:w-[27px] md:h-[29px] md:w-[29px] lg:h-[31px] lg:w-[31px] xl:h-[34px] xl:w-[34px] 2xl:h-[38px] 2xl:w-[38px]">
              <ArrowUpRight
                strokeWidth={2.5}
                className="h-[12px] w-[12px] sm:h-[10px] sm:w-[10px] md:h-[11px] md:w-[11px] lg:h-[11px] lg:w-[11px] xl:h-[13px] xl:w-[13px] 2xl:h-[14px] 2xl:w-[14px]"
              />
            </span>
          </a>

          <Link
            href="#our_services"
            className="flex h-[50px] w-full items-center justify-center rounded-full bg-white px-6 text-[20px] lg:text-[15px] font-medium text-[#119CF0] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-[35px] sm:w-auto sm:px-5 md:h-[37px] md:px-5 lg:h-[39px] lg:px-6 xl:h-[42px] xl:px-7 2xl:h-[46px] 2xl:px-8"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
