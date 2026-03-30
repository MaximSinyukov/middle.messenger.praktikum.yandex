export default `
  <button
  data-button="{{data}}"
  type="{{type}}"
  class="button {{classes}}">
    {{title}}

    {{#if iconSrc}}
      <img
      src="{{iconSrc}}"
      alt="{{iconAlt}}"
      class="button__icon {{iconExtraClass}}"/>
    {{/if}}
  </button>
`;
