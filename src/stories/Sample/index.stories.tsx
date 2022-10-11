import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sample } from '.';
import { css } from '@emotion/react';

export default {
  title: 'stories/Sample',
  component: Sample,
  decorators: [(story) => <div css={css``}>{story()}</div>],
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Default = Template.bind({});
Default.args = {};
