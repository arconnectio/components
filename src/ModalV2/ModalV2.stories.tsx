import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spacer } from "../Spacer";
import { ButtonV2 } from "../ButtonV2";
import { useModal } from "../hooks";

import { ModalV2 } from ".";

export default {
  title: "ModalV2",
  component: ModalV2
} as ComponentMeta<typeof ModalV2>;

export const Basic: ComponentStory<typeof ModalV2> = (args) => (
  <ModalV2
    {...args}
    open={true}
    setOpen={() => {}}
  >
    <p>Pop up notification text goes here</p>
    <Spacer y={200} />
  </ModalV2>
);

export const Demo = () => {
  const modal = useModal();

  return (
    <>
      <ButtonV2 onClick={() => modal.setOpen(true)}>Show modal</ButtonV2>
      <ModalV2
        {...modal.bindings}
        actions={
          <>
            <ButtonV2 secondary onClick={() => modal.setOpen(false)}>No</ButtonV2>
            <ButtonV2 onClick={() => modal.setOpen(false)}>Yes</ButtonV2>
          </>
        }
      >
        <p>Pop up notification text goes here</p>
      </ModalV2>
    </>
  );
};
