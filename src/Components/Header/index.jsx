import React, { useContext, useEffect, useRef, useState } from "react"
import "./header.scss"
import avatar from "../../img/avatar.png"
import api from "../../Api"

export default function index() {
  const ref = useRef()
  const dropref = useRef()
  const searchInput = useRef(null)
  const [searchResult,setSearchResult]=useState([])

  async function handleSearch() {
    const { data } = await api.searchUser(searchInput.current.value.trim())
    setSearchResult(data.items)
    
  }


  return (
    <>
      <header>
        <div className="my__container">
          <div className="search">
            <a href={"https://github.com"} target={"_blank"}>
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                fill="white"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <input
              ref={searchInput}
              onChange={() => {
                handleSearch()
              }}
              
              type="text"
              className="form-control"
              placeholder="Search or jump to ..."
            /><div className="search__dropdown">
              {searchResult.slice(0,7).map((item, index) => {
                return (
                    <a key={index} href={`${item.html_url}`} target={"_blank"} className="user">
                      <img src={item.avatar_url} alt="avatar" />
                      <h4 className="user__name">{item.login}</h4>
                    </a>
                )
              })}
            </div>
          </div>
            <span className="search__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="#979A9C"
                  opacity=".4"
                  d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                ></path>
                <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
              </svg>
            </span>

            

          <div className="nav">
            <a
              href="https://github.com/pulls"
              target={"_blank"}
              className={"nav__link"}
            >
              Pull requests
            </a>
            <a
              href="https://github.com/issues"
              target={"_blank"}
              className={"nav__link"}
            >
              Issues
            </a>
            <a
              href="https://github.com/codespaces"
              target={"_blank"}
              className={"nav__link"}
            >
              Codespase
            </a>
            <a
              href="https://github.com/marketplace"
              target={"_blank"}
              className={"nav__link"}
            >
              Marketplace
            </a>
            <a
              href="https://github.com/explore"
              target={"_blank"}
              className={"nav__link"}
            >
              Explore
            </a>
          </div>

          <div className="settings ">
            <svg
              width="25"
              height="25"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.375 16.7857V11.8333C18.875 11.9286 18.375 12.0238 17.875 12.0238H17.375V17.7381H7.375V11.0714C7.375 8.40476 9.575 6.30952 12.375 6.30952C12.475 5.07143 13.075 4.02381 13.875 3.16667C13.575 2.78571 12.975 2.5 12.375 2.5C11.275 2.5 10.375 3.35714 10.375 4.40476V4.69048C7.375 5.54762 5.375 8.11905 5.375 11.0714V16.7857L3.375 18.6905V19.6429H21.375V18.6905L19.375 16.7857ZM10.375 20.5952C10.375 21.6429 11.275 22.5 12.375 22.5C13.475 22.5 14.375 21.6429 14.375 20.5952H10.375ZM21.375 6.78571C21.375 8.59524 19.775 10.119 17.875 10.119C15.975 10.119 14.375 8.59524 14.375 6.78571C14.375 4.97619 15.975 3.45238 17.875 3.45238C19.775 3.45238 21.375 4.97619 21.375 6.78571Z"
                fill="white"
              />
            </svg>

            <div
              className="plus__dropdown dropdown"
              onClick={(e) => {
                ref.current.classList.toggle("d-block")
              }}
            >
              <svg
                className="svg__plus"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" />
              </svg>
              <span className="dropdown__triangle"></span>

              <div className="dropdown-menu" ref={ref}>
                <span className="dropdown-menu__triangle"></span>
                <span className="dropdown-item">New repository</span>
                <span className="dropdown-item">Import repository </span>
                <span className="dropdown-item">New collapse</span>
                <span className="dropdown-item">New gist</span>
                <span className="dropdown-item">New organization</span>
                <span className="dropdown-item">New project</span>
              </div>
            </div>
            <div
              className="avatar_dropdown"
              onClick={(e) => {
                dropref.current.classList.toggle("d-block")
              }}
            >
              <img src={avatar} alt="avatar_small" className="avatar__small" />
              <span className="dropdown__triangle2 "></span>
              <div className="dropdown-menu profile__drop" ref={dropref}>
                <span className="profile__drop__triangle"></span>
                <span className="ms-3 ">
                  Signed in as <strong className="ms-3">Jahongir0126</strong>
                </span>
                <span className="dropdown-item border-top">Your profile</span>
                <span className="dropdown-item">Your repositories</span>
                <span className="dropdown-item">Your organizations </span>
                <span className="dropdown-item">Your projects </span>
                <span className="dropdown-item">Your stars </span>
                <span className="dropdown-item">Your gists </span>
                <span className="dropdown-item border-top">Upgrade </span>
                <span className="dropdown-item">Try Enterprise </span>
                <span className="dropdown-item">Help </span>
                <span className="dropdown-item"> Settings</span>
                <span className="dropdown-item border-top">Sign out </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
