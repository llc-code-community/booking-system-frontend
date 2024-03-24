import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { Dropdown } from './Modal.styled';

export interface ModalProps {
  children?: ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ children, show, onClose }: ModalProps) {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog as="div" className="fixed inset-0 z-50 flex items-center" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dropdown />
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto">
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
