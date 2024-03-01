import React, { useEffect, useState } from "react";
import LandingLayout from "@/components/landingPage/landingLayout";
import SEO from "@/components/additional/seo";
import DashboardHero from "@/components/dashboard/PrivateData";
import LandingHeader from "@/components/landingPage/landingHeader";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { useSession } from "next-auth/react";
import PrivateData from "@/components/dashboard/PrivateData";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userSubscription, setUserSubscription] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      setIsLoading(true);
      const response = await fetch(
        `/api/db/user-subscription/get-subscription-by-user-email`
      );
      if (response.ok) {
        setIsLoading(false);
        const data = await response.json();
        setUserSubscription(data);
      } else {
        setIsLoading(false);
        console.error("Failed to fetch user subscription");
      }
    };

    if (status === "authenticated") {
      setIsAuthenticated(true);
      fetchUserName();
    }
  }, [status]);
  return (
    <>
      <LandingLayout>
        <LandingHeader />
        <DashboardContainer>
          {!isLoading ? (
            <>
              <SEO />
              <main className="flex">
                <PrivateData />
              </main>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center h-screen">
                <p>Loading</p>
              </div>
            </>
          )}
        </DashboardContainer>
      </LandingLayout>
    </>
  );
}
