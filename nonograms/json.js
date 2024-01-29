const datesLevel1 = [
  {
    name: "Picture 1",
    left: [
      ["", "4"],
      ["2", "1"],
      ["", "4"],
      ["1", "1"],
      ["1", "1"],
    ],
    top: [
      ["", "1"],
      ["3", "1"],
      ["1", "2"],
      ["1", "1"],
      ["", "5"],
    ],
    answer: [
      [0, 1, 1, 1, 1],
      [1, 1, 0, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 1, 0, 1],
      [0, 1, 0, 0, 1],
    ],
    img: "./asserts/img/Level1.0.png",
  },

  {
    name: "Picture 2",
    left: [
      ["", "2"],
      ["", "1"],
      ["", "3"],
      ["", "3"],
      ["2", "1"],
    ],
    top: [["1"], ["3"], ["2"], ["5"], ["1"]],
    answer: [
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
    ],
    img: "./asserts/img/Level1.1.png",
  },

  {
    name: "Picture 3",
    left: [
      ["1", "1"],
      ["", "5"],
      ["", "5"],
      ["", "3"],
      ["", "1"],
    ],
    top: [["2"], ["4"], ["4"], ["4"], ["2"]],
    answer: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    img: "./asserts/img/Level1.2.png",
  },
  {
    name: "Picture 4",
    left: [
      ["", "2"],
      ["2", "1"],
      ["", "4"],
      ["1", "1"],
      ["1", "1"],
    ],
    top: [["4"], ["2"], ["3"], ["3"], ["1"]],
    answer: [
      [0, 0, 0, 1, 1],
      [1, 1, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 0],
      [1, 0, 1, 0, 0],
    ],
    img: "./asserts/img/Level1.3.png",
  },
  {
    name: "Picture 5",
    left: [
      ["", "5"],
      ["", "3"],
      ["", "1"],
      ["1", "1"],
      ["", "5"],
    ],
    top: [
      ["1", "1"],
      ["2", "2"],
      ["3", "1"],
      ["2", "2"],
      ["1", "1"],
    ],
    answer: [
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
    ],
    img: "./asserts/img/Level1.4.png",
  },
];

