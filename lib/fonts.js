import {Josefin_Sans} from "next/font/google";

import { Pacifico } from "next/font/google";

export const secondary = Pacifico({
  subsets: ["latin"],
  weight: ["400"], // only one available for this font
});

export const primery = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"], // only one available for this font
});