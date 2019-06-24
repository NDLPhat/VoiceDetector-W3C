import SpeechInterface from "./lib/SpeechInterface";
import * as callback from "./mycallback";

const speechToText = new SpeechInterface("vi-Vn");

speechToText.registerCallback(callback.onstart, callback.onend, callback.onresult, callback.onerror);

speechToText.start();
