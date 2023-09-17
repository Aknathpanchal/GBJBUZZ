import { Button, Drawer, Collapse, Typography } from "antd";
import React, { useState } from "react";
import "./App.css";
import logo from "./images/Logo.png";
import img1 from "./images/all.png";
import Marquee from "react-fast-marquee";
import {
  MenuOutlined,
  CheckCircleFilled,
  CaretRightOutlined,
} from "@ant-design/icons";
// import Footer from "../../Components/Footer/index";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const skillsData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const panelStyle = {
    marginBottom: 10,
    background: "white",
    borderRadius: "10px",
    border: "none",
    fontSize: 15,
    fontWeight: 600,
    color: "#1f2937",
  };

  return (
    <div className="App">
      <div className="welcomePageMainContainer">
        <div className="navbar">
          <div className="navbarContainer">
            <div className="MasailogoContainer">
              <a to="/">
                <img src={logo} alt="Snack" />
              </a>
              <h4>Snack</h4>
            </div>
            <div className="NavItemsMenuContainer">
              <div className="NavMenuIcon">
                <MenuOutlined
                  style={{ fontSize: 20 }}
                  onClick={() => setOpenMenu(true)}
                />
              </div>
              <div className="navHorizontalMenu">
                <div>
                  <a href="#WelcomeHomeWrapper">Front of House</a>
                </div>
                <div>
                  <a href="#WelcomeAboutWrapper">Back of House</a>
                </div>
                <div>
                  <a href="#WelcomeCompanyWrapper">Marketing</a>
                </div>
                <div>
                  <a href="#welcomeObjectiveWrapper">TikTok</a>
                </div>
              </div>
            </div>
          </div>
          <Drawer
            title=""
            placement="left"
            closable={false}
            onClose={() => setOpenMenu(false)}
            open={openMenu}
            width="70%"
            bodyStyle={{
              padding: 0,
              paddingTop: 40,
            }}
          >
            <div className="drawerMenu">
              <a href="#WelcomeHomeWrapper" onClick={() => setOpenMenu(false)}>
                Front of House
              </a>
              <a href="#WelcomeAboutWrapper" onClick={() => setOpenMenu(false)}>
                Back of House
              </a>
              <a
                href="#WelcomeCompanyWrapper"
                onClick={() => setOpenMenu(false)}
              >
                Marketing
              </a>
              <a
                href="#welcomeObjectiveWrapper"
                onClick={() => setOpenMenu(false)}
              >
                TikTok
              </a>
            </div>
          </Drawer>
        </div>
        <div className="welcomeMainContainer">
          <div>
            <div className="WelcomeHomeWrapper" id="WelcomeHomeWrapper">
              <div className="WelcomeHomeContainer">
                <h4>All-in-one</h4>
                <h4>Restaurant</h4>
                <h4>Platform</h4>
                <p>
                  "SnackOS™ blends timeless design with modern hardware and
                  software for restaurants."
                </p>

                <button className="button-71" role="button">
                  Get in touch
                </button>

                <p>Crafted in New York</p>
                <div className="imgDiv">
                  <img src={img1} width={"100%"} alt="" />
                </div>

                <p>Loved by operators at</p>

                <div style={{width:'150vh', zIndex:"1"}}>
                   <div>
                <Marquee
                  gradient={false}
                  speed={100}
                  // pauseOnHover={true}
                  // pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                  zindex="1"  >
                  {skillsData.map((id) => (
                    <> <div
                      className="skill--box"
                      key={id}
                    >
                      <img src={logo} style={{ width: "30%",height:"50%" ,margin:"auto",}} />
                    </div>
                    <br/>
                    </>
                   
                    
                  ))}
                </Marquee>
              </div>

              <div>
                    <Marquee
                      gradient={false}
                      speed={100}
                      // pauseOnHover={true}
                      // pauseOnClick={true}
                      delay={0}
                      play={true}
                      direction="rigth"
                    >
                      {skillsData.map((id) => (
                        <> <div
                          className="skill--box"
                          key={id}
                        >
                          <img src={logo} style={{ width: "30%",height:"50%" ,margin:"auto",}} />
                        </div>
                        <br/>
                        </>
                       
                        
                      ))}
                    </Marquee>
                  </div>
                  <div>
                    <Marquee
                      gradient={false}
                      speed={100}
                      // pauseOnHover={true}
                      // pauseOnClick={true}
                      delay={0}
                      play={true}
                      direction="left"
                    >
                      {skillsData.map((id) => (
                        <> <div
                          className="skill--box"
                          key={id}
                        >
                          <img src={logo} style={{ width: "30%",height:"50%" ,margin:"auto",}} />
                        </div>
                        <br/>
                        </>
                       
                        
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
