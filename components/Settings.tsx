import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SettingsIcon } from "@/components/icons";

const Settings = () => {
  return (
    <>
      <Popover className="relative">
        <PopoverTrigger>
          <SettingsIcon />
        </PopoverTrigger>
        <PopoverContent className="p-1 flex justify-center items-center my-2">
          <div className="flex flex-row justify-center rounded-xl border-1 border-transparent hover:border-white hover:border-dashed p-1">
            <p className="flex flex-row items-center font-bold ml-2">
              Dark Mode
              <span className="flex-end pl-4">
                <ThemeSwitcher />
              </span>
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Settings;
