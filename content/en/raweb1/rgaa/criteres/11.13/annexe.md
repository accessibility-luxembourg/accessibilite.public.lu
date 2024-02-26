---
WCAG:
  - successCriterion: 1.3.5
    title: Identify Input Purpose
    level: AA
Techniques:
  - F107
  - H98
Norm:
  - criterion: 9.1.3.5
    title: Identify Input Purpose
---

#### Technical notes

The [list of possible values for the `autocomplete` attribute](#list-of-possible-values-for-the-autocomplete-attribute) is based on the list of values present in the WCAG2.1 specification which includes itself the list of "field name" type values from the HTML5.2 specification. The WCAG criterion requires that one of these values be present to qualify an input field concerning the user.

What the WCAG criterion leaves implicit are the different possible construction rules to obtain a value (simple or compound) for the `autocomplete` attribute. It is, however, the responsibility of the developer to provide the `autocomplete` attribute with a valid value or set of values with regard to the requirements of the algorithm provided by the HTML5.2 specification. Thus, an `autocomplete` attribute can only contain one `"field name"` type value, such as `"name"` or `"street-address"`. We can also have a set composed of different values such as, for example, `autocomplete="shipping name"` or `autocomplete="section-software shipping street-address"`: `"section-software"` returns a value of type <span lang="en">"scope"</span> and `"shipping"` to a value of type <span lang="en">"hint set"</span>, but always a single value of type <span lang="en">"field name"</span>.
