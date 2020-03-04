<template>
                                  <div class="card bg-white shadow rounded">



                                    <div class="mb-4 pt-2 px-4 sm:px-5">
                                        <div>
                                            <div class="sm:hidden">
                                                <select aria-label="Selected tab"
                                                    class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150">
                                                    <option>My Account</option>
                                                    <option>Company</option>
                                                    <option selected>Team Members</option>
                                                    <option>Billing</option>
                                                </select>
                                            </div>
                                            <div class="hidden sm:block">
                                                <div class="border-b border-gray-200">
                                                    <nav class="-mb-px flex">
                                                        <a href="#"
                                                            class="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            My Account
                                                        </a>
                                                        <a href="#"
                                                            class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            Company
                                                        </a>
                                                        <a href="#" class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700">
                                                            Team Members
                                                        </a>
                                                        <a href="#"
                                                            class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                                                            Billing
                                                        </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="">

                                        <div class="px-4 sm:px-5">

                                            <!-- <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Search candidates</label> -->
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <div class="relative flex-grow focus-within:z-10">
                                                    <div class="absolute inset-y-0 left-0 pl-3 flex text-gray-400 items-center pointer-events-none">
                                                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                                        </svg>

                                                    </div>
                                                    <input id="email" class="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5" placeholder="John Doe" />
                                                </div>
                                                <button
                                                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                                                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span class="ml-2">Filter </span>
                                                </button>
                                            </div>
                                        </div>







                                        <!-- Replace with your content -->
                                        <div class="pt-4 pb-2">
                                            <div class="bg-white   overflow-hidden sm:rounded-md">
                                                <ul>

                                                    <li>
                                                        <router-link to="/details" class="block hover:bg-gray-50 focus:outline-none border-b focus:bg-gray-50 transition duration-150 ease-in-out">
                                                            <div class="px-4 py-4 sm:px-6">
                                                                <div class="flex items-center justify-between">
                                                                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                                        Back End Developer
                                                                    </div>
                                                                    <div class="ml-2 flex-shrink-0 flex">
                                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                            Full-time
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-2 sm:flex sm:justify-between">
                                                                    <div class="sm:flex">
                                                                        <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path
                                                                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                                            </svg>
                                                                            Engineering
                                                                        </div>
                                                                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                                            </svg>
                                                                            Remote
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fill-rule="evenodd"
                                                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                                clip-rule="evenodd" />
                                                                        </svg>
                                                                        <span>
                                                                            Closing on
                                                                            <time datetime="2020-01-07">January 7, 2020</time>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <a href="details.html" class="block hover:bg-gray-50 focus:outline-none border-b focus:bg-gray-50 transition duration-150 ease-in-out">
                                                            <div class="px-4 py-4 sm:px-6">
                                                                <div class="flex items-center justify-between">
                                                                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                                        Back End Developer
                                                                    </div>
                                                                    <div class="ml-2 flex-shrink-0 flex">
                                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                            Full-time
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-2 sm:flex sm:justify-between">
                                                                    <div class="sm:flex">
                                                                        <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path
                                                                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                                            </svg>
                                                                            Engineering
                                                                        </div>
                                                                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                                            </svg>
                                                                            Remote
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fill-rule="evenodd"
                                                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                                clip-rule="evenodd" />
                                                                        </svg>
                                                                        <span>
                                                                            Closing on
                                                                            <time datetime="2020-01-07">January 7, 2020</time>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="details.html" class="block hover:bg-gray-50 focus:outline-none border-b focus:bg-gray-50 transition duration-150 ease-in-out">
                                                            <div class="px-4 py-4 sm:px-6">
                                                                <div class="flex items-center justify-between">
                                                                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                                        Back End Developer
                                                                    </div>
                                                                    <div class="ml-2 flex-shrink-0 flex">
                                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                            Full-time
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-2 sm:flex sm:justify-between">
                                                                    <div class="sm:flex">
                                                                        <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path
                                                                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                                            </svg>
                                                                            Engineering
                                                                        </div>
                                                                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                                            </svg>
                                                                            Remote
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fill-rule="evenodd"
                                                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                                clip-rule="evenodd" />
                                                                        </svg>
                                                                        <span>
                                                                            Closing on
                                                                            <time datetime="2020-01-07">January 7, 2020</time>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="details.html" class="block hover:bg-gray-50 focus:outline-none border-b focus:bg-gray-50 transition duration-150 ease-in-out">
                                                            <div class="px-4 py-4 sm:px-6">
                                                                <div class="flex items-center justify-between">
                                                                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                                        Back End Developer
                                                                    </div>
                                                                    <div class="ml-2 flex-shrink-0 flex">
                                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                            Full-time
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-2 sm:flex sm:justify-between">
                                                                    <div class="sm:flex">
                                                                        <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path
                                                                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                                            </svg>
                                                                            Engineering
                                                                        </div>
                                                                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                                            </svg>
                                                                            Remote
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fill-rule="evenodd"
                                                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                                clip-rule="evenodd" />
                                                                        </svg>
                                                                        <span>
                                                                            Closing on
                                                                            <time datetime="2020-01-07">January 7, 2020</time>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="details.html" class="block hover:bg-gray-50 focus:outline-none  focus:bg-gray-50 transition duration-150 ease-in-out">
                                                            <div class="px-4 py-4 sm:px-6">
                                                                <div class="flex items-center justify-between">
                                                                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                                        Back End Developer
                                                                    </div>
                                                                    <div class="ml-2 flex-shrink-0 flex">
                                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                            Full-time
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-2 sm:flex sm:justify-between">
                                                                    <div class="sm:flex">
                                                                        <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path
                                                                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                                            </svg>
                                                                            Engineering
                                                                        </div>
                                                                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                                            </svg>
                                                                            Remote
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fill-rule="evenodd"
                                                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                                                clip-rule="evenodd" />
                                                                        </svg>
                                                                        <span>
                                                                            Closing on
                                                                            <time datetime="2020-01-07">January 7, 2020</time>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="border-t ">

                                                        <div class="bg-white  px-4 shadow-none  pb-2 py-3 flex items-center justify-between  sm:px-6">
                                                            <div class="hidden sm:block">
                                                                <p class="text-sm leading-5 text-gray-700">
                                                                    Showing
                                                                    <span class="font-medium">1</span>
                                                                    to
                                                                    <span class="font-medium">10</span>
                                                                    of
                                                                    <span class="font-medium">20</span>
                                                                    results
                                                                </p>
                                                            </div>
                                                            <div class="flex-1 flex  justify-between sm:justify-end">
                                                                <a href="#"
                                                                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                                                                    Previous
                                                                </a>
                                                                <a href="#"
                                                                    class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                                                                    Next
                                                                </a>
                                                            </div>
                                                        </div>


                                                    </li>

                                                </ul>
                                            </div>

                                        </div>


                                    </div>






                                </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
