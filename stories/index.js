import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories
  .add("with text", () => <Button>Hello</Button>)
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
      Ola
    </Button>
  ))
  .add("with a button", () => (
    <button disabled={boolean("Disabled", false)}>
      {text("Label", "Hello Storybook")}
    </button>
  ))
  .add("as dynamic variables", () => {
    const name = text("Name", "Arunoda Susiripala");
    const age = number("Age", 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return <div>{content}</div>;
  });
