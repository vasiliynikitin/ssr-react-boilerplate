function dashboardGet() {
  const data = [
    {
      text: 'Watch movie'
    },
    {
      text: 'Learn a guitar',
    },
    {
      text: 'Break neck of fucking douchbag Sam',
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
}

export default {
  'dashboard.get': dashboardGet,
};
