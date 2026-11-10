---
title: Contraste
---

Opposition marquée entre la luminosité d’une couleur de premier plan et d’une couleur d’arrière-plan. Le rapport de contraste est basé sur la différence de luminance relative entre l’arrière-plan et le premier plan selon la règle&nbsp;: (L1 + 0,05) / (L2 + 0,05) où L1 est la luminance relative la plus claire et L2 la luminance relative la plus sombre. La luminosité est calculée selon la formule suivante&nbsp;: L = 0,2126 * R + 0,7152 * G + 0,0722 * B. Où R, G et B sont définis par&nbsp;:

- Si RsRGB <= 0,03928 alors R = RsRGB/12,92 sinon R = ((RsRGB+0,055)/1,055) ^ 2,4&nbsp;;
- Si GsRGB <= 0,03928 alors G = GsRGB/12,92 sinon G = ((GsRGB+0,055)/1,055) ^ 2,4&nbsp;;
- Si BsRGB <= 0,03928 alors B = BsRGB/12.92 sinon B = ((BsRGB+0,055)/1,055) ^ 2,4.

et RsRGB, GsRGB et BsRGB sont définis par&nbsp;:

- RsRGB = R8bit/255&nbsp;;
- GsRGB = G8bit/255&nbsp;;
- BsRGB = B8bit/255.

Le caractère «&nbsp;^&nbsp;» est l’opérateur de puissance.

**Note&nbsp;:** la mesure de contraste concerne le texte, le contenu dans les éléments graphiques, le texte et le texte en image dans les animations, le texte de sous-titrage et le texte incrusté dans les vidéos. Les textes présents dans les éléments d’un élément graphique ou d’une vidéo (par exemple un écriteau, une affiche, etc.) ne sont pas concernés.

**Source&nbsp;:** [Procédure de calcul de contraste des WCAG (en anglais)](https://www.w3.org/WAI/WCAG21/Techniques/general/G18#procedure).
