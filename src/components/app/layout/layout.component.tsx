import { FooterComponent } from "./sidePanel/footer";
import { SidePanelComponent } from "./sidePanel";
import { MainComponent } from "./main";
import { AboutComponent } from "./main/about";
import { HomeComponent } from "./main/home";
import { FactsComponent } from "./main/facts";
import { SkillsComponent } from "./main/skills";
import { ResumeComponent } from "./main/resume";
import { PortfolioComponent } from "./main/portfolio";
import { ServicesComponent } from "./main/services";
import { ContactComponent } from "./main/contact";
import { TestimonialComponent } from "./main/testimonials";

const LayoutComponent = () => {
  return (
    <>
      {/* <MainComponent /> */}
      <HomeComponent />
      <AboutComponent />
      <FactsComponent />
      <SkillsComponent />
      <ResumeComponent />
      <PortfolioComponent />
      <ServicesComponent />
      <TestimonialComponent />
      <ContactComponent />
      {/* <SidePanelComponent />*/}
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
