"use client";

import Link from "next/link";

const stats = [
  {
    value: "35+",
    label: "Countries Served",
  },
  {
    value: "1500+",
    label: "Projects Delivered",
  },
  {
    value: "2018",
    label: "Founded",
  },
];

export default function TrustedSolutions() {
  return (
    <section className="w-full bg-[#071121]">
      <div className="mx-auto flex min-h-[330px] w-full max-w-[1600px] items-center px-5 py-12 sm:min-h-[340px] sm:px-8 sm:py-14 md:min-h-[350px] md:px-10 md:py-14 lg:min-h-[340px] lg:px-16 lg:py-12 xl:min-h-[360px] xl:px-20 xl:py-14 2xl:min-h-[400px] 2xl:px-24 2xl:py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(380px,0.95fr)_minmax(480px,1.05fr)] lg:gap-10 xl:grid-cols-[minmax(450px,0.9fr)_minmax(600px,1.1fr)] xl:gap-14 2xl:grid-cols-[minmax(500px,0.9fr)_minmax(700px,1.1fr)] 2xl:gap-20">
          <div className="w-full max-w-[580px] sm:max-w-[600px] md:max-w-[620px] lg:max-w-[560px] xl:max-w-[580px] 2xl:max-w-[650px]">
            <h2 className="max-w-[360px] text-[32px] leading-[1.1] font-bold tracking-[-0.8px] text-white sm:max-w-[440px] sm:text-[36px] sm:leading-[1.08] sm:tracking-[-1px] md:max-w-[500px] md:text-[40px] md:leading-[1.05] md:tracking-[-1.2px] lg:max-w-[540px] lg:text-[46px] lg:leading-[1] lg:tracking-[-1px] xl:max-w-[540px] xl:text-[46px] xl:leading-[1] xl:tracking-[-1.05px] 2xl:max-w-[620px] 2xl:text-[52px] 2xl:leading-[1] 2xl:tracking-[-1.4px]">
              Not sure which one you need.
            </h2>

            <p className="mt-4 max-w-[360px] text-[13px] leading-[20px] font-normal text-[#E2E8F0]/90 sm:mt-5 sm:max-w-[450px] sm:text-[14px] sm:leading-[22px] md:mt-5 md:max-w-[500px] md:text-[15px] md:leading-[24px] lg:mt-4 lg:max-w-[534px] lg:text-[18px] lg:leading-[28px] xl:mt-4 xl:max-w-[534px] xl:text-[18px] xl:leading-[28px] 2xl:mt-5 2xl:max-w-[580px] 2xl:text-[19px] 2xl:leading-[29px]">
              That is what the call is for. One conversation and you will know
              what to build, in what order, and what it costs.
            </p>

            <a
              href="#contact"
              className="mx-auto mt-5 inline-flex h-[40px] items-center justify-center rounded-full bg-[#0EA5FF] px-6 text-[14px] leading-[20px] font-bold text-white transition-all duration-300 hover:bg-[#078de0] hover:shadow-[0_10px_30px_rgba(14,165,255,0.25)] sm:mx-0 sm:mt-6 sm:h-[40px] sm:px-6 sm:text-[14px] md:mt-6 md:h-[42px] md:px-7 md:text-[15px] lg:mt-5 lg:h-[40px] lg:px-7 lg:text-[16px] xl:mt-5 xl:h-[40px] xl:px-7 xl:text-[16px] 2xl:mt-6 2xl:h-[44px] 2xl:px-8 2xl:text-[16px]"
            >
              Help me Choose
            </a>
          </div>

          <div className="grid w-full grid-cols-3 items-center justify-items-center gap-2 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-7 2xl:gap-10">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex aspect-square h-[100px] w-[100px] shrink-0 flex-col items-center justify-center rounded-full border border-dashed border-[#1F2937] text-center sm:h-[125px] sm:w-[125px] md:h-[145px] md:w-[145px] lg:h-[132px] lg:w-[132px] xl:h-[150px] xl:w-[150px] 2xl:h-[175px] 2xl:w-[175px]"
              >
                <span className="text-[24px] leading-[26px] font-extrabold tracking-[-0.8px] text-[#0EA5FF] sm:text-[30px] sm:leading-[32px] md:text-[34px] md:leading-[36px] lg:text-[42px] lg:leading-[40px] xl:text-[42px] xl:leading-[40px] 2xl:text-[37px] 2xl:leading-[44px]">
                  {stat.value}
                </span>

                <span className="mt-1 px-1 text-[8px] leading-[12px] font-medium text-white/95 sm:mt-2 sm:text-[10px] sm:leading-[14px] md:text-[11px] md:leading-[16px] lg:text-[14px] lg:leading-[20px] xl:text-[14px] xl:leading-[20px] 2xl:text-[14px] 2xl:leading-[21px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
