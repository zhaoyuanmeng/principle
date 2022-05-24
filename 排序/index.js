const data = [
  {
    small_id: "1000961",
    ssm_date: "2021-04-21",
    ssm_duration: null,
    ssm_name: "应急专享服务",
    ssm_nub: "C10002724/C10002725",
    create_by: "admin",
    create_time: "2022-05-10 22:10:13.000",
    ssm_remaining: -22,
  },
  {
    small_id: "1000974",
    ssm_date: "2021-04-21",
    ssm_duration: null,
    ssm_name: "应急专享服务",
    ssm_nub: "C10002724/C10002725",
    create_by: "admin",
    create_time: "2022-05-10 22:10:13.000",
    ssm_remaining: -22,
  },
  {
    small_id: "1000978",
    ssm_date: "2021-04-23",
    ssm_duration: null,
    ssm_name: "应急专享服务",
    ssm_nub: "C10002724/C10002725",
    create_by: "admin",
    create_time: "2022-05-10 22:10:13.000",
    ssm_remaining: -20,
  },
  {
    small_id: "1000980",
    ssm_date: "2021-05-27",
    ssm_duration: null,
    ssm_name: "应急专享服务",
    ssm_nub: "C10002724/C10002725",
    create_by: "admin",
    create_time: "2022-05-10 22:10:13.000",
    ssm_remaining: 13,
  },
];

const compare = (obj1, obj2) => {
  let val1 = obj1.ssm_remaining;
  let val2 = obj2.ssm_remaining;

  if (val1 < val2) {
    return 1;
  } else if (val1 > val2) {
    return -1;
  } else {
    return 0;
  }
};

console.log(data.sort(compare));
console.log(data);
