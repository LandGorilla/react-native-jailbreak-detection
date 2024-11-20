#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(JailbreakDetection, NSObject)

RCT_EXTERN_METHOD(isJailbroken:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
