import React from "react"
import { Link } from "gatsby"
import { SectionHeading, TextImageSplit } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Container, CardSet } from "../components/Sections"
import Image from "../components/Image"

const IndexPageTemplate = ({
  heading,
  subheading,
  image,
  posts = [],
  about,
}) => {
  return (
    <div>
      {/* Header */}

      <div class="relative bg-gray-50">
  <div class="relative bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">How To Get Men to Chase You</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <div class="relative">
            <button type="button" class="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
              <span>Solutions</span>
              <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Docs</a>

          <div class="relative">
            <button type="button" class="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
              <span>More</span>
              <svg class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
          <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
        </div>
      </div>
    </div>
  </div>

  <main class="lg:relative">
    <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">Do you want to discover or reignite love in your life?</span>
          <span class="block text-pink-600 xl:inline"></span>
        </h1>
        <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Learn the secrets on how to make any man (friend, ex, boyfriend, or husband) fall deeply and madly in love with you, for the first time or all over again.</p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Buy Now</a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative h-90 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://res.cloudinary.com/dmvrfdfth/image/upload/c_crop,h_2200,w_3000,y_1800/v1669492342/How%20to%20Make%20Men%20Chase%20You/Hardcover_Book_PSD_Mockup2_ptn20q.jpg" alt="" />
    </div>
  </main>
</div>


      {/* Featured projects */}


      {/* About section */}

    </div>

  )
}

export default IndexPageTemplate
