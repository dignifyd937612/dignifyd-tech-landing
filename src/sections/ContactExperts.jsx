"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, PhoneCall } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function ContactExperts() {
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateUSPhone = (value) => {
    return /^\+1\d{10}$/.test(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!validateUSPhone(phone)) {
    setPhoneError("Please enter a valid 10-digit US phone number");
    return;
  }

  setPhoneError("");

    try {
      setLoading(true);

      // Split full name into firstName and lastName
      const nameParts = formData.name.trim().split(/\s+/);

      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "N/A";

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/leads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email: formData.email,
            companyName: formData.companyName || undefined,
            phone,
            requirements: message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit lead");
      }

      console.log("Lead created:", data);

      // Reset form
      setFormData({
        name: "",
        email: "",
        companyName: "",
      });

      setPhone("");
      setMessage("");

      alert("Thank you! Your request has been submitted successfully.");
    } catch (error) {
      console.error("Lead submission error:", error);

      alert(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#07192A]"
      id="contact"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/getintouch.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07192A]/90" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:grid lg:min-h-[760px] lg:grid-cols-[minmax(0,640px)_minmax(360px,1fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-20 xl:grid-cols-[636px_1fr] xl:gap-20">
        <div className="order-1 w-full max-w-[570px] text-white lg:order-2">
          <span className="block max-w-[103px] text-[18px] leading-[1.2] font-medium text-white/80">
            Work with us
          </span>

          <h3 className="mt-6 max-w-[600px] text-[32px] leading-[1.05] font-bold tracking-[-1.5px] sm:max-w-[650px] sm:text-[46px] md:max-w-[700px] md:text-[40px]">
            Join Our Diverse Team
          </h3>

          <p className="mt-9 max-w-[439px] text-[20px] leading-[1.35] text-white/90 sm:text-[24px]">
            Join our team of seasoned IT professionals and acquire curated
            digital expertise
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[16px] text-white">
            <a
              href="mailto:sales@dignifyd.io"
              className="flex items-center gap-3 transition-colors hover:text-[#119CF0]"
            >
              <span className="text-[#119CF0]">
                <Mail size={20} />
              </span>
              <span>sales@dignifyd.io</span>
            </a>

            <a
              href="tel:+1-877-735-0397"
              className="flex items-center gap-3 transition-colors hover:text-[#119CF0]"
            >
              <span className="text-[#119CF0]">
                <PhoneCall size={20} />
              </span>
              <span>+1-877-735-0397</span>
            </a>
          </div>
        </div>

        <div className="order-2 w-full rounded-[24px] bg-white px-7 py-9 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:px-10 sm:py-11 md:px-12 md:py-12 lg:order-1">
          <h2 className="max-w-[560px] text-[38px] leading-[1.02] font-bold tracking-[-1.8px] text-[#080D15] sm:text-[44px] md:text-[48px]">
            Get in touch with our Digital{" "}
            <span className="text-[#119CF0]">Experts</span>
          </h2>

          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="border-b border-[#E1E5EA]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="h-[50px] w-full bg-transparent text-[14px] text-[#111827] outline-none placeholder:text-[#7C8798]"
              />
            </div>

            <div className="mt-5 border-b border-[#E1E5EA]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="h-[50px] w-full bg-transparent text-[14px] text-[#111827] outline-none placeholder:text-[#7C8798]"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="border-b border-[#E1E5EA]">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="h-[50px] w-full bg-transparent text-[14px] text-[#111827] outline-none placeholder:text-[#7C8798]"
                />
              </div>

              <div className="border-b border-[#E1E5EA]">
                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  disableDropdown
                  className="!w-full"
                  inputClassName="!h-[50px] !w-full !border-0 !bg-transparent !text-[14px] !text-[#111827] !outline-none"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-[50px] !border-0 !bg-transparent !px-0 !pr-2",
                    buttonContentWrapperClassName: "!flex !items-center !gap-2",
                  }}
                />

                {phoneError && (
                  <p className="mt-1 text-xs text-red-500">
                    {phoneError}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 border-b border-[#E1E5EA]">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message*"
                maxLength={750}
                rows={1}
                required
                className="min-h-[50px] w-full resize-none overflow-hidden bg-transparent pt-3 text-[14px] leading-[1.6] text-[#111827] outline-none placeholder:text-[#7C8798]"
                onInput={(e) => {
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                }}
              />

              <div className="pb-2 text-right text-[12px] text-[#A0A8B5]">
                {message.length}/750 Characters
              </div>
            </div>

            <p className="mt-6 max-w-[550px] text-[14px] leading-[1.5] text-[#737D8C]">
              By clicking the "submit" button, you are agreeing to Unified
              Infotech Read our full{" "}
              <Link href="#" className="underline underline-offset-2">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>

            <button
              type="submit"
              disabled={loading}
              className="group mt-8 inline-flex h-[48px] items-center gap-3 rounded-full bg-gradient-to-r from-[#0EA5FF] to-[#09BDD8] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:shadow-[0_10px_28px_rgba(14,165,255,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{loading ? "Submitting..." : "Submit"}</span>

              {!loading && (
                <ChevronRight
                  size={19}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
