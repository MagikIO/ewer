import { DragOptions, createDraggable } from '@neodrag/solid';
import Scrollbars from 'solid-custom-scrollbars';
import { createSignal, For } from 'solid-js';
import Expandable from '../components/Expandable';
import { CustomUpdateMechanism } from '../modules/CustomUpdateMech';

export default () => {
  const [options, setOptions] = createSignal<DragOptions>({ axis: 'both', bounds: 'parent', grid: [80, 60] });
  const { draggable } = createDraggable();

  return (
    <Expandable header="Config">
      <div class="w-full max-h-[85dvh] min-h-[40dvh] mx-4">
        <Scrollbars
          style={{
            background: "transparent",
            "border-radius": "4.2rem",
            "scrollbar-color": "#e0b1cb #231942",
            width: '100%',
          }}
          color='#e0b1cb'
          autoHeight
          autoHeightMax='84dvh'
          autoHeightMin='41dvh'
        >
          <section class="bg-[#1a1b26] p-6 mx-2 min-h-full">
            <p class="text-purple-100">Here you can find the various options that you can configure to change aspects of your Cauldron.</p>
            <hr class="hr" />

            <div class="flex flex-col w-full h-[98dvh]">
              <h2 class="text-2xl text-purple-100 font-light mt-2 mb-1">Custom Update Repo</h2>
              <p class="text-purple-100 text-sm mb-2">You can use cauldron to generate a custom fish script that you can set up to run each time you open one of your repo in VSCode.
                <br />
                To do so, simply drag which blocks you'd like run into the "Custom Script" column, and then click "Generate Script".
              </p>

              <div class="flex flex-row">
                <div class="w-1/2 bg-gray-800 mr-1 rounded-md ">
                  <h3 class="text-xl text-frog font-light">Available Blocks</h3>
                  <p class="text-purple-200">Drag blocks here to create a custom script</p>
                  <For each={CustomUpdateMechanism.availableBlocks}>
                    {(item, index) => (
                      <div
                        use:draggable={options()}
                        data-index={index()}
                        class="bg-slate-400 bg-opacity-40 rounded-lg text-pretty px-2 py-1 my-1"
                      >
                        <sub class="float-end bg-violet-300 relative top-1">{item.recommendedOrder}</sub>

                        <h3 class="text-xl text-purple-300 font-light">{item.name}</h3>
                        <p class="text-purple-200">{item.description}</p>

                        <pre class="hidden">
                          {item.command}
                        </pre>
                      </div>
                    )}
                  </For>
                </div>
                <div class="w-1/2 bg-gray-800 ml-1 rounded-md ">
                  <h3 class="text-xl text-frog font-light">Custom Script</h3>
                  <p class="text-purple-200">Drag blocks here to create a custom script</p>
                  <div class="bg-slate-400 bg-opacity-40 rounded-lg text-pretty px-2 py-1 my-1">

                  </div>
                </div>
              </div>

            </div>
          </section>
        </Scrollbars >
      </div >
    </Expandable >
  );
};

