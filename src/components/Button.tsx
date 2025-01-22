import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  textOnly: boolean;
  href?: never;
};

type LinkProps = ComponentPropsWithoutRef<'a'> & {
  textOnly: boolean;
  href: string;
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
      ></a>
    );

  return (
    <button
      className={`button ${props.textOnly && `button--text-only`}`}
      {...props}
    ></button>
  );
}
