---
to: <%= path %>/<%= component_name %>/index.tsx
---
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

type Props = {
  className?: string;
  children: ReactNode;
};

const _<%= component_name %> = ({ className, children }: Props) => {
  const style = createStyle();

  return (
    <div className={className} css={style.root}>
      {children}
    </div>
  );
};

const createStyle = () => {
  return {
    root: css`
      /* styles */
    `,
  };
};

export const <%= component_name %> = React.memo(_<%= component_name %>) as typeof _<%= component_name %>;