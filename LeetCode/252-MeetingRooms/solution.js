const canAttendMeetings = function(intervals) {
  if (intervals === null || intervals.length === 0) return true;

  const points = [];
  for (let i = 0; i < intervals.length; i++) {
    points.push(new TimePoint(intervals[i][0], true));
    points.push(new TimePoint(intervals[i][1], false));
  }

  points.sort((a, b) => a.time - b.time);

  let count = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i].isStart) {
      count++;
    } else {
      count--;
    }

    if (count > 1) {
      return false;
    }
  }
  return true;
};

class TimePoint {
  constructor(time, bool) {
    this.time = time;
    this.isStart = bool;
  }
}
