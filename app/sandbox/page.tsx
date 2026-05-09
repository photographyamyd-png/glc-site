import { GLMarqueeBand } from "@/components/glc-sections/GLMarqueeBand";
import { GLCDnaSandbox } from "@/components/glc-dna/GLCDnaSandbox";
import { GLDifference } from "@/components/ground-level/GLDifference";
import { GLFeaturedServices } from "@/components/ground-level/GLFeaturedServices";
import { GLHero } from "@/components/ground-level/GLHero";
import { GLHomeCopyLab } from "@/components/ground-level/home-copy-lab/GLHomeCopyLab";
import { ProcessVerticalFlow } from "@/components/process/ProcessVerticalFlow";
import { ServiceLayoutLabC } from "@/components/ground-level/service-layout-lab/ServiceLayoutLabC";
import { SERVICE_LAYOUT_LAB_ITEMS } from "@/lib/ground-level/service-layout-lab-data";
import { notFound } from "next/navigation";

/**
 * Temporary approved staging route.
 * Contains sections currently approved in full during the reject-pass.
 */
export default function SandboxPage() {
  if (process.env.NODE_ENV === "production" && process.env.ENABLE_EXPERIMENTAL_ROUTES !== "true") {
    notFound();
  }

  return (
    <>
      {/* Approved core sections */}
      <GLHero />
      <GLMarqueeBand />
      <GLFeaturedServices />
      <GLDifference />

      {/* Approved layout lab slice */}
      <ServiceLayoutLabC items={SERVICE_LAYOUT_LAB_ITEMS} />

      {/* Approved reference stacks (Lane B + copy-lab clicked set) */}
      <GLCDnaSandbox />
      <GLHomeCopyLab />

      {/* V7 vertical process flow design lab — sandbox-only, homepage untouched */}
      <ProcessVerticalFlow />
    </>
  );
}
