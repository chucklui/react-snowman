import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

/** Smoke Test */
it("works at all", function() {
  render(
    <Snowman />
  );
});

/** Test losing state */

it("shows end game state on loss", function() {
    const { container } = render(
      <Snowman maxGuesses={4} />
    );

    const buttonB = container.querySelector("button[value='b']");
    fireEvent.click(buttonB);
    const buttonZ = container.querySelector("button[value='z']");
    fireEvent.click(buttonZ);
    const buttonM = container.querySelector("button[value='m']");
    fireEvent.click(buttonM);
    const buttonY = container.querySelector("button[value='y']");
    fireEvent.click(buttonY);
    // const buttonX = container.querySelector("button[value='x']");
    // fireEvent.click(buttonX);
    // const buttonO = container.querySelector("button[value='o']");
    // fireEvent.click(buttonO);

    // expect the first image to show, but not the second
    expect(container
            .querySelector('.Snowman>img')
            .getAttribute('alt')
        ).toEqual('4');
    expect(
      container.querySelector('.Snowman-buttons')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('.Snowman-endmessage')
    ).toBeInTheDocument();
    
    //snapshot
    expect(container).toMatchSnapshot();
  });