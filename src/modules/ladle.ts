import ENV_FILE from "../assets/env.json"

type PrefixedRequest = 'aqua' | 'all';
type RawRequest = `${PrefixedRequest}:raw`;

/**
 * Ladle
 * 
 * This module will read from the env.json file and:
 * 
 * - Default: Return all the environment variables that are prefixed with 'CAULDRON_'.
 * - "aqua": Return all the environment variables that are prefixed with 'AQUA__' or `AQUARIUM__`.
 * - "all": Return all the environment variables
 * 
 * Additionally, if they add `:raw` it will not clean the 'CAULDRON_' prefix from the environment variable names.
 */
export default <R extends undefined | PrefixedRequest | RawRequest | 'raw'>(requesting?: R) => {
  const requested_prefixed = (requesting === 'all' || requesting === 'all:raw')
    ? ENV_FILE
    : (requesting === 'aqua' || requesting === 'aqua:raw')
      ? ENV_FILE.filter((env) => env.name.startsWith('AQUA__') || env.name.startsWith('AQUARIUM__'))
      : ENV_FILE.filter((env) => env.name.startsWith('CAULDRON_'));

  return (requesting === 'raw') 
    ? requested_prefixed
    : (requesting?.endsWith(':raw'))
      ? requested_prefixed
      : requested_prefixed.map((env) => ({
        ...env,
        name: env.name.replace('CAULDRON_', ''),
      }))
}
