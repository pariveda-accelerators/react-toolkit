## Motivation

Pariveda could benefit from a core component library and set of utilities when building internal and external applications using React. Modern application development has higher stakes & stricter requirements around accessibility, user experience, & code quality.

A core library of components built with each of these tenants in mind ensures a minimum level of quality for the final product. Component libraries, in general, also accelerate development by reducing the ramp-up time before a development team can deliver their first feature.

## Core Tenants

### Accessibility

According to [W3](https://www.w3.org/WAI/fundamentals/accessibility-intro/#what), Web Accessibility means that, "websites, tools, and technologies are designed and developed so that people with disabilities can use them."

Web Accessibility, as with many other forms of accessibility, benefits more than only those with diabilities. Keyboard accessibility benefits users who prefer to use only their keyboard to interact with an application. Color contrast standards benefit users with perfectly good eyesight in the same way it benefits those with poorer eyesight.

### User Experience

Virtually all web applications are designed to be used by people. As such, each user will have a personal experience with each webapp they encounter. A component library centered around the user and their ideal experience ensures they are more likely to come back to the application, spend more time using the application, or otherwise have better outcomes while using the application.

A user's experience may be affected by many things including, but not limited to:

- Time to first render (or paint)
- Consistent experience with similar UI elements
- Animations & transitions for dynamic content (beware of accessibility concerns!)

### Code Quality

Last, but not least, code quality ensures accessibility, user experience, and an application's overall quality are maintained from the most central place possible. A component library that provides accessible dropdowns, buttons, forms, etc can ensure many independent applications support accessibility and good user experiences by default.

Furthermore, as standards change, a centralized component can be updated to meet new standards and updates may be adopted as individual product teams are able to. Why build something twice when you can do it once?

## Tooling

- React for building components
- React PropTypes for runtime validations
- TypeScript for in-editor and pre-runtime validations
- Jest for running Unit & Integration tests
- Cypress for running E2E testing (consideration for bundled documentation website)
- [TSdx](https://github.com/jaredpalmer/tsdx) to bundle component library
- Style Dictionary for managing design tokens
- SASS for generating styles (open to alternatives if we decide to tightly couple styles w/ each component)

## [To Be] Included Components, Utilities, & Values

- Color Palette
- Typography
- Spacing
- Buttons
- Accordions
- Badges & Pills
- Cards
- Checkboxes
- Radio Buttons
- Toggle Switches
- Text Fields & Text Areas
- Floating Action Buttons
- Select Menus
- Selection Boxes & Combo Boxes
- Tooltips
- Flex
- Forms & Form Components
  - Legend
  - Fieldset
  - Radio Button
  - Checkbox
  - Toggle Switch
  - Text Field & Text Area
  - etc
