import { createEffect, createMemo, splitProps, mergeProps } from "solid-js";
import ENV_FILE from "../assets/env.json"
import Scrollbars from 'solid-custom-scrollbars'
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/tokyo-night-dark.min.css';

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
    <Scrollbars style={{ height: '60dvh' }}>
      <pre>
        <code class={`hljs ${props.class}`} innerHTML={highlightedCode()} >
          {JSON.stringify(ENV_FILE, null, 2)}
        </code>
      </pre>
    </Scrollbars>
  );
}
