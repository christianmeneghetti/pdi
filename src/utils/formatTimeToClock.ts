export function formatTimeToClock(timer: number) {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const [tenMinutes, unitMinutes] = String(minutes).padStart(2, "0");
  const [tenSeconds, unitSeconds] = String(seconds).padStart(2, "0");

  return { tenMinutes, unitMinutes, tenSeconds, unitSeconds };
}
