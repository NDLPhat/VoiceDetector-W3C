export const onstart = curInstance => {
  console.log("onstart");
};

export const onresult = (e, curInstance) => {
  if (typeof event.results === "undefined") {
    curInstance.stop();
    return;
  }
  for (var i = e.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) console.log("final results: " + event.results[i][0].transcript);
    else console.log("interim results: " + event.results[i][0].transcript);
  }
};

export const onend = curInstance => {
  alert("end");
};

export const onerror = (e, curInstance) => {
  console.log("error: ", e);
  if (e.error === "no-speech") curInstance.stop();
  if (e.error === "language-not-supported") alert("Please choose other language");
  if (e.error === "not-allowed") alert("Please allow microphone");
};
