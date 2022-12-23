import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Tildoss The Pentester" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="My Latest Cyber Security Articles" sources={['Blog']} />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="services" heading="Services" />
        <ContactSection sectionId="contact" heading="Contact me" />
      </Page>
    </>
  );
}
