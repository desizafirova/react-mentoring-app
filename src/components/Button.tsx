import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };

type LinkProps = ComponentPropsWithoutRef<'a'> & { href: string };

function isAnchorProps(props: ButtonProps | LinkProps): props is LinkProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  if (isAnchorProps(props)) return <a className="button" {...props}></a>;

  return <button className="button" {...props}></button>;
}
