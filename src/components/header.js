import React, { Component } from "react"
import styled from 'styled-components'

import MainLogo from "./MainLogo"
import Menu from "./Menu"

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let headerName = "header";
    if (this.state.isOpen) {
      headerName += ' mobileOpen';
    }

    return (
      <HeaderBackground>
        <HeaderMain className={headerName}>
          <MainLogo></MainLogo>
          <MainMenu>
            <Menu/>
          </MainMenu>
          <MobileHamburger onClick={() => this.toggleMenu()}>
              <div></div>
              <div></div>
              <div></div>
          </MobileHamburger>
          <MobileMenuContainer>
            <CloseButton onClick={() => this.toggleMenu()}>
              <div></div>
              <div></div>
            </CloseButton>
            <Menu/>
          </MobileMenuContainer>
        </HeaderMain>
      </HeaderBackground>
    );
  }
}

const HeaderBackground = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  transition-duration: .3s;
  z-index: 10;
  @media (max-width:800px) {
    background-color: #2a2a2a;
  }
`

const MainMenu = styled.div`
  & ul {
    font-family: Lato;
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & li {
      margin: 0;
      margin-left: 20px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  @media (max-width:800px) {
    display: none;
  }
`

const MobileHamburger = styled.div`
  display: none;
  height: 28px;
  width: 45px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  & div {
    width: 45px;
    height: 4px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 0;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 12px;
    }
    &:nth-child(3) {
      top: 24px;
    }
  }
  @media (max-width:800px) {
    display: block;
  }
`

const MobileMenuContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: #3a3a3a;
  transition-duration: .3s;
  @media (max-width:800px) {
    display: block;
  }
  & ul {
    font-family: Lato;
    list-style: none;
    & a {
      color: #fff;
      text-decoration: none;
    }
  }
`

const CloseButton = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  margin: 10px;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
  & div {
    width: 40px;
    height: 4px;
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
    left: 0;
    &:nth-child(1) {
      top: 20px;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      top: 20px;
      transform: rotate(-45deg);
    }
  }
`

const HeaderMain = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.mobileOpen {
    ${MobileMenuContainer} {
      right: 0;
    }
  }
`

export default Header