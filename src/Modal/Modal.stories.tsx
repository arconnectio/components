import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { useModal } from "../hooks";

import { Modal, ModalButton } from "./index";

export default {
  title: "Modal",
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Basic: ComponentStory<typeof Modal> = (args) => (
  <Modal
    {...args}
    open={true}
    setOpen={() => {}}
    actions={
      <>
        <ModalButton>Ok</ModalButton>
        <ModalButton>Cancel</ModalButton>
      </>
    }
  >
    <p>This is a test</p>
    <Spacer y={200} />
  </Modal>
);

export const Demo = () => {
  const modal = useModal();

  return (
    <>
      <Button onClick={() => modal.setOpen(true)}>Show modal</Button>
      <Modal
        {...modal.bindings}
        actions={
          <>
            <ModalButton onClick={() => modal.setOpen(false)}>Ok</ModalButton>
          </>
        }
      >
        <p>This is a test modal demo</p>
      </Modal>
    </>
  );
};
