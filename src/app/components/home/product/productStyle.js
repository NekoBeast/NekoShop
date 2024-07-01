import styled from "styled-components";

export const Main = styled.div`
  height: 100svh;
  .productSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 900;
    /* background-color: red; */
    height: 100svh;
    text-transform: capitalize;
    .sideBar {
      height: 100svh;
      width: 130px;
      border-right: 3px solid gray;
      position: absolute;
      left: 0%;
    }

    .List {
      width: 100%;
      display: flex;
      justify-content: center;
      height: 130px;
      border-bottom: 3px solid gray;
      align-items: center;
      ul {
        display: flex;
        font-size: 1em;
        justify-content: space-between;
        width: 500px;
      }
    }
    .pd {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .body {
        height: 400px;
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        /* background-color: black; */
        h2 {
          font-size: 5em;
        }
        .paragraph {
          font-size: 1em;
          width: 400px;
        }
        .button {
          display: flex;
          color: white;
          background-color: black;
          width: 130px;
          height: 40px;
          border-radius: 50px;
          justify-content: center;
          font-size: 1.5em;
          transition: all 0.3s ease-in-out;
          button {
            /* background-color: red; */
          }

          &:hover {
            background-color: white;
            color: black;
          }
        }
      }

      .img {
        width: 500px;
      }
      .social {
        position: absolute;
        bottom: 0%;
        right: 0%;
        border-left: 3px solid gray;
        padding: 20px 0px;
        height: 100svh;
        width: 130px;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .iconsbag {
          font-size: 2em;
        }

        p {
          transform: rotateZ(-90deg);
          width: 335px;
          margin-bottom: 2cm;
          .gray {
            color: gray;
          }
        }
        .socialicons {
          font-size: 1.5em;
          .facebook {
            padding-bottom: 10px;
          }
        }
      }
    }

    .productScroll {
      width: 100%;
      height: 200px;
      border-top: 3px solid gray;
      display: flex;
      justify-content: center;
      align-items: center;
      .scrollbox {
        display: flex;
        width: 1100px;
        height: 180px;
        overflow-x: scroll;
        scrollbar-width: none;
        border-radius: 10px;
        .box {
          display: flex;
        }
        .galary {
          display: flex;
          width: 1100px;
          height: 180px;

          overflow: hidden;
          /* background-color: white; */
          .catogories {
            width: 1100px;
            height: 200px;
          }
        }
      }
    }
  }
`;
