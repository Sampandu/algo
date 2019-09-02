var merge = function(intervals) {
  if (intervals === null || intervals.length === 0) return [];

  const points = [];
  for (let i = 0; i < intervals.length; i++) {
    points.push(new TimePoint(intervals[i][0], true));
    points.push(new TimePoint(intervals[i][1], false));
  }

  points.sort((a, b) => a.time - b.time);
  const record = [];
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    count = points[i].isStart ? count + 1 : count - 1;
    record.push(count);
  }

  const result = [];
  let start = 0;
  for (let i = 1; i < record.length; i++) {
    if (
      record[i] === 0 &&
      (i !== record.length - 1 && points[i + 1].time !== points[i].time)
    ) {
      result.push([points[start].time, points[i].time]);
      start = i + 1;
      continue;
    }
    if (i === record.length - 1) {
      result.push([points[start].time, points[i].time]);
    }
  }
  return result;
};

class TimePoint {
  constructor(time, bool) {
    this.time = time;
    this.isStart = bool;
  }
}
