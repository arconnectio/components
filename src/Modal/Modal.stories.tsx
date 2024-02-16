import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spacer } from "../Spacer";
import { ButtonV2 } from "../ButtonV2";
import { useModal } from "../hooks";

import { Modal } from "./index";

export default {
  title: "Modal",
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Basic: ComponentStory<typeof Modal> = (args) => (
  <Modal
    {...args}
    open={true}
    setOpen={() => {}}
  >
    <p>Pop up notification text goes here</p>
    <Spacer y={200} />
  </Modal>
);

export const Demo = () => {
  const modal = useModal();

  return (
    <>
      <ButtonV2 onClick={() => modal.setOpen(true)}>Show modal</ButtonV2>
      <Modal
        {...modal.bindings}
        actions={
          <>
            <ButtonV2 secondary onClick={() => modal.setOpen(false)}>No</ButtonV2>
            <ButtonV2 onClick={() => modal.setOpen(false)}>Yes</ButtonV2>
          </>
        }
      >
        <p>Pop up notification text goes here</p>
      </Modal>
    </>
  );
};
