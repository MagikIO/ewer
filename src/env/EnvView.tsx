import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/tokyo-night-dark.min.css';
import Scrollbars from 'solid-custom-scrollbars';
import { createEffect, createMemo, mergeProps, splitProps } from "solid-js";
import ladle from '../modules/ladle';
import './env.css';

hljs.registerLanguage('json', json);

export default function EnvView(_props: any) {
  const props = mergeProps({ class: "" }, _props);
  const [, rest] = splitProps(props, ["children", "class", "innerHTML"]);

  const highlightedCode = createMemo<string | undefined>(() => {
    const childrenString = props.children?.toString();
    if (!childrenString) return;

    const result = hljs.highlight('json', childrenString).value;
    return result;
  });

  createEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  });

  return (
    <>
      <Scrollbars
        style={{
          background: "transparent",
          "border-radius": "4.2rem",
          "scrollbar-color": "#e0b1cb #231942",
          width: '100%',
        }}
        color='#e0b1cb'
        autoHeight
        autoHeightMax='85dvh'
        autoHeightMin='40dvh'
      >
        <pre
          style={{ "overflow-x": "hidden", width: '100%' }}
        >
          <code class={`hljs ${props.class}`} innerHTML={highlightedCode()} >
            {JSON.stringify(ladle('all:raw'), null, 2)}
          </code>
        </pre>
      </Scrollbars >
    </>
  );
}
