---
title: Frame title
---

Content of the `title` attribute of the `<iframe>` or `<frame>` tag allowing you to know the nature of the content broadcast via the frame when the user navigates from frame to frame or displays the list of frames in the page for example.

Note 1: Some frames are used only for technical operations such as application processing intended to prepare or control content displayed on the page like the frames used by certain social networks such as Facebook for example.

If these frames do not have a frame title provided by the remote service, or if the frame titles are deemed irrelevant, generic terms may be used, for example `title="Facebook technical contents"`.

Note 2: If it does not interfere with the operation of this type of framework, it is possible to make them unavailable to assistive technologies using the WAI-ARIA attribute `aria-hidden="true"`. In this case {% crit 2.1 %} and {% crit 2.2 %} will not apply.
