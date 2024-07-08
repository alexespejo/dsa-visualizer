import { markerColor } from "../stores/treeMarker";

export default function markerDisplay(v1: number, v2: number) {
 let traversalAnimationColor = "";
 markerColor.subscribe((value: string) => {
  traversalAnimationColor = value;
 });
 if (v1 === v2) {
  return `font-bold border-4 text-2xl ${traversalAnimationColor}`;
 }
}
