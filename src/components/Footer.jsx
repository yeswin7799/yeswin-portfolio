import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 text-gray-700 py-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center md:text-left">
        
        {/* Copyright Text */}
        <p>
          &copy; {new Date().getFullYear()} <strong>Yeswin Chintapalli</strong>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://github.com/yeswin7799" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub className="hover:text-rose-600 transition" />
          </a>
          <a href="https://www.linkedin.com/in/yeswinchintapalli/" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin className="hover:text-rose-600 transition" />
          </a>
          <a href="https://www.instagram.com/yeswin_ch/" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram className="hover:text-rose-600 transition" />
          </a>
          <a href="https://leetcode.com/u/yeswin999/" target="_blank" rel="noreferrer" title="LeetCode">
            <FaCode className="hover:text-rose-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
