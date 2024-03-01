import LandingLayout from "@/components/landingPage/landingLayout";
import LandingHeader from "@/components/landingPage/landingHeader";
import LandingProjects from "@/components/landingPage/landingProjects";
import LandingHero from "@/components/landingPage/landingHero";
import LandingPricing from "@/components/landingPage/landingPricing";
import LandingFooter from "@/components/landingPage/landingFooter";
import LandingCta from "@/components/landingPage/landingCta";
import { useTheme } from "next-themes";
import LandingTastimonials from "@/components/landingPage/landingTestimonials";
import LandingNewsletter from "@/components/landingPage/landingNewsletter";
import LandingStatistics from "@/components/landingPage/landingStatistics ";
import LandingFeature from "@/components/landingPage/landingFeature";
import LandingFAQ from "@/components/landingPage/landingFAQ";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // setTheme("light");

  return (
    <>
      <LandingLayout>
        <LandingHeader />
        <main className="flex flex-col gap-14">
          <LandingHero />
          <LandingFeature />
          <LandingStatistics />
          <LandingPricing />
          <LandingFAQ />
          {/* <LandingProjects /> */}
          {/* <LandingPricing /> */}
          {/* <LandingTastimonials /> */}
          <LandingNewsletter />
          <LandingCta />
        </main>
        <LandingFooter />
      </LandingLayout>
    </>
  );
}
