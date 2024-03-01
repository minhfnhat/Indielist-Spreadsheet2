import LandingContainer from "./landingContainer";
import { React, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ProductHunt from "../elements/productHunt";
import Button from "../elements/button";
import CustomDialog from "../elements/customDialog";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function LandingHero() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  return (
    <>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <LandingContainer>
          <div className="relative flex h-screen mt-4 justify-center items-center ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              {/* <ProductHunt /> */}
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-white">
                Get ahead of the game
                <br /> with
                <span className="text-primary"> Leads</span>
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-white">
                Grow your business with the power of data. Leads is a powerful.{" "}
                <br />
                <span className="text-primary">Get started today</span>
              </p>

              <div className="mt-6 flex justify-center gap-6">
                <SocialLink
                  href="#"
                  aria-label="Follow on GitHub"
                  icon={FaGithub}
                />
                <SocialLink
                  href="#"
                  aria-label="Follow on LinkedIn"
                  icon={FaLinkedin}
                />
                <SocialLink
                  href="#"
                  aria-label="Follow on X"
                  icon={FaXTwitter}
                />
                <SocialLink
                  href="#"
                  aria-label="Follow on Instagram"
                  icon={FaInstagram}
                />
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
      <CustomDialog
        isOpen={showDialog}
        closeModal={() => setShowDialog(false)}
      />
    </>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}
