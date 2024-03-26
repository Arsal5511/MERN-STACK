// @desc: Get Goals
// @route Get /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
};

// @desc: Set Goals
// @route POST /api/goals
// @access Private
const setGoals = (req, res) => {
  if (!req.body.test) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
};

// @desc: UPDATE Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = (req, res) => {
  res.status(200).json({
    message: `Update Goals with id ${req.params.id} `,
  });
};

// @desc: Delete Goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = (req, res) => {
  res.status(200).json({
    message: `Delete Goals with id ${req.params.id} `,
  });
};

//export All functions
module.exports = {
  getGoals,
  updateGoals,
  setGoals,
  deleteGoals,
};
