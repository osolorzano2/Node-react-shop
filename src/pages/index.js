import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
//  import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="/login">
                      <span className="sr-only">Your Company</span>
                      <img alt="Your Company" className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a href="/login" className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">This page is still under</span> <span className="block text-indigo-600 xl:inline">development</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                I am now looking to work remotely as a developer in order to take on new and more challenging projects. My desire is to solve real-world problems and make a positive impact on society.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/login"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/login"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://lh3.googleusercontent.com/aYLfR8lej01Gd09Ys7ONnaLMZBCNCc5m7nAADncbcjlT5f8h4eMzsp5Ke0_HEL_2_JM3TvQDUKBcQCpxxMUjfvEINod8nlmZLv8Zy0vqB8PajtaTIv71rXDfFrzetPOqC90Q7YQvVNrrHWQSrrdCfG04JQXOCwWf5MKySnDMmeooIpCR93X9hCijrtStPaUjs0TE9St9QmGumTI6Q_Gq0jsCf3wzOAgW_r6-lKXKXwHQQu0nJnr_PZFyPeUFxthesS7QrAq-EtPJd5D7DRjrBU6ihDi2_sGZtGqODi5urpAQ6GaK6zipVCnOnJbYCRz8e8EtdifrCx9zzVko9iTzrMEIrLnknjY0MpsVGu0ls_c4Sgt_1SLxYCMM3T-1PoGClBFZitn0sOmltxE74eg24k990G74Ra54yscsmHG8KaXd8J6xkr_QibTYGFs7GjOuGHGv0P7Od1C57JIh3DmbwqC41dZNfwKuaa4G752R2VKVT-gehDWz1VMBs5fZVD0CeHK7NgP7ODdRtfZ0A4y7ZAfvEpITDgOn68kwmfelcP4CkfStFsgQ3DKhT125NlaCQ7HCG1D5buSoWlKR8YmQiBBqkUJQkyTediCU72rUAlA5EeZGWGCH8G4m4gpRlpIOeSg1SFdbP1JvCYaAuqIBBuhRdWwiqOumXoSdXC5mSmG5mfR1k8BqYi3jph6P9p1g3SWcmVM78hkMnWhSEGQvC-gAFN9BhvAAhW9iU5757iEOoGHkDdiLERRJPTijRnMdBCSGjE8W4CaTYNpg6SsNYP2GF0pQVHspshIOkzJGsnQWN90AXKuYfc8DdiN6Pi_C28P0zLQRGZMT2hT4K5RyAkSN62MRVXc194MYW0diYfeRdOjj0viJ7ikJrLpjQi7Wh4DFNHDuJ5reClTSProTBCdTB9l69bgHeDVbw-wjaGXkrYmfTQ=w1133-h2013-no?authuser=0"
          alt=""
        />
      </div>
    </div>
  );
}
