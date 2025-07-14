"use client";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface IRulesSoftProps {
  header?: JSX.Element;
  title?: string;
  content?: JSX.Element;
  classNameTitle?: string;
  className?: string;
  button?: string;
  keyClose?: number;
}

export default function Modal(props: IRulesSoftProps) {
  const {
    title,
    header,
    content,
    classNameTitle,
    className,
    button,
    keyClose = 0,
  } = props;
  const [openModal, setOpen] = React.useState<boolean>(false);
  const onOpenChange = (value: boolean) => {
    setOpen(value);
  };
  React.useEffect(() => {
    if (keyClose !== 0) {
      setOpen(false);
    }
  }, [keyClose]);

  return (
    <Dialog open={openModal} onOpenChange={onOpenChange}>
      <DialogTrigger className={`${classNameTitle}`}>{header}</DialogTrigger>
      {/* max-w-full max-h-full inset-0 translate-x-0 translate-y-0 */}
      <DialogContent
        className={`inset-0 border-0  ${className ? className : "md:min-w-[600px]"} `}
      >
        <DialogHeader>
          <DialogTitle className="mb-5">{title}</DialogTitle>
          <div>{content}</div>
          {button && (
            <Button
              type="submit"
              onClick={() => setOpen(false)}
              className="w-full text-base font-bold text-white"
            >
              {button}
            </Button>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
