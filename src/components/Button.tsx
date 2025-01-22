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
  if (isAnchorProps(props))
    return (
      <a
        className={`button ${props.textOnly && `button--text-only`}`}
        {...props}
      >
        {props.children}
      </a>
    );

  return (
    <button
      className={`button ${props.textOnly && `button--text-only`}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