const datesLevel2 = [
  {
    name: "Picture 1",
    left: [
      ["", "", "3", "3"],
      ["1", "1", "1", "2"],
      ["", "", "2", "5"],
      ["", "", "1", "1"],
      ["", "", "3", "3"],
      ["", "2", "4", "2"],
      ["", "1", "1", "1"],
      ["1", "1", "1", "1"],
      ["", "1", "1", "1"],
      ["", "2", "1", "2"],
    ],
    top: [
      ["", "1", "1", "6"],
      ["", "", "6", "1"],
      ["", "", "1", "1"],
      ["", "", "", "4"],
      ["", "", "1", "1"],
      ["1", "1", "1", "1"],
      ["", "", "2", "1"],
      ["", "1", "1", "1"],
      ["", "", "6", "1"],
      ["", "", "3", "6"],
    ],
    answer: [
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    ],
  },
  {
    name: "Picture 2",
    left: [
      ["", "", "4"],
      ["", "4", "1"],
      ["", "5", "2"],
      ["", "4", "1"],
      ["", "2", "5"],
      ["1", "4", "2"],
      ["", "5", "1"],
      ["", "5", "1"],
      ["", "", "7"],
      ["", "", "5"],
    ],
    top: [
      ["", "", "4"],
      ["", "", "4"],
      ["", "", "3"],
      ["", "3", "4"],
      ["", "2", "6"],
      ["", "1", "6"],
      ["", "1", "8"],
      ["3", "1", "4"],
      ["1", "2", "2"],
      ["", "", "4"],
    ],
    answer: [
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
    ],
  },
  {
    name: "Picture 3",
    left: [
      ["", "", "", "2", "2"],
      ["", "", "", "3", "3"],
      ["", "", "1", "2", "1"],
      ["", "", "1", "6", "1"],
      ["1", "1", "2", "1", "1"],
      ["", "", "1", "6", "1"],
      ["", "", "", "", "8"],
      ["", "", "", "1", "1"],
      ["", "", "", "2", "1"],
      ["", "", "", "1", "1"],
    ],
    top: [
      ["", "", "3"],
      ["3", "1", "1"],
      ["2", "4", "1"],
      ["1", "1", "4"],
      ["", "", "5"],
      ["", "", "5"],
      ["1", "1", "5"],
      ["", "2", "4"],
      ["", "3", "1"],
      ["", "", "3"],
    ],
    answer: [
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    ],
  },
  {
    name: "Picture 4",
    left: [
      ["", "", "4"],
      ["", "1", "6"],
      ["", "1", "4"],
      ["", "2", "2"],
      ["", "", "8"],
      ["", "2", "2"],
      ["", "4", "1"],
      ["2", "2", "1"],
      ["", "1", "1"],
      ["", "3", "3"],
    ],
    top: [
      ["", "3", "2"],
      ["", "2", "1"],
      ["1", "2", "3"],
      ["3", "1", "2"],
      ["", "", "7"],
      ["", "", "7"],
      ["3", "1", "2"],
      ["1", "1", "3"],
      ["", "2", "1"],
      ["", "3", "1"],
    ],
    answer: [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    ],
  },
  {
    name: "Picture 5",
    left: [
      ["", "", "2", "5"],
      ["", "", "2", "7"],
      ["", "1", "1", "1"],
      ["1", "1", "1", "1"],
      ["", "", "", "5"],
      ["", "", "2", "7"],
      ["", "", "7", "1"],
      ["", "", "7", "1"],
      ["", "", "", "8"],
      ["", "", "", "7"],
    ],
    top: [
      ["", "2", "1"],
      ["", "4", "3"],
      ["", "", "3"],
      ["", "3", "5"],
      ["", "2", "6"],
      ["", "2", "6"],
      ["", "2", "7"],
      ["", "2", "6"],
      ["2", "2", "2"],
      ["", "3", "5"],
    ],
    answer: [
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
];

const datesLevel3 = [
  {
    name: "Picture 1",
    left: [
      ["", "", "", "", "5"],
      ["", "", "", "", "7"],
      ["", "", "", "7", "3"],
      ["", "", "", "7", "4"],
      ["", "", "", "5", "5"],
      ["", "", "", "", "10"],
      ["", "", "1", "1", "6"],
      ["", "", "", "1", "5"],
      ["", "", "1", "1", "4"],
      ["2", "1", "1", "1", "3"],
      ["", "", "5", "2", "1"],
      ["", "", "", "2", "1"],
      ["", "", "1", "1", "2"],
      ["", "", "2", "2", "2"],
      ["", "", "", "", "7"],
    ],
    top: [
      ["", "", "", "", "3"],
      ["", "", "", "", "4"],
      ["", "", "", "1", "1"],
      ["", "", "3", "4", "1"],
      ["", "5", "1", "1", "1"],
      ["", "", "6", "2", "1"],
      ["", "", "", "7", "1"],
      ["", "", "6", "2", "2"],
      ["", "", "", "6", "2"],
      ["3", "2", "1", "1", "1"],
      ["", "", "", "7", "2"],
      ["", "", "", "8", "2"],
      ["", "", "", "", "11"],
      ["", "", "", "", "7"],
      ["", "", "", "", "5"],
    ],
    answer: [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    ],
  },
  {
    name: "Picture 2",
    left: [
      ["", "2", "2", "1"],
      ["1", "4", "4", "1"],
      ["1", "1", "4", "2"],
      ["", "", "", "10"],
      ["", "4", "1", "6"],
      ["", "2", "7", "2"],
      ["", "", "3", "3"],
      ["", "", "3", "4"],
      ["", "", "1", "6"],
      ["", "4", "3", "1"],
      ["", "3", "1", "3"],
      ["1", "1", "1", "3"],
      ["", "3", "3", "1"],
      ["", "", "8", "1"],
      ["", "4", "4", "1"],
    ],
    top: [
      ["", "2", "1", "1"],
      ["", "3", "2", "1"],
      ["", "4", "2", "1"],
      ["4", "2", "1", "3"],
      ["", "2", "3", "8"],
      ["4", "1", "2", "2"],
      ["", "5", "1", "1"],
      ["2", "1", "1", "1"],
      ["", "5", "2", "2"],
      ["", "2", "3", "8"],
      ["6", "1", "2", "3"],
      ["4", "2", "2", "1"],
      ["", "5", "2", "1"],
      ["", "2", "3", "1"],
      ["", "", "1", "2"],
    ],
    answer: [
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0],
      [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    ],
  },
  {
    name: "Picture 3",
    left: [
      ["", "", "", "6"],
      ["", "", "2", "8"],
      ["2", "1", "2", "4"],
      ["", "5", "2", "4"],
      ["", "3", "2", "4"],
      ["", "", "3", "9"],
      ["", "", "7", "5"],
      ["", "", "4", "3"],
      ["", "2", "2", "3"],
      ["2", "2", "2", "2"],
      ["", "3", "2", "2"],
      ["", "2", "2", "2"],
      ["", "3", "2", "2"],
      ["", "", "6", "3"],
      ["", "", "", "9"],
    ],
    top: [
      ["", "", "", "", "1"],
      ["", "2", "3", "1", "1"],
      ["", "", "", "1", "11"],
      ["", "", "", "", "13"],
      ["", "", "2", "2", "1"],
      ["", "", "2", "1", "2"],
      ["", "2", "2", "2", "2"],
      ["2", "4", "2", "2", "1"],
      ["", "2", "3", "2", "1"],
      ["", "2", "1", "2", "1"],
      ["", "3", "2", "2", "1"],
      ["", "", "", "8", "9"],
      ["", "", "", "9", "2"],
      ["", "", "", "", "13"],
      ["", "", "", "4", "5"],
    ],
    answer: [
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
  },
  {
    name: "Picture 4",
    left: [
      ["", "", "3", "3"],
      ["", "", "5", "6"],
      ["", "", "7", "6"],
      ["", "", "10", "4"],
      ["", "4", "5", "3"],
      ["", "1", "5", "3"],
      ["2", "1", "4", "3"],
      ["1", "1", "2", "3"],
      ["2", "1", "2", "2"],
      ["", "4", "3", "2"],
      ["", "1", "3", "1"],
      ["", "", "3", "1"],
      ["", "", "1", "2"],
      ["", "", "", "6"],
      ["", "", "", "7"],
    ],
    top: [
      ["", "", "", "2", "3"],
      ["", "", "", "5", "3"],
      ["", "4", "1", "1", "1"],
      ["4", "1", "1", "1", "2"],
      ["", "", "3", "2", "4"],
      ["", "", "", "5", "2"],
      ["", "", "", "8", "5"],
      ["", "1", "5", "2", "3"],
      ["", "", "2", "8", "2"],
      ["", "", "", "", "9"],
      ["", "", "", "", "3"],
      ["", "", "", "4", "3"],
      ["", "", "", "", "11"],
      ["", "", "", "", "7"],
      ["", "", "", "", "5"],
    ],
    answer: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
      [1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "Picture 5",
    left: [
      ["", "", "2", "5", "2", "3"],
      ["", "", "", "2", "3", "6"],
      ["2", "1", "1", "1", "4", "1"],
      ["", "", "2", "1", "1", "6"],
      ["", "", "", "2", "2", "3"],
      ["", "1", "2", "2", "1", "1"],
      ["", "", "1", "1", "1", "2"],
      ["", "", "", "2", "3", "2"],
      ["", "", "", "", "3", "7"],
      ["", "", "", "5", "1", "4"],
      ["", "", "1", "2", "1", "3"],
      ["", "", "", "4", "1", "2"],
      ["", "4", "1", "1", "1", "1"],
      ["", "", "1", "1", "3", "2"],
      ["", "", "1", "1", "1", "1"],
    ],
    top: [
      ["", "", "", "4", "4"],
      ["", "", "5", "3", "2"],
      ["", "", "", "5", "1"],
      ["", "1", "2", "1", "6"],
      ["", "2", "2", "1", "1"],
      ["", "", "3", "2", "1"],
      ["", "", "2", "2", "1"],
      ["1", "2", "1", "1", "2"],
      ["", "", "", "1", "3"],
      ["", "", "5", "3", "1"],
      ["", "", "", "", "11"],
      ["", "", "3", "7", "1"],
      ["", "", "5", "4", "2"],
      ["", "2", "2", "2", "1"],
      ["", "", "6", "1", "1"],
    ],
    answer: [
      [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
      [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    ],
  },
];
export { datesLevel1, datesLevel2, datesLevel3 };
