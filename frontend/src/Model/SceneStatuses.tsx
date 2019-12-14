export type SceneStatus = "idle" | "filling" | "live" | "emptying";

export type ColorMapT = {
  [status in "idle" | "filling" | "live" | "emptying"]: string;
};

export const colorMap: ColorMapT = {
  idle: "#3EE03E",
  filling: "#FAAC27",
  live: "#E03E3E",
  emptying: "#3EABE0"
};
