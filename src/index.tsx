import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-jailbreak-detection' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({
    ios: "- You have run 'pod install'\n",
    android: '- You have rebuilt the app after installing the package\n',
    default: '',
  }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const JailbreakDetection = NativeModules.JailbreakDetection
  ? NativeModules.JailbreakDetection
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

/**
 * Checks if the device is jailbroken (rooted).
 *
 * @returns {Promise<boolean>} A promise that resolves to true if the device is jailbroken, false otherwise.
 */
export function isJailbroken(): Promise<boolean> {
  return JailbreakDetection.isJailbroken();
}
