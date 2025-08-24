import { Main, Section, Container } from "@/components/craft";
import Hero from "@/components/lp/hero";
import CTA from "@/components/lp/cta";
import FAQ from "@/components/lp/faq";
import Feature from "@/components/lp/feature";
import Footer from "@/components/lp/footer";

import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <FAQ />
      <CTA />
      <Footer />
    </Main>
  );
}