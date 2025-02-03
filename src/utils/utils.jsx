const Icons = {
  rightArrow: () => (
    <svg
      fill="#000000"
      width="50px"
      height="24px"
      viewBox="0 0 50 24"
      id="right"
      data-name="Flat Line"
      className="icon flat-line"
    >
      <line
        id="primary"
        x1="40"
        y1="12"
        x2="3"
        y2="12"
        style={{fill: "none", stroke: "rgb(0, 0, 0)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2"}}
      ></line>
      <polyline
        id="primary-2"
        data-name="primary"
        points="33 5 40 12 33 19"
        style={{fill: "none", stroke: "rgb(0, 0, 0)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2"}}
      ></polyline>
    </svg>
  ),
};

export default Icons;
