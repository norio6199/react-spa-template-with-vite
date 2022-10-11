import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

type Props = {
  className?: string;
  children: ReactNode;
};

const _Sample = ({ className, children }: Props) => {
  const style = createStyle();

  return (
    <div className={className} css={style.root}>
      {children}
      hogehoge
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

export const Sample = React.memo(_Sample) as typeof _Sample;
