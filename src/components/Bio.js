import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../skills.js";
import me from "./assets/me.png";
import Fade from "./Fade.js";

export default function Bio() {
  return (
    <section
      id="bio"
      className="text-gray-400 bg-gray-900 body-font p-20  py-20"
    >
      <div className="container  py-10 mx-auto text-center lg:px-40">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          /about me
        </h1>
      </div>

      {/*Outer Card */}
      <div className="flex items-center lg:w-5/6 mx-auto leading-relaxed text-base">
        {/*Outer Card with Information */}
        <div class="mx-auto px-8 py-10 relative z-10 w-5/6 border-2 rounded-lg border-gray-800 bg-gray-900 opacity-80 transform transition duration-1000 hover:opacity-100 hover:scale-105">
          <img
            src={me}
            alt="Me"
            class="border-2 border-red-600 rounded-full p-2 h-400 mx-auto transition duration-1000 hover:opacity-100 hover:scale-105 "
          />

          <Fade>
            <div class="flex py-10 flex-wrap -m-4 text-gray-400 text-center font-semibold p-4">
              <p>
                I am currently working at Abercrombie & Fitch as a Technical
                Engineer & Digital Workplace Specalist. I graduated from The
                Ohio State University with a degree in Computer Science &
                Engineering in Spring of 2021.
              </p>
              <br /> <br />{" "}
              <p>
                I have been spending much of my free time studying various
                software development topics, with a large emphasis on blockchain
                and web3.0 technologies. Additionally, I enjoy projects that
                involve automation, artificial intelligence, and some sort of
                customer facing interaction.{" "}
              </p>
              <br /> <br />{" "}
              <p>
                {" "}
                In my extra free time, I enjoy going to the gym, playing rocket
                league and league of legends, practicing guitar/piano, and
                tending to my plants.
              </p>
            </div>
          </Fade>
          <footer class="text-center py-3 px-8 text-gray-500">
            <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-evenly">
              <a
                class="link"
                href="https://twitter.com/HoffmannCole"
                data-tippy-content="@twitter_handle"
              >
                <svg
                  class="h-6 fill-current text-red-600 hover:text-red-500"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                class="link"
                href="https://github.com/ColeHoffmann"
                data-tippy-content="@github_handle"
              >
                <svg
                  class="h-6 fill-current text-red-600 hover:text-red-500"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/*THIS IS THE LINKED IN. DIFFERENT SOURCE. */}
              <a class="link" href="https://www.linkedin.com/in/hoffmanncole/">
                <svg
                  xmlns="http://www.w3.org/1999/xlink"
                  class="h-6 fill-current text-red-600 hover:text-red-500"
                  role="img"
                  viewBox="0 0 64 64"
                >
                  <title>Linked In</title>
                  <path
                    data-name="layer1"
                    d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"
                  ></path>{" "}
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
