import { Modal } from "@mui/material";
import React from "react";
import { twMerge } from "tailwind-merge";

const ModalComponent = ({
  open,
  setOpen,
  trigger,
  children,
  className,
}: {
  open: boolean;
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactElement;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={twMerge(className)}>
      {trigger}
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalComponent;
