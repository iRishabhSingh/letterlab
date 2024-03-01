"use client";

import { useState } from "react";
import { Button, Textarea, Tooltip } from "@nextui-org/react";
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTrainCase,
  toSentenceCase,
  toTitleCase,
} from "./functions";

const TextArea = () => {
  const [text, setText] = useState("");

  const cases = [
    { label: "UPPERCASE", action: () => setText(text.toUpperCase()) },
    { label: "lowercase", action: () => setText(text.toLowerCase()) },
    { label: "trim", action: () => setText(text.trim()) },
    { label: "camelCase", action: () => setText(toCamelCase(text)) },
    { label: "PascalCase", action: () => setText(toPascalCase(text)) },
    { label: "snake_case", action: () => setText(toSnakeCase(text)) },
    { label: "kebab-case", action: () => setText(toKebabCase(text)) },
    { label: "Train-Case", action: () => setText(toTrainCase(text)) },
    { label: "Sentence case", action: () => setText(toSentenceCase(text)) },
    { label: "Title Case", action: () => setText(toTitleCase(text)) },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Text Utility Tool</h1>
      <Textarea
        label="TEXTAREA"
        variant="bordered"
        placeholder="Enter your text here"
        onValueChange={(value: string) => setText(value)}
        description={
          <div>
            <div className="text-tiny">
              {text.length} {text.length > 1 ? "letters" : "letter"} &&nbsp;
              {text.length == 0
                ? 0
                : text.split(" ").filter((t) => t.trim()).length}
              &nbsp;word(s).
            </div>
            <div className="text-tiny">
              You can read given text in&nbsp;
              {text.split(" ").filter((t) => t.trim()).length / 255 < 1
                ? `${
                    (text.split(" ").filter((t) => t.trim()).length / 255) * 60
                  } seconds`
                : `${
                    text.split(" ").filter((t) => t.trim()).length / 255
                  } minutes`}
            </div>
          </div>
        }
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      />
      <div className="gap-4 flex py-4 flex-wrap">
        {cases.map(({ label, action }) => (
          <Button
            key={label}
            color="primary"
            variant="flat"
            onClick={action}
            className="px-6 w-[auto]"
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="pt-4">
        <h2 className="text-3xl font-bold mb-6">Preview</h2>
        <Textarea
          isReadOnly
          label="TEXTAREA PREVIEW"
          variant="bordered"
          placeholder="Enter your description"
          value={text}
        />
      </div>
      <div className="gap-4 flex py-4">
        <Tooltip
          showArrow
          color={text.length === 0 ? "danger" : "default"}
          content={
            <div className="px-1 py-2">
              <div className="text-tiny">
                Copy <span className="italic">text</span> to clipboard
              </div>
            </div>
          }
        >
          <Button
            isDisabled={text === ""}
            color="primary"
            variant="flat"
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
            className="px-6 w-[auto]"
          >
            Copy
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default TextArea;
