export default `
  <ul
  class="btns-container {{blockClass}}">
    {{#each buttons as |button|}}
      <li>
        {{> Button button}}
      </li>
    {{/each}}
  </ul>
`;
