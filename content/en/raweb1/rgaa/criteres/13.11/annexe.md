---
WCAG:
  - successCriterion: 2.5.2
    title: Pointer Cancellation
    level: A
Techniques:
  - F101
  - G210
  - G212
Norm:
  - criteria: 9.2.5.2
    title: Pointer Cancellation
---

#### Special cases

There is special case handling when the functionality requires that the expected behavior be performed during a top-down event, for example, a keyboard emulator whose keys must activate on pressure like on a physical keyboard. In these situations, the criterion is not applicable.

#### Technical notes

Two examples of a mechanism put in place to cancel or abandon an action triggered by a pointing device on a single point on the screen:

- A modal window allowing you to cancel the action after its completion;
- For a drag/drop function, aborting the action if the user releases the item outside the target area.
