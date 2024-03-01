import { Section } from "@/components/elements/section";
import LandingContainer from "@/components/landingPage/landingContainer";
import LandingHeader from "@/components/landingPage/landingHeader";
import React from "react";

const Speaking = () => {
  return (
    <>
      <LandingHeader />
      <div className="relative" id="blogs">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <LandingContainer>
          <div className="relative flex flex-col pt-[30vh] w-2/3 justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-white">
              I've spoken at events all around the world and been interviewed
              for many podcasts.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-gray-600">
              One of my favorite ways to share my ideas is live on stage, where
              there's so much more communication bandwidth than there is in
              writing, and I love podcast interviews because they give me the
              opportunity to answer questions instead of just present my
              opinions.
            </p>
          </div>
          <div className="flex flex-col my-16 gap-8">
            <SpeakingSection title="Conferences">
              <Appearance
                href="#"
                title="In space, no one can watch you stream — until now"
                description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
                event="SysConf 2021"
                cta="Watch video"
              />
              <Appearance
                href="#"
                title="Lessons learned from our first product recall"
                description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
                event="Business of Startups 2020"
                cta="Watch video"
              />
            </SpeakingSection>
            <SpeakingSection title="Podcasts">
              <Appearance
                href="#"
                title="Using design as a competitive advantage"
                description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
                event="Encoding Design, July 2022"
                cta="Listen to podcast"
              />
              <Appearance
                href="#"
                title="Bootstrapping an aerospace company to $17M ARR"
                description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
                event="The Escape Velocity Show, March 2022"
                cta="Listen to podcast"
              />
              <Appearance
                href="#"
                title="Programming your company operating system"
                description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
                event="How They Work Radio, September 2021"
                cta="Listen to podcast"
              />
            </SpeakingSection>
          </div>
        </LandingContainer>
      </div>
    </>
  );
};

export default Speaking;

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="flex flex-col gap-2">{children}</div>
    </Section>
  );
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded-md p-3 hover:bg-gray-50 cursor-pointer"
    >
      <p className="mb-3 flex items-center text-sm text-zinc-400">{event}</p>
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <p className=" mt-2 text-sm text-zinc-600">{description}</p>

      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary"
      >
        {cta}
        <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
      </div>
    </a>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
