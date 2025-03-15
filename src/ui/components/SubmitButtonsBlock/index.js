export default `
  <div
  class="btns-container {{blockClass}}">
    {{#each buttons as |button|}}
      {{> Button button}}
    {{/each}}
  </div>
`;
