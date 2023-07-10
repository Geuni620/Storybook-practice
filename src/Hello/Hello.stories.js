import React from "react";
import {action} from "@storybook/addon-actions";
import Hello from "./Hello";
import mdx from "./Hello.mdx";

export default {
  title: "components|basic/Hello", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx,
    },
  },
};

export const standard = () => (
  <Hello
    name="Storybook"
    onHello={action("hello clicked")}
    onBye={action("bye clicked")}
  />
);

export const big = () => (
  <Hello
    big
    name="Storybook"
    onHello={action("hello clicked")}
    onBye={action("bye clicked")}
  />
);

export const small = () => (
  <Hello
    name="Storybook"
    onHello={action("hello clicked")}
    onBye={action("bye clicked")}
  />
);
