// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        defaultSelected={theme === "dark"}
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={(isSelected: boolean) =>
          setTheme(isSelected ? "dark" : "light")
        }
      ></Switch>
    </div>
  );
}
