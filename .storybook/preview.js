export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      type: 'dynamic',
      excludeDecorators: true,
    },
  },
};

export const argTypes = {
  className: {
    table: {
      disable: true,
    },
  },
};
