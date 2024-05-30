import { createSignal } from 'solid-js';
import EnvView from './EnvView';
import { ToggleFullWidthButton } from './toggleFullBtn';

export default () => {
  const [fullWidthPref, changeFullWidthPref] = createSignal(false);
  const fullWidthSectionStyle = () => fullWidthPref() ? 'mx-2' : 'w-2/3 mx-auto';
  const toggleFullWidth = () => changeFullWidthPref(!fullWidthPref());

  return (
    <>
      <section class={`flex flex-col ${fullWidthSectionStyle()} transition-all justify-center bg-[#1a1b26] rounded-full mt-5`}>
        <h1 class="text-3xl text-center text-frog font-light mt-2 -mb-5">
          ENV Settings
        </h1>
        <ToggleFullWidthButton fullWidthPref={fullWidthPref} toggleFullWidth={toggleFullWidth} />
        <EnvView />
      </section >
    </>
  );
};
