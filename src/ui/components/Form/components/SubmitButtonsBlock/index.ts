export default `
  <ul
  class="btns-container {{blockClass}}">
    {{#each buttons as |button|}}
      <li
      class="btns-container__item">
        {{> Button button}}
      </li>
    {{/each}}
  </ul>
`;
