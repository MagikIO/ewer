import Expandable from '../components/Expandable';
import ladle from '../modules/ladle';

export default () => {
  const cauldron_envs = ladle();
  const familiar = cauldron_envs.find((env) => env.name === 'FAMILIAR')!;
  const unlockedFamiliars = cauldron_envs.find((env) => env.name === 'UNLOCKED_FAMILIARS')!;


  return (
    <Expandable header="Familiar">
      <div>
        <section class="sub-section">
          <p class="text-purple-100">Currently your familiar is: {familiar.value}</p>
        </section>
      </div>

    </Expandable>
  );
};
