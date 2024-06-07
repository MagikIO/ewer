import ENV_FILE from "../assets/env.json"

export default () => {
  const cauldron_prefixed = ENV_FILE.filter((env) => env.name.startsWith('CAULDRON_'));

  return cauldron_prefixed.map((env) => ({
    ...env,
    name: env.name.replace('CAULDRON_', ''),
  }))
}
