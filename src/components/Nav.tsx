import { A, useLocation } from "@solidjs/router";
import { createSignal, onCleanup, onMount } from 'solid-js';

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-secondary" : "border-transparent hover:border-tertiary";

  const [rect, setRect] = createSignal({ width: window.innerWidth, height: window.innerHeight })

  const handler = () => (
    setRect({ width: window.innerWidth, height: window.innerHeight })
  )

  onMount(() => { window.addEventListener('resize', handler) })
  onCleanup(() => { window.removeEventListener('resize', handler) })

  const size = () => {
    // 🤷 If it works, it works!
    const textScaling = {
      "text-6xl": [2000, 999999],
      "text-5xl": [1500, 1999],
      "text-4xl": [900, 1499],
      "text-3xl": [830, 899],
      "text-2xl": [750, 829],
      "text-xl": [690, 749],
      "text-lg": [520, 689],
      "text-md": [1, 519],
    } as const;

    const { width } = rect()
    for (const [key, [min, max]] of Object.entries(textScaling)) {
      if (max == null && width >= min) {
        return key
      } else if (width >= min && width <= max) {
        return key
      }
    }
  }

  return (
    <nav class="bg-primary flex">
      <ul class="flex items-center p-3 text-gray-300 flex-none">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Home</A>
        </li>
        <li class={`border-b-2 ${active("/config")} mx-1.5 sm:mx-6`}>
          <A href="/config">Config</A>
        </li>
      </ul>

      <div class="container flex items-center flex-grow justify-center">
        <A href="/" class="text-gray-300">
          <h1 class={`max-6-xs ${size()} font-thin uppercase`}>
            ˚⋆｡°✩°｡⋆ Cauldron ⋆｡°✩°｡⋆˚
          </h1>
        </A>
      </div>

      <ul class="flex items-center p-3 text-gray-300 flex-none">
        <li class={`border-b-2 ${active("/env")} mx-1.5 sm:mx-6`}>
          <A href="/env">Env</A>
        </li>
        <li class={`border-b-2 ${active("/familiar")} mx-1.5 sm:mx-6`}>
          <A href="/familiar">Familiar</A>
        </li>
      </ul>
    </nav>
  );
}
