# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] Add their email and submit the form
- [x] See a success message with their email after successfully submitting the form
- [x] See form validation messages if:
  - [x] The field is left empty
  - [x] The email address is not formatted correctly
- [x] View the optimal layout for the interface depending on their device's screen size
- [x] See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- [Frontend Mentor solution page](https://www.frontendmentor.io/solutions/newsletter-signup-form-ft-11ty-fluid-custom-props-and-vanilla-js-Q0IaasmckC)
- [Live site](https://joshjavier.github.io/newsletter-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid and Flexbox for the layout
- Mobile-first workflow
- [Eleventy](https://www.11ty.dev/)
- Vanilla JS for form validation

### What I learned

- Creating [fluid custom properties](https://utopia.fyi/blog/fluid-custom-properties/) instead of simply copy-pasting the generated CSS on Utopia's calculators for implementing fluid type and scale.

- `::backdrop` doesn't accept CSS custom properties defined in `:root` because it "neither inherits from nor is inherited by any other elements" ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop))

- There are only a few [allowed CSS `::marker` properties](https://web.dev/css-marker-pseudo-element/#allowed-css-marker-properties) that can be modified, so in this solution, I used `::before` to add the checkmark bullet icons.

- HTML5 `required` vs `aria-required` - one of the few exceptions to the [first rule of ARIA use](https://www.w3.org/TR/using-aria/#rule1). Using `required` implies reliance on the browser's default form field validation, which limits style and behavior customizations, and is [not very friendly with assistive tech](https://adrianroselli.com/2019/02/avoid-default-field-validation.html). In this case, since we're using JavaScript for the form validation logic, then `aria-required` is the better choice.

- Different types (or *moments*) of form validation:
  1. Instant validation
  2. Afterward validation
  3. Submit validation

  This solution uses all three, but mostly the second and third types. Specifically, the form field is validated when:

  1. The user types something and leaves the field, either by pressing Tab or clicking on a different element. This type of validation is associated with the `blur` event.

  2. The user submits the form. As you have guessed, this is associated with the `submit` event.

  3. Lastly, when the user goes back to the field to correct a mistake, instant validation is triggered so that the error message/styling can be removed once the user inputs the correct format. This is associated with the `keyup` event, though I think the `input` event can be used as well.

### Continued development

Use template partials/web components to implement the success message

### Useful resources

- [A Guide to Accessible Form Navigation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/) by Sandrina Pereira
- [VoiceOver and list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) by Gerard K. Cohen
- ["Fixing" Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) by Scott O'Hara
- [Alert and Message Dialogs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/) from the Aria Authoring Practices Guide (APG)
- [\<dialog\>: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) from MDN Web Docs
- [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) from MDN Web Docs - In particular, the compatibility notes under [Roles with implicit live region attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes) helped me decide to use the `aria-live` attribute instead of `role="alert"` to allow for more flexibility in the form validation.

## Author

- [Personal website](https://joshjavier.com/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/joshjavier)
- [Twitter](https://twitter.com/joshjavierr)
- [LinkedIn](https://ph.linkedin.com/in/joshjavier)
