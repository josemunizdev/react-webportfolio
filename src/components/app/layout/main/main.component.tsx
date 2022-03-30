import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutComponent } from "./about";
import { ContactComponent } from "./contact";
import { HomeComponent } from "./home";
import { PortfolioComponent } from "./portfolio";
import { ResumeComponent } from "./resume";
import { ServicesComponent } from "./services";
import { SidePanelComponent } from "../sidePanel";

const MainComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SidePanelComponent />
              <main id="main">
                <HomeComponent />
              </main>
            </>
          }
        />

        {/* <Route path="/about">
          <>
            <SidePanelComponent />
            <main id="main">
              <AboutComponent />
            </main>
          </>
        </Route>

        <Route path="/resume">
          <>
            <SidePanelComponent />
            <main id="main">
              <ResumeComponent />
            </main>
          </>
        </Route>

        <Route path="/portfolio">
          <>
            <SidePanelComponent />
            <main id="main">
              <PortfolioComponent />
            </main>
          </>
        </Route>

        <Route path="/services">
          <>
            <SidePanelComponent />
            <main id="main">
              <ServicesComponent />
            </main>
          </>
        </Route>

        <Route path="/contact">
          <>
            <SidePanelComponent />
            <main id="main">
              <ContactComponent />
            </main>
          </>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MainComponent;
