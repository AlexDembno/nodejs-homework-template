const controllerWrapper = (controller) => {
  const fanc = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return fanc;
};

module.exports = controllerWrapper;
