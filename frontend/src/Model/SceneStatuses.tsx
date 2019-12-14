export type SceneStatus = "idle" | "filling" | "live" | "emptying";

export type ColorMapT = {
  [status in "idle" | "filling" | "live" | "emptying"]: string;
};

export const colorMap: ColorMapT = {
  idle: "#3EE03E",
  filling: "#E03E3E",
  live: "#FAAC27",
  emptying: "#3EABE0"
};
