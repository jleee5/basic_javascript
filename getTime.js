const getTime = (time, zone) => {
  const timezone = { EST: -5, CST: -6, MST: -7, PST: -8 };
  const hasTimeError = time < 1 || time > 24;
  const timezoneOffset = timezone[zone];

  if (hasTimeError || !timezoneOffset) {
    return hasTimeError ? "Time is invalid" : "Timezone is invalid";
  }

  const convertTime = (time, zone) => {
    const convertedTime = time + zone;
    if (convertedTime <= 0) {
      return 24 + convertedTime;
    }
    return convertedTime;
  };

  return convertTime(time, timezoneOffset);
};
console.log(getTime(1, "MST"));
