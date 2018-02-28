import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import MainMap from './map'
import gleb1 from './images/gleb1.png'
import payrez from './images/payrez.png'
import wash from './images/wash.png'
import marc from './images/marc.png'
import { MainHeader, constants, mediaSizes, MainFooter, FootBar } from '../styles';
import FlipClock from './Components/FlipClock'


const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const FixedWrapper = styled.div`
`;
// position: fixed;
// left: 0;
// right: 0;
// top: 0;
// z-index: 100;
// margin-bottom: 4rem;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${constants.boxShadow};
  padding: .5rem;
  background-color: white;
`;

const NavButton = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  @media (min-width: ${mediaSizes.sm}px) {
    color: black;
    background-color: lightgrey;
    font-variant: small-caps; 
    box-shadow: ${constants.boxShadow};
  }
`;

const NavButtonWrapper = styled.div`
  display: flex;
`;

const AboutProfile = styled.div`z
  display: flex;
  justify-content: space-around;
  min-height: 30px;
  margin-top: 4%;
  margin-bottom:4%;
`;
const AboutBar = styled.div`
  display: Flex;
  justify-content: space-around;
  min-height: 30%;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 4%;
`;
const ProfileWrapper = styled.div`
  align-items: center;
  margin: auto;
  max-width: 50%;
`;
const ProfileBlurb = styled.div`
  width: 200px; 
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      hoverBar: null,
      about: false,
      mapState: false
    };
  }

  ChangeTheme = (state) => {
    this.setState({ mapState: state })
    this.props.location.state.theme = !state
    console.log('theme', this.props.location.state.theme)
  }

  toggleAbout = () => {
    this.setState({ about: !this.state.about })
  }


  render() {
    console.log('props ', this.props)
    //props.location.state is the login information originated at login/index.js
    console.log('Main page ', this.props.location.state)

    //for now the state is undefined unless someone logs in
    if (this.props.location.state && this.props.location.state.loggedIn === true) {
      return (
        <Wrapper>
          <FixedWrapper>
            <NavBar>
              <div className="div-flex">
                <MainHeader>WhatsLit</MainHeader>
                <div className="split">
                  <img src="https://i.imgur.com/fSG9Cdt.png" height="30" width="35" />
                </div>
              </div>
              <div className="ttlc">
                <p className="ttlc">L a s t - c a l l</p>
                <FlipClock inverse={this.props.location.state.theme} />
              </div>
              <NavButtonWrapper>
                <NavButton onClick={() => this.props.history.push("/profile", this.props.location.state)}>Your Profile</NavButton>
              </NavButtonWrapper>
            </NavBar>
          </FixedWrapper>
          <MainMap ChangeTheme={this.ChangeTheme} />

          {this.state.about ?
            <AboutBar>
              <div>
                <img src={marc} height="150" width="150" />
                <div>
                  <a>Marc Renaud</a>
                  <div>
                    <a>Google Map API</a>
                  </div>
                </div>
              </div>
              <div>

                <img src={wash} height="150" width="150" />
                <div>
                  <a>Eric Washburn</a>
                  <div>
                    <a>Front-End(UI)</a>
                  </div>
                </div>
              </div>

              <div>
                <img src={payrez} height="150" width="150" />
                <div>
                  <a>Emmanuel Perez</a>
                  <div>
                    <a>Front-End</a>
                  </div>
                </div>
              </div>

              <div>
                <img src={gleb1} height="150" width="150" />
                <div>
                  <a>Gleb Dvinski</a>
                  <div>
                    <a>Back-End</a>
                  </div>
                </div>
              </div>
            </AboutBar>
            : null}

          <NavBar>
            <MainHeader onClick={this.toggleAbout}>about us</MainHeader>
          </NavBar>
        </Wrapper>
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }
}

export default Main;