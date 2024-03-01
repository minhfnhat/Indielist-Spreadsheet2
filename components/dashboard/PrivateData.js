import LandingContainer from "../landingPage/landingContainer";
import { React, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import LandingLayout from "../landingPage/landingLayout";
import AirtableEmbed from "../Embed/AirtableEmbed";
import NotPaidUser from "../Embed/NotPaidUser";

export default function PrivateData({ userSubscription }) {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const embedConfigs = [
    {
      name: "SaaS Leads",
      url: `https://airtable.com/embed/appP64m0xFwY1q6yO/shruh3OgLYuUVuh0c?backgroundColor=orange&viewControls=on`,
    },
    {
      name: "Marketing Leads",
      url: `https://airtable.com/embed/appP64m0xFwY1q6yO/shruh3OgLYuUVuh0c?backgroundColor=orange&viewControls=on`,
    },
    {
      name: "Promotion Leads",
      url: `https://airtable.com/embed/appP64m0xFwY1q6yO/shruh3OgLYuUVuh0c?backgroundColor=orange&viewControls=on`,
    },
  ];

  const [selectedEmbed, setSelectedEmbed] = useState(embedConfigs[0]);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  return (
    <>
      <LandingLayout>
        <div class="flex mt-16 py-8 w-full">
          <ul
            class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 
            dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-2/12"
          >
            {embedConfigs.map((embedConfig, index) => {
              return (
                <li>
                  <button
                    onClick={() => setSelectedEmbed(embedConfig)}
                    class="inline-flex items-center px-4 py-3 rounded-lg hover:text-slate-900 
                      bg-gray-100 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 
                      dark:hover:text-white"
                  >
                    <span class="ms-3">{embedConfig.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div
            class="p-1 bg-gray-100 dark:bg-gray-800 text-medium text-gray-500 dark:text-gray-400 
             rounded-lg w-10/12"
          >
            {selectedEmbed && (
              <>
                <p className="px-4 py-2 text-lg text-slate-700">
                  {selectedEmbed.name}
                </p>
                {(userSubscription &&
                  userSubscription.planName === "premium") ||
                true ? (
                  <AirtableEmbed embedConfig={selectedEmbed} />
                ) : (
                  <NotPaidUser embedConfig={selectedEmbed} />
                )}
              </>
            )}
          </div>
        </div>
      </LandingLayout>
    </>
  );
}
