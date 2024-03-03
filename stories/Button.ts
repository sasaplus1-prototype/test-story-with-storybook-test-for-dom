type Props = {
  onClick: VoidFunction;
};

export function Button(props: Props) {
  const button = document.createElement("button");

  button.textContent = "Click me";
  button.addEventListener("click", props.onClick, false);

  return button;
}
