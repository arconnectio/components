import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal, ModalButton } from "./index";

export default {
  title: "Modal",
  component: Modal,
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
  </Modal>
);
