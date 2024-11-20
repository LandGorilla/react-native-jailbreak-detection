import IOSSecuritySuite

@objc(JailbreakDetection)
class JailbreakDetection: NSObject {

  @objc(isJailbroken:withRejecter:)
  func isJailbroken(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    resolve(IOSSecuritySuite.amIJailbroken())
  }
}
