package com.latestapp;// replace com.your-app-name with your app’s name

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
// import com.facebook.react.bridge.Callback;
// import com.facebook.react.bridge.Promise;

// import com.facebook.react.modules.core.DeviceEventManagerModule;
// import com.facebook.react.bridge.WritableMap;
// import com.facebook.react.bridge.Arguments;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    // add to CalendarModule.java
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        return constants;
    }

    // @ReactMethod
    // public void createCalendarEvent(String name, String location, Callback callBack) {
    //     Integer eventId = 23;
    //     callBack.invoke(eventId);
    // }

    // @ReactMethod
    // public void createCalendarEvent(String name, String location, Promise promise) {
    //     try {
    //         Integer eventId = 23;
    //         promise.resolve(eventId);
    //     } catch (Exception e) {
    //         promise.reject("Create Event Error", e);
    //     }
    // }

    // private void sendEvent(ReactContext reactContext,
    //         String eventName,
    //         @Nullable WritableMap params) {
    //     reactContext
    //             .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
    //             .emit(eventName, params);
    // }

    // @ReactMethod
    // public void addListener(String eventName) {
    //     // Set up any upstream listeners or background tasks as necessary
    // }

    // @ReactMethod
    // public void removeListeners(Integer count) {
    //     // Remove upstream listeners, stop unnecessary background tasks
    // }

    
}