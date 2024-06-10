import { createSignal, Component } from 'solid-js';
import { ToggleFullWidthButton } from './toggleFullBtn';
import type { JSX } from 'solid-js/jsx-runtime';

interface ExpandableProps {
  header: string;
  children: JSX.Element | JSX.Element[]
}

export const Expandable: Component<ExpandableProps> = (props) => {
  const [fullWidthPref, changeFullWidthPref] = createSignal(false);
  const fullWidthSectionStyle = () => fullWidthPref() ? 'w-[98dvw]' : 'w-2/3';
  const toggleFullWidth = () => changeFullWidthPref(!fullWidthPref());

  return (
    <div class="flex flex-col justify-center items-center">
      <section class={`expandable-section ${fullWidthSectionStyle()}`}>
        <h1 class="text-3xl text-center text-frog font-light mt-2 -mb-5">
          {props.header}
        </h1>
        <ToggleFullWidthButton fullWidthPref={fullWidthPref} toggleFullWidth={toggleFullWidth} />
        {props.children}
      </section >
    </div>
  );
}
export default Expandable;
