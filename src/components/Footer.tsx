'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href="#">
            <Image
              className="w-auto h-7"
              src=""
              alt="logo"
              width={1000}
              height={1000}
            />
          </Link>

          <p className="lg:max-w-md max-w-xs mx-auto mt-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex mt-4 gap-x-10 sm:flex-row sm:items-center sm:justify-center">
            <Link href="" className="">
              <FaFacebook className="hover:text-primary/90 text-3xl text-white" />
            </Link>
            <Link href="" className="">
              <FaInstagram className="hover:text-primary/90 text-3xl text-white" />
            </Link>
          </div>
        </div>

        <hr className="my-10 border-white" />

        <div className="text-center">
          <p className="text-sm text-gray-100">
            © Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
