import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../theme/Theme";

export default function ProfileImage() {
  const [theme] = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        width: 200,
        height: 200,
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          opacity: isLight ? 1 : 0,
          transition: "opacity 0.2s",
          pointerEvents: isLight ? "auto" : "none",
        }}
        aria-hidden={!isLight}
      >
        <Image
          src="/profile.webp"
          width={200}
          height={200}
          alt={isLight ? "Sajad Mahyaei" : ""}
          priority
        />
      </span>
      <span
        style={{
          position: "absolute",
          inset: 0,
          opacity: isLight ? 0 : 1,
          transition: "opacity 0.2s",
          pointerEvents: isLight ? "none" : "auto",
        }}
        aria-hidden={isLight}
      >
        <Image
          src="/batman-profile.webp"
          width={200}
          height={200}
          alt={!isLight ? "Sajad Mahyaei" : ""}
          priority
        />
      </span>
    </span>
  );
}
