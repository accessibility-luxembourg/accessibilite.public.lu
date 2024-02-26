---
title: Contrast
---

Marked contrast between the brightness of a foreground color and a background color.
The contrast ratio is based on the difference in relative luminance between the background and the foreground according to the rule:
(L1 + 0.05) / (L2 + 0.05) where L1 is the brightest relative luminance and L2 is the darkest relative luminance. Brightness is calculated using the following formula: L = 0.2126 \* R + 0.7152 \* G + 0.0722 \* B. Where R, G and B are defined by:

- If R sRGB ≤ 0.03928 then R = R sRGB /12.92 otherwise R = ((R sRGB +0.055)/1.055) ^ 2.4;
- If G sRGB ≤ 0.03928 then G = G sRGB /12.92 otherwise G = ((G sRGB +0.055)/1.055) ^ 2.4;
- If B sRGB ≤ 0.03928 then B = B sRGB /12.92 otherwise B = ((B sRGB +0.055)/1.055) ^ 2.4.

and R sRGB, G sRGB and B sRGB are defined by:

- R sRGB = R8bit/255;
- G sRGB = G8bit/255;
- B sRGB = B8bit/255.

The “^” character is the power operator.

Note: Contrast measurement is for text, text-in-picture, text and text-in-picture in animations, subtitle text and embedded text in videos. For text and image text in animations, closed caption text, and in-frame text in videos, the font size should be measured against the default display size (as displayed) . The texts present in the elements of an image or video (for example a sign, a poster, etc.) are not affected.

Source: [WCAG Contrast Calculation Procedure](https://www.w3.org/WAI/WCAG21/Techniques/general/G18#procedure).
