// eslint-disable-next-line no-undef
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        message: `
Where would you like to create component?
ex. src/component/atom
ex. src/component/molecule
`,
        name: 'path',
        type: 'input',
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return false;
        },
      },
      {
        message: `
What is the name of component?
ex. Button
`,
        name: 'component_name',
        type: 'input',
        validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return false;
        },
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const component_type = answers.path.split('/').pop();
      return { ...answers, component_type };
    });
  },
};
