import { Checks } from "phosphor-react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";
import { ComponentProps } from "react";

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Checks weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  );
}

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

CheckBox.displayName = 'CheckBox';
