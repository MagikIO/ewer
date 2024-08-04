// custom-attributes.d.ts
import type { DragOptions } from '@neodrag/solid';
import { JSX } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "div": HTMLAttributes<HTMLDivElement> & {
        "use:draggable"?: DragOptions;
      };
    }
  }
}
