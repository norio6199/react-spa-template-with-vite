---
to: <%= path %>/<%= component_name %>/index.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { <%= component_name %> } from '.';
import { css } from '@emotion/react';

export default {
  title: '<%= component_type %>/<%= component_name %>',
  component: <%= component_name %>,
  decorators: [(story) => <div css={css``}>{story()}</div>],
} as ComponentMeta<typeof <%= component_name %>>;

const Template: ComponentStory<typeof <%= component_name %>> = (args) => <<%= component_name %> {...args} />;

export const Default = Template.bind({});
Default.args = {};
