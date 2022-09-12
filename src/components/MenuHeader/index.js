import logo from "./pandao-logo.png";
export default function MenuHeader() {
  return (
    <div style={{ height: "64px", padding: "4px 16px" }}>
      <img style={{ height: "64px" }} src={logo} alt="logo" />
    </div>
  );
}
