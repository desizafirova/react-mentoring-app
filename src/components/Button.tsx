import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  textOnly: boolean;
  href?: never;
  children: ReactNode;
};

type LinkProps = ComponentPropsWithoutRef<'a'> & {
  textOnly: boolean;
  href: string;
  children: ReactNode;
};

function isAnchorProps(props: ButtonProps | LinkProps): props is LinkProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  if (isAnchorProps(props)) {
    const { textOnly, children, ...otherProps } = props;
    return (
      <a
        className={`button ${textOnly ? 'button--text-only' : ''}`}
        {...otherProps}
      >
        {children}
      </a>
    );
  } else {
    const { textOnly, children, ...otherProps } = props;
    return (
      <button
        className={`button ${textOnly ? 'button--text-only' : ''}`}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}
