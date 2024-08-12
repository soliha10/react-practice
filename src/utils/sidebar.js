import styled from "styled-components";

import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as explores } from "../assets/icons/home.svg";
import { ReactComponent as shorts } from "../assets/icons/home.svg";
import { ReactComponent as subscriptions } from "../assets/icons/home.svg";

const Icon = styled.div``;

Icon.Home = styled(home)`
  width: 30px;
  height: 30px;
`;
Icon.Explores = styled(explores)`
  width: 30px;
  height: 30px;
`;
Icon.Shorts = styled(shorts)`
  width: 30px;
  height: 30px;
`;
Icon.Subscriptions = styled(subscriptions)`
  width: 30px;
  height: 30px;
`;
export const sidebar = [
  {
    id: 1,
    title: "",
    data: [
      {
        id: 1,
        title: "Home",
        icon: Icon.Home,
      },
      {
        id: 2,
        title: "Explores",
        icon: Icon.Home,
      },
      {
        id: 3,
        title: "Shorts",
        icon: Icon.Home,
      },
      {
        id: 4,
        title: "Subscriptions",
        icon: Icon.Home,
      },
    ],
  },
  {
    id: 2,
    title: "You",
    data: [
      {
        id: 1,
        title: "Library",
        icon: home,
      },
      {
        id: 2,
        title: "History",
        icon: home,
      },
      {
        id: 3,
        title: "Your videos",
        icon: home,
      },
      {
        id: 4,
        title: "Watch later",
        icon: home,
      },
      {
        id: 5,
        title: "Liked videos",
        icon: home,
      },
      {
        id: 6,
        title: "Show more",
        icon: home,
      },
    ],
  },
  {
    id: 3,
    title: "SUBSCRIPTIONS",
    data: [
      {
        id: 1,
        title: "Nadir On The Go",
        icon: home,
      },
      {
        id: 2,
        title: "Coke Studio",
        icon: home,
      },
      {
        id: 3,
        title: "MKBHD",
        icon: home,
      },
      {
        id: 4,
        title: "Figma",
        icon: home,
      },
      {
        id: 5,
        title: "ATC Android",
        icon: home,
      },
      {
        id: 6,
        title: "Alux.com",
        icon: home,
      },
    ],
  },
];
