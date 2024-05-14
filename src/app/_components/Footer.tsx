import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-[#F8F8F8] md:px-8 py-4 md:py-8">
      <div className="flex flex-col px-4 md:flex-row gap-4">
        <div className="md:w-2/4">
          <h1 className="font-bold text-xl mb-2">Industry Talent</h1>
          <p className="text-sm">
            Delivering digital skill to transform lives through innovation and social-economic impact
          </p>
        </div>
        <div className="md:w-2/4">
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/career-paths">Career paths</Link></li>
            <li><Link href="/courses">Partner with us</Link></li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <ul className="space-y-1">
            <li><Link href="/about">Terms and conditions</Link></li>
            <li><Link href="/about">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="w-full py-4 bg-[#212529] mt-4">
        <p className="text-center text-white text-sm">© {year} Industry Talent | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
