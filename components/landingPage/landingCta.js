import { React, useEffect, useState } from "react";
import LandingContainer from "./landingContainer";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../elements/button";

export default function LandingCta() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  return (
    <div className="relative py-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      ></div>
      <LandingContainer>
        <div className="relative">
          <div className="flex items-center justify-center h-[40vh] px-2 sm:px-0">
            <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
              <h2 className="text-center text-3xl sm:text-4xl md:text-4xl font-bold dark:text-white">
                Get In Touch
              </h2>
              <p className="text-center text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300">
                Although I'm not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Button
                  link={isAuthenticated ? "/dashboard" : "/api/auth/signin"}
                  text="Say Hello!"
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
    </div>
  );
}
