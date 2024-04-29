import { SliderBarGame } from "./Sidebar";
type Props = {
  children: React.ReactNode;
};
// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children }: Props) {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <SliderBarGame />
      <div
        className="w-full flex-1 overflow-hidden"
        style={{
          background: "#333",
          height: "93%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
