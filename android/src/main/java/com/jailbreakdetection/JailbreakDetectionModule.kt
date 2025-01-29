package com.jailbreakdetection

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scottyab.rootbeer.RootBeer

class JailbreakDetectionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "JailbreakDetection"
  }

  @ReactMethod
  fun isJailbroken(promise: Promise) {
    try {
      val rootBeer = RootBeer(reactApplicationContext)
      val isRooted = rootBeer.isRooted
      promise.resolve(isRooted)
    } catch (e: Exception) {
      promise.reject("isJailbrokenError", e.message, e)
    }
  }
}
