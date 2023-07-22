import { Fragment } from "react";

import { Transition, Dialog } from "@headlessui/react";
import { IJob } from "@/types";

interface JobDetailProp {
  job?: IJob;
  isOpen?: Boolean;
  closeModal: () => void;
}

const JobDetail = ({ job, isOpen, closeModal }: JobDetailProp) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-16 ">
            <Dialog.Title className="text-xl font-bold text-gray-800 mb-4">
              {job?.title}
            </Dialog.Title>
            <p className="text-gray-700 mb-4">{job?.description}</p>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default JobDetail;
