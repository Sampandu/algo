const minMeetingRooms = function(intervals) {
  if (intervals === null || intervals.length === 0) return 0;

  const points = [];
  for (let i = 0; i < intervals.length; i++) {
    points.push(new TimePoint(intervals[i][0], true));
    points.push(new TimePoint(intervals[i][1], false));
  }
  points.sort((a, b) => a.time - b.time);
  console.log(points);

  const records = [];
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    count = points[i].isStart ? count + 1 : count - 1;
    records.push(count);
  }
  console.log(records);
  return Math.max(...records);
};

class TimePoint {
  constructor(time, bool) {
    this.time = time;
    this.isStart = bool;
  }
}
