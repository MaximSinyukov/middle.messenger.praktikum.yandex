export default `
  <li
  class="input-container {{inputContainerClass}}">
    <label
    for="{{name}}"
    class="input-container__label {{inputLabelClass}}">
      {{title}}
    </label>

    <input
    type="{{#if typeInput}}{{typeInput}}{{^}}text{{/if}}"
    name="{{name}}"
    id="{{name}}"
    {{#if readonly}}readonly{{/if}}
    placeholder="{{placeholder}}"
    class="input-container__input {{inputClass}}"/>

    {{#if error}}
      <span
      data-error="{{error}}"
      class="input-container__error">
      </span>
    {{/if}}
  </li>
`;
