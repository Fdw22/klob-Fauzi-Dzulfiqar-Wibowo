import React, { Component } from "react";
import "../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "People", href: "/people", current: false },
  { name: "Starship", href: "/starship", current: false },
  { name: "Planet", href: "/planet", current: false },
];

export default function Example() {
  return (
    <>
      <nav className="bg-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" className="flex items-center">
            <img
              src="https://static.klob.id/img/logo-klob-text-og.png"
              className="mr-3 h-6 sm:h-9"
              alt="Klob Logo"
            ></img>
          </a>
          <div className="flex items-center">
            <a
              href="/buat-lowongan-pekerjaan"
              className="text-sm font-normal text-blue-600 dark:text-blue-500 underline"
            >
              Buat Lowongan
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
